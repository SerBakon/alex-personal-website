import { Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Background() {
  const texture = useTexture("/8k_milkyway.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <>
      <mesh renderOrder={-1}>
        <sphereGeometry args={[500, 64, 64]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          color="#cccccc"
          depthWrite={false}
        />
      </mesh>
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={10}
        saturation={1}
        fade
      />
    </>
  );
}
