import React, { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber';
import { useCursor, useGLTF, Float } from '@react-three/drei'

export function Cubos2(props) {
    const { size } = useThree();
    const [hovered, setHovered] = useState(false);
    const [groupPosition, setGroupPosition] = useState([0, -0.65, 0]);

    useEffect(() => {
      function handleResize() {
        if (size.width < 600) {
          setGroupPosition([-11, -0.65, 0]);
        } else if (size.width < 960) {
          setGroupPosition([-3, -0.65, 0]);
        } else {
          setGroupPosition([0, -0.65, 0]);
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [size.width]);
  useCursor(hovered);
  const { nodes, materials } = useGLTF('./models/skillsCubos.gltf')
  return (
    <group position={groupPosition} {...props} dispose={null} onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['2'].geometry} material={materials.Material} position={[0, 1, 0.375]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['4'].geometry} material={materials['Material.001']} position={[0, 1, -1.125]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['3'].geometry} material={materials['Material.002']} position={[0, 1, -0.375]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['1'].geometry} material={materials['Material.003']} position={[0, 1, 1.125]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['5'].geometry} material={materials['Material.004']} position={[0, 0.25, 1.5]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['6'].geometry} material={materials['Material.005']} position={[0, 0.25, 0.75]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['7'].geometry} material={materials['Material.006']} position={[0, 0.25, 0]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['8'].geometry} material={materials['Material.007']} position={[0, 0.25, -0.75]} scale={0.25} />
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 0.05]}>
      <mesh geometry={nodes['9'].geometry} material={materials['Material.008']} position={[0, 0.25, -1.5]} scale={0.25} />
      </Float>
    </group>
  )
}

useGLTF.preload('./models/skillsCubos.gltf')
