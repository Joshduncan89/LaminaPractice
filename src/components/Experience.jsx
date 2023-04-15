import { OrbitControls } from '@react-three/drei';
import { Background } from './Background';
import { Airplane } from './Airplane';
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <mesh>
        <Airplane />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
