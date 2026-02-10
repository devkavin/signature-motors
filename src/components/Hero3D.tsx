'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function CarShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[2.8, 0.6, 1.4]} radius={0.08} smoothness={5} position={[0, 0, 0]}>
        <meshStandardMaterial color="#16335f" metalness={0.7} roughness={0.2} />
      </RoundedBox>
      <RoundedBox args={[1.6, 0.5, 1.2]} radius={0.08} smoothness={5} position={[0.1, 0.5, 0]}>
        <meshStandardMaterial color="#214f90" metalness={0.45} roughness={0.25} />
      </RoundedBox>
      {[-0.95, 0.95].map((x) =>
        [-0.5, 0.5].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -0.4, z]}>
            <cylinderGeometry args={[0.27, 0.27, 0.2, 32]} />
            <meshStandardMaterial color="#121212" metalness={0.2} roughness={0.8} />
          </mesh>
        ))
      )}
    </group>
  );
}

export function Hero3D() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Premium Pre-Owned & Certified</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Find your next drive at Signature Motors</h1>
          <p className="text-slate-200">
            Discover inspected vehicles, transparent financing, and trusted trade-in valuations designed for modern buyers in Colombo.
          </p>
          <a href="#inventory" className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Browse Inventory
          </a>
        </div>
        <div className="h-[320px] rounded-xl border border-white/20 bg-white/5">
          {prefersReducedMotion ? (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-slate-100">
              3D preview disabled to respect reduced motion preferences. Explore our curated inventory below for detailed vehicle galleries.
            </div>
          ) : (
            <Canvas camera={{ position: [2.8, 1.8, 2.8], fov: 45 }}>
              <ambientLight intensity={0.35} />
              <spotLight intensity={1.2} position={[5, 8, 5]} angle={0.3} penumbra={0.6} castShadow />
              <pointLight intensity={0.6} position={[-4, 2, -3]} color="#96b3ff" />
              <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.25}>
                <CarShape />
              </Float>
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]}>
                <circleGeometry args={[4, 64]} />
                <meshStandardMaterial color="#1a2644" roughness={0.9} metalness={0.15} />
              </mesh>
              <Environment preset="city" />
              <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
            </Canvas>
          )}
        </div>
      </div>
    </section>
  );
}
