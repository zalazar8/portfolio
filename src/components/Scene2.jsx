import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Cubos } from './Cubos';

export const Scene2 = () => {
  return (
    <>
    <Stage
      intensity={1.5}
      environment='city'
      shadows={{ type: 'accumulative', color:'#d9afd9', colorBlend: 2, opacity: 2}}
      adjustCamera={1}>

      {/* <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh> */}
      {/* <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1.5, 1.85]}> */}
      <Cubos />
      {/* </Float> */}
      </Stage>
      <OrbitControls
        // enableRotate={false}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
};
