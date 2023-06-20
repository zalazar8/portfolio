import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const ROTAR_SPEED = 0.1;

export function Letra(props) {
  const { nodes, materials } = useGLTF("./models/letraM.gltf");

  const rotar = useRef()
  useFrame((_state, delta) => {
    rotar.current.rotation.z += delta * ROTAR_SPEED;
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
        ref={rotar}
        // castShadow
        // receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/letraM.gltf");