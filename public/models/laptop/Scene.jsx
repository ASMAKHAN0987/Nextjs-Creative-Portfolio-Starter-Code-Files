/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf --transform 
Files: scene.gltf [122.6KB] > D:\images\laptop\scene-transformed.glb [892.08KB] (-628%)
Author: RaflyNaHa (https://sketchfab.com/RaflyNaHa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asus-rog-strix-scar-17-2023-g733-gaming-laptop-51eca7b2e5884c4087f3499e523d5184
Title: Asus ROG Strix Scar 17 (2023) G733 Gaming Laptop
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Logo_AMD} position={[-1.463, 2.371, 0.027]} scale={0.104} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.PaletteMaterial001} position={[1.407, 2.382, -1.147]} scale={0.019} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial002} position={[0.847, 2.382, -1.005]} rotation={[0, -0.747, 0]} scale={0.138} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Lightbar} position={[0.847, 2.382, -1.005]} rotation={[0, -0.747, 0]} scale={0.138} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.Layar} position={[0, 3.716, -1.681]} rotation={[1.396, 0, 0]} />
      <mesh geometry={nodes.Object_103.geometry} material={materials.Hole} position={[0, 2.205, -0.332]} rotation={[-Math.PI, 0, 0]} />
      <mesh geometry={nodes.Object_111.geometry} material={materials.Logo_RTX} position={[-1.172, 2.371, 0.027]} scale={0.104} />
      <mesh geometry={nodes.Object_117.geometry} material={materials.PaletteMaterial003} position={[0.34, 2.382, -1.273]} scale={0.057} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
