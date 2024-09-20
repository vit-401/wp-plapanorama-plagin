// src/components/WalkControls.js
import React, { useRef, useEffect } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WalkControls() {
  const { camera, gl } = useThree();

  // Створюємо сферу для фізики гравця
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0], // Початкова позиція над підлогою
    args: [0.5],          // Радіус сфери
    fixedRotation: true,
    angularDamping: 1,
    linearDamping: 0.5,
    material: {
      friction: 0.5,
      restitution: 0,
    },
  }));

  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => {
      velocity.current = v;
    });
    return () => unsubscribe();
  }, [api.velocity]);

  const movement = useRef({ forward: 0, backward: 0, left: 0, right: 0 });

  // Змінні для контролю оберту камери
  const yaw = useRef(0);   // Оберт по Y (горизонтальне)
  const pitch = useRef(0); // Оберт по X (вертикальне)

  // Обробка натискання клавіш
  const onKeyDown = (event) => {
    switch (event.code) {
      case 'KeyW':
        movement.current.forward = 1;
        break;
      case 'KeyS':
        movement.current.backward = 1;
        break;
      case 'KeyA':
        movement.current.left = 1;
        break;
      case 'KeyD':
        movement.current.right = 1;
        break;
      default:
        break;
    }
  };

  // Обробка відпускання клавіш
  const onKeyUp = (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'KeyS':
        movement.current.forward = 0;
        movement.current.backward = 0;
        break;
      case 'KeyA':
      case 'KeyD':
        movement.current.left = 0;
        movement.current.right = 0;
        break;
      default:
        break;
    }
  };

  // Обробка руху миші
  const onMouseMove = (event) => {
    if (document.pointerLockElement !== gl.domElement) return;

    const movementX = event.movementX || 0;
    const movementY = event.movementY || 0;

    const sensitivity = 0.002;
    yaw.current -= movementX * sensitivity;
    pitch.current -= movementY * sensitivity;

    // Обмежуємо pitch до [-π/2, π/2]
    pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));
  };

  // Обробка блокування та розблокування вказівника
  useEffect(() => {
    const handleClick = () => {
      gl.domElement.requestPointerLock();
    };
    document.addEventListener('click', handleClick);

    const handlePointerLockChange = () => {
      if (document.pointerLockElement === gl.domElement) {
        // Pointer Lock активовано
        document.addEventListener('mousemove', onMouseMove);
      } else {
        // Pointer Lock розблоковано
        document.removeEventListener('mousemove', onMouseMove);
      }
    };

    const handlePointerLockError = () => {
      console.error('Pointer Lock Error');
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);
    document.addEventListener('pointerlockerror', handlePointerLockError);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
      document.removeEventListener('pointerlockerror', handlePointerLockError);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [gl.domElement]);

  // Обробка натискання клавіш
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  // Оновлення руху та орієнтації камери кожного кадру
  useFrame(() => {
    const { forward, backward, left, right } = movement.current;

    const moveDirection = new THREE.Vector3(
      right - left,
      0,
      backward - forward
    ).normalize();

    const speed = 5;
    api.velocity.set(
      moveDirection.x * speed,
      velocity.current[1],
      moveDirection.z * speed
    );

    // Оновлення орієнтації камери
    camera.rotation.y = yaw.current;
    camera.rotation.x = pitch.current;

    // Оновлення позиції камери з відступом по Y
    const spherePosition = new THREE.Vector3();
    ref.current.getWorldPosition(spherePosition);
    camera.position.set(
      spherePosition.x,
      spherePosition.y + 1.0, // Висота камери над сферою
      spherePosition.z
    );
  });

  return <mesh ref={ref} />;
}
