import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls, useCursor, Stage, Environment } from '@react-three/drei';
import { Cubos2 } from './Cubos2'


export default function Scene4() {
  const [mode, setMode] = useState('rotate');
  const [target, setTarget] = useState(null);

  const handlePointerMissed = () => {
    setTarget(null);
  };

  

  return (
    <div className='cubos-skills'>

    <Canvas id='skills' environment='city' className='canvas' camera={{ position: [5, 0, 0], fov: 25}} dpr={[1, 2]} onPointerMissed={handlePointerMissed}>
      {/* <Stage
      intensity={1.5}
      environment='city'
      shadows={{ type: 'accumulative', color:'#d9afd9', colorBlend: 2, opacity: 2}}
      adjustCamera={1}>
      </Stage> */}
        <Environment preset='city'/>
      
      <Cubos2 onClick={(e) => setTarget(e.object)} />
      {target && <TransformControls object={target} mode={mode} />}
      <OrbitControls enableZoom={false} enableRotate={false} makeDefault />
    </Canvas>
    </div>
  );
}