import { Float, OrbitControls } from '@react-three/drei';
import { Background } from './Background';
import { Airplane } from './Airplane';
import { Cloud } from './Cloud';
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />

      <Float floatIntensity={2} speed={2}>
        <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} />
      </Float>
      <Cloud scale={[0.3, 0.3, 0.2]} position={[-2, -1, 3]} />
      <Cloud scale={[0.1, 0.4, 0.1]} position={[0, 2, 1]} />
      <Cloud scale={[0.4, 0.1, 0.3]} position={[-2, 1, -3]} />
      <Cloud scale={[0.2, 0.2, 0.2]} position={[-1, 0, 2]} />
    </>
  );
};
