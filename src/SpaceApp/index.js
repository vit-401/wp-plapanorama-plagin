// src/App.js
import React, { Suspense, useState } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import {Sky, Environment, Html, PointerLockControls} from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from 'three-stdlib';
import WalkControls from "./WalkControls";
import Wall from "./Wall";
import ColoredModel from "./YourModel";

// Розширюємо R3F з OrbitControls
extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

function Index() {
  const [modelColor, setModelColor] = useState('#ff6347'); // Початковий колір

  const handleChangeColor = (event) => {
    setModelColor(event.target.value);
  };

  return (
    <>
      {/* Елемент управління для зміни кольору */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        background: 'rgba(255,255,255,0.8)',
        padding: '10px',
        borderRadius: '8px'
      }}>
        <label htmlFor="colorPicker">Choose Model Color: </label>
        <input
          type="color"
          id="colorPicker"
          value={modelColor}
          onChange={handleChangeColor}
        />
      </div>

      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 75 }}>
        {/* Освітлення */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Небо та середовище */}
        <Sky />
        <Environment preset="sunset" />

        {/* Pointer Lock Controls */}
        <PointerLockControls />

        {/* Фізичний провайдер з дебагом */}
        <Physics gravity={[0, -9.81, 0]} debug>
          <Suspense fallback={<Html><div>Loading...</div></Html>}>
            {/* Використання ColoredModel з динамічним кольором */}
            <ColoredModel color={modelColor} position={[0, 1, 0]} scale={[1, 1, 1]} />
            <WalkControls />
            {/* Підлога */}
            <mesh receiveShadow position={[0, 0, 0]}>
              <boxGeometry args={[50, 1, 50]} />
              <meshStandardMaterial color="grey" />
              <Wall position={[0, 0.5, 0]} args={[50, 1, 50]} />
            </mesh>

            {/* Стіни */}
            <Wall position={[0, 2.5, -25]} args={[50, 5, 1]} /> {/* Задня стіна */}
            <Wall position={[0, 2.5, 25]} args={[50, 5, 1]} /> {/* Передня стіна */}
            <Wall position={[-25, 2.5, 0]} args={[1, 5, 50]} /> {/* Ліва стіна */}
            <Wall position={[25, 2.5, 0]} args={[1, 5, 50]} /> {/* Права стіна */}
          </Suspense>
        </Physics>

        {/* Опційне HTML-налаштування у 3D-сцені */}
        <Html position={[0, 5, 0]}>
          <div style={{ color: 'white', background: 'rgba(0,0,0,0.5)', padding: '10px' }}>
            Welcome to the 3D Scene!
          </div>
        </Html>
      </Canvas>
    </>
  );
}

export default Index;
