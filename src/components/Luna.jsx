import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


const ROTAR_SPEED = 0.5;

export function Luna(props) {
  const { nodes, materials } = useGLTF('./models/luna.gltf')

  const rotar = useRef()
  useFrame((_state, delta) => {
    rotar.current.rotation.y += delta * ROTAR_SPEED;
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={rotar} geometry={nodes.Sphere.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('./models/luna.gltf')
