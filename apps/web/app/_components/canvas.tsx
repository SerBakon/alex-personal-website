"use client";
import { Canvas } from "@react-three/fiber";

export default function HomeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
