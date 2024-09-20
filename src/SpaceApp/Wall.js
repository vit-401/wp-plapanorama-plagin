// src/components/Wall.js
import React from 'react';
import { useBox } from '@react-three/cannon';

export default function Wall({ position, args }) {
  useBox(() => ({
    type: 'Static',
    position,
    args, // [ширина, висота, глибина]
    material: {
      friction: 1,       // Висока фрикція для стін
      restitution: 0,    // Без відскоку
    },
  }));

  return null;
}
