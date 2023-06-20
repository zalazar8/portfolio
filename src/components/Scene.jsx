import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Letra } from './Letra';

export const Scene = () => {
  return (
    <>
    <Stage
      intensity={1.5}
      environment='city'
      shadows={{ type: 'accumulative', color:'#d9afd9', colorBlend: 2, opacity: 2}}
      adjustCamera={2}>

      {/* <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh> */}
      {/* <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1.5, 1.85]}> */}
      <Letra />
      {/* </Float> */}
      </Stage>
      <OrbitControls
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
};
