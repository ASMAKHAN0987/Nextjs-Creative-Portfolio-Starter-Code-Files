/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf --transform 
Files: scene.gltf [5.45KB] > D:\images\robo_shiba\scene-transformed.glb [492.36KB] (-8934%)
Author: Grigorii Ischenko (https://sketchfab.com/grigoriyarx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robo-shiba-b4215f3c452c4e7cbe845b56251d2877
Title: Robo Shiba
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Shiba_Shiba_0.geometry} material={materials.Shiba} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
