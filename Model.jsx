/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/airplane/model.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.PUSHILIN_Plane_Circle000.geometry} material={materials.plane} />
      <mesh geometry={nodes.PUSHILIN_Plane_Helix.geometry} material={materials.plane} position={[1.09, 0.23, 0]} />
    </group>
  )
}

useGLTF.preload('/model.glb')
