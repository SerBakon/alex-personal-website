import { Cloud, Stars } from "@react-three/drei";

export default function Background() {
  return (
    <>
      <color attach="background" args={["#050510"]} />
      <Stars radius={200} depth={100} count={5000} factor={4} saturation={1} />
    </>
  );
}
