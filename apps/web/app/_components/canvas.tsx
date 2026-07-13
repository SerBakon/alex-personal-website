"use client";
import { CameraControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Wormhole from "./wormhole";

export default function HomeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <CameraControls
        minPolarAngle={-Infinity}
        maxPolarAngle={Infinity}
        azimuthRotateSpeed={0.5}
        polarRotateSpeed={0.5}
        minDistance={1}
        maxDistance={20}
      />
      <Stars radius={200} depth={100} count={5000} factor={4} saturation={0} />
      <color attach="background" args={["#000"]} />
      <Wormhole />
    </Canvas>
  );
}
