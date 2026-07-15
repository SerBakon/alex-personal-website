import { Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Background() {
  const texture = useTexture("/8k_milkyway.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <>
      <mesh>
        <sphereGeometry args={[500, 64, 64]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          color="#cccccc"
        />
      </mesh>
      <Stars radius={200} depth={100} count={5000} factor={4} saturation={1} />
    </>
  );
}
