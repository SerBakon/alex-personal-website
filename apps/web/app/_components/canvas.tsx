"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Wormhole from "./wormhole";

export default function HomeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <OrbitControls autoRotate autoRotateSpeed={0.1} />
      <Stars radius={200} depth={100} count={5000} factor={4} saturation={0} />
      <color attach="background" args={["#000"]} />
      <Wormhole />
    </Canvas>
  );
}
