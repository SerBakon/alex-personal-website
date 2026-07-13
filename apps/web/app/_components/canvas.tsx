"use client";
import { Stars, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { type RefObject, useRef } from "react";
import * as THREE from "three";
import type { TrackballControls as TrackballControlsType } from "three-stdlib";
import Wormhole from "./wormhole";

export default function HomeCanvas() {
  const controlsRef = useRef<TrackballControlsType | null>(null);
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <TrackballControls
        ref={controlsRef}
        rotateSpeed={3}
        noZoom={false}
        noPan={true}
        minDistance={1}
        maxDistance={20}
        staticMoving={false}
        dynamicDampingFactor={0.15}
      />
      <AutoRotate controlsRef={controlsRef} speed={3} />
      <Stars radius={200} depth={100} count={5000} factor={4} saturation={0} />
      <color attach="background" args={["#000"]} />
      <Wormhole />
    </Canvas>
  );
}

function AutoRotate({
  controlsRef,
  speed = 0.15,
}: {
  controlsRef: RefObject<TrackballControlsType | null>;
  speed?: number;
}) {
  const axis = new THREE.Vector3(0, 1, 0);
  const realSpeed = speed / 100;
  useFrame((state, delta) => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    const target = controls.target;

    // rotate camera position around target on Y axis
    const offset = state.camera.position.clone().sub(target);
    offset.applyAxisAngle(axis, delta * realSpeed);
    state.camera.position.copy(target).add(offset);
    state.camera.lookAt(target);
  });
  return null;
}
