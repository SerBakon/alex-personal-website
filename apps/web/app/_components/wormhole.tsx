export default function Wormhole() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  );
}
