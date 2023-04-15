import * as THREE from 'three';
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  Environment,
  Sphere,
} from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Gradient, LayerMaterial } from 'lamina';

export const Background = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={'blue'}
            colorB={'red'}
            axes={'y'}
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
