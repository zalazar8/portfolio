import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Luna } from './Luna';

export const SceneMoon = () => {
  return (
    <>
    <Stage
      intensity={1}
      environment='city'
      shadows={{ type: 'accumulative', color:'#d9afd9', colorBlend: 2, opacity: 2}}
      adjustCamera={1.5}>
      {/* <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh> */}
      {/* <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1.5, 1.85]}> */}
      <Luna />
      {/* </Float> */}
      </Stage>
      <OrbitControls
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4} />
    </>
  );
};
