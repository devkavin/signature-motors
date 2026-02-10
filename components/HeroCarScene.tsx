"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";

function StylizedCar() {
  return (
    <group position={[0, -0.6, 0]}>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.8, 1.6]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.0, 0]} castShadow>
        <boxGeometry args={[1.8, 0.6, 1.4]} />
        <meshStandardMaterial color="#1f6feb" metalness={0.7} roughness={0.25} />
      </mesh>
      {[-1.2, 1.2].flatMap((x) => [-0.85, 0.85].map((z) => ({ x, z }))).map(({ x, z }) => (
        <mesh key={`${x}-${z}`} position={[x, 0.15, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.34, 0.34, 0.25, 32]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroCarScene() {
  return (
    <Canvas shadows camera={{ position: [5, 2.5, 5], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 3]} intensity={1.2} castShadow />
      <spotLight position={[-4, 6, 2]} intensity={0.8} angle={0.4} />
      <StylizedCar />
      <Environment preset="city" />
      <ContactShadows position={[0, -0.2, 0]} opacity={0.4} scale={10} blur={1.8} far={2.5} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={4} maxDistance={8} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}
