'use client';

import { Environment, Html, MeshTransmissionMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function PerformanceCar({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    const targetRotationY = -0.8 + scrollProgress * 1.6;
    const targetPositionY = -0.25 + scrollProgress * 0.2;
    const targetPositionX = -0.45 + scrollProgress * 0.9;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.02 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02, 0.08);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPositionY, 0.08);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPositionX, 0.08);

    wheelsRef.current.forEach((wheel, index) => {
      wheel.rotation.x -= delta * (2.3 + scrollProgress * 2.8);
      wheel.rotation.z = index % 2 === 0 ? 0.03 : -0.03;
    });
  });

  return (
    <group ref={groupRef} position={[-0.4, -0.2, 0]}>
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[4, 0.7, 1.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.82} roughness={0.16} />
      </mesh>

      <mesh position={[0.45, 0.65, 0]} castShadow>
        <boxGeometry args={[2.3, 0.65, 1.5]} />
        <MeshTransmissionMaterial
          thickness={0.25}
          roughness={0.1}
          ior={1.03}
          chromaticAberration={0.03}
          transmission={0.94}
          backside
        />
      </mesh>

      <mesh position={[-1.65, 0.06, 0]} castShadow>
        <boxGeometry args={[0.35, 0.2, 1.15]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.4} />
      </mesh>

      <mesh position={[1.68, 0.06, 0]} castShadow>
        <boxGeometry args={[0.2, 0.16, 1.05]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>

      {[
        [-1.2, -0.33, 1],
        [1.2, -0.33, 1],
        [-1.2, -0.33, -1],
        [1.2, -0.33, -1]
      ].map((wheel, index) => (
        <group
          key={`${wheel.join('-')}`}
          ref={(node) => {
            if (node) {
              wheelsRef.current[index] = node;
            }
          }}
          position={[wheel[0], wheel[1], wheel[2] * 0.75]}
        >
          <mesh castShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.28, 32]} />
            <meshStandardMaterial color="#020617" metalness={0.1} roughness={0.82} />
          </mesh>
          <mesh castShadow>
            <cylinderGeometry args={[0.23, 0.23, 0.32, 24]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.28} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HeroScene({ reducedMotion }: { reducedMotion: boolean }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.4), 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  return (
    <Canvas camera={{ position: [4.8, 1.5, 6], fov: 40 }} shadows dpr={[1, 2]}>
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 9, 26]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 7, 5]} intensity={1.4} castShadow />
      <pointLight position={[-5, 2, -4]} intensity={0.75} color="#60a5fa" />
      <pointLight position={[7, 1.8, 4]} intensity={0.7} color="#f97316" />
      <PerformanceCar scrollProgress={reducedMotion ? 0.2 : scrollProgress} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.58, 0]} receiveShadow>
        <planeGeometry args={[70, 30]} />
        <meshStandardMaterial color="#020617" metalness={0.08} roughness={0.92} />
      </mesh>

      <Environment preset="night" />

      {reducedMotion && (
        <Html center>
          <div className="rounded-lg border border-white/20 bg-slate-900/70 px-3 py-2 text-xs text-white">Reduced motion enabled: static 3D mode</div>
        </Html>
      )}
    </Canvas>
  );
}

export function Hero3D() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <HeroScene reducedMotion={prefersReducedMotion} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-end px-4 pb-16 pt-24 md:pb-24">
        <div className="max-w-xl space-y-5">
          <p className="text-sm uppercase tracking-[0.26em] text-slate-200">Premium Pre-Owned & Certified</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Find your next drive at Signature Motors</h1>
          <p className="text-slate-200 md:text-lg">
            A fully immersive 3D showcase with curated inventory, transparent financing, and trusted trade-in valuations for modern Colombo buyers.
          </p>
          <a href="#inventory" className="pointer-events-auto inline-flex rounded-md bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Browse Inventory
          </a>
        </div>
      </div>
    </section>
  );
}
