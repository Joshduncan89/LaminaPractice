import * as THREE from 'three';
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  Environment,
  Sphere,
  Stars,
} from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Gradient, LayerMaterial } from 'lamina';

export const Background = () => {
  return (
    <>
      {/* <Stars /> */}
      <Environment preset="sunset" />
      <Sphere scale={[30, 30, 30]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={'#062e43'}
            colorB={'#de7819'}
            axes={'y'}
            start={-0.1}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
