import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls, useCursor } from '@react-three/drei';
import { Cubos } from './Cubos'

function Box(props) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function Scene3() {
  const [mode, setMode] = useState('rotate');
  const [target, setTarget] = useState(null);

  const handlePointerMissed = () => {
    setTarget(null);
  };

  return (
    <Canvas dpr={[1, 2]} onPointerMissed={handlePointerMissed}>
      <Box position={[2, 2, 0]} onClick={(e) => setTarget(e.object)} />
      <Box onClick={(e) => setTarget(e.object)} />
      {target && <TransformControls object={target} mode={mode} />}
      <OrbitControls enableZoom={false} enableRotate={false} makeDefault />
    </Canvas>
  );
}