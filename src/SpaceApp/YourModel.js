// src/components/YourModel.js
import React, {useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import Wall from './Wall';
import * as THREE from 'three';
import flgl from '../models/m-plans1.glb'
export default function ColoredModel({ color, ...props }) {
  const { scene } = useGLTF(flgl); // Шлях до вашої моделі

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && (child.name.includes('Wall') || child.name.includes('Floor'))) {
        child.geometry.computeBoundingBox();
        const boundingBox = child.geometry.boundingBox;
        const size = new THREE.Vector3();
        boundingBox.getSize(size);

        const position = child.getWorldPosition(new THREE.Vector3());

        // Створення колайдінгу для стіни або підлоги
        // Додайте компонент Wall з відповідними параметрами
        // Note: React не дозволяє повертати JSX з useEffect, тому використовуйте інший підхід
      }
    });
  }, [scene, color]);

  // Зміна кольору матеріалів
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.color) {
        child.material.color = new THREE.Color(color);
        child.material.needsUpdate = true;
      }
    });
  }, [scene, color]);

  return <primitive object={scene} {...props} />;
}
useGLTF.preload(flgl); // Попереднє завантаження моделі
