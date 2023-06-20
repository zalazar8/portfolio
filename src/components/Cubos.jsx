import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cubos(props) {
  const { nodes, materials } = useGLTF('./models/skillsCubos.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['2'].geometry} material={materials.Material} position={[0, 1, 0.375]} scale={0.25} />
      <mesh geometry={nodes['4'].geometry} material={materials['Material.001']} position={[0, 1, -1.125]} scale={0.25} />
      <mesh geometry={nodes['3'].geometry} material={materials['Material.002']} position={[0, 1, -0.375]} scale={0.25} />
      <mesh geometry={nodes['1'].geometry} material={materials['Material.003']} position={[0, 1, 1.125]} scale={0.25} />
      <mesh geometry={nodes['5'].geometry} material={materials['Material.004']} position={[0, 0.25, 1.5]} scale={0.25} />
      <mesh geometry={nodes['6'].geometry} material={materials['Material.005']} position={[0, 0.25, 0.75]} scale={0.25} />
      <mesh geometry={nodes['7'].geometry} material={materials['Material.006']} position={[0, 0.25, 0]} scale={0.25} />
      <mesh geometry={nodes['8'].geometry} material={materials['Material.007']} position={[0, 0.25, -0.75]} scale={0.25} />
      <mesh geometry={nodes['9'].geometry} material={materials['Material.008']} position={[0, 0.25, -1.5]} scale={0.25} />
    </group>
  )
}

useGLTF.preload('./models/skillsCubos.gltf')
