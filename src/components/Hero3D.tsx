'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function PerformanceSUV({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const frontWheelRef = useRef<THREE.Group>(null);
  const rearWheelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetRotationY = -0.5 + scrollProgress * 1.35;
    const targetRotationX = THREE.MathUtils.lerp(0.04, -0.16, scrollProgress);
    const targetY = THREE.MathUtils.lerp(0.05, -0.38, scrollProgress);
    const targetZ = THREE.MathUtils.lerp(0, -0.8, scrollProgress);

    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotationY, 4.5, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 4.5, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 4.5, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 4.5, delta);

    const wheelSpin = state.clock.elapsedTime * 0.8 + scrollProgress * 9;
    if (frontWheelRef.current) frontWheelRef.current.rotation.x = wheelSpin;
    if (rearWheelRef.current) rearWheelRef.current.rotation.x = wheelSpin;
  });

  return (
    <group ref={groupRef} scale={1.45}>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[4.4, 0.72, 2.08]} />
        <meshStandardMaterial color="#061126" metalness={0.85} roughness={0.18} />
      </mesh>

      <mesh position={[0.15, 0.66, 0]}>
        <boxGeometry args={[2.45, 0.66, 1.94]} />
        <meshStandardMaterial color="#0e2c61" metalness={0.65} roughness={0.2} />
      </mesh>

      <mesh position={[0.2, 0.67, 0]}>
        <boxGeometry args={[2.12, 0.42, 1.91]} />
        <MeshTransmissionMaterial roughness={0.03} thickness={0.24} chromaticAberration={0.04} transmission={0.98} ior={1.18} />
      </mesh>

      <mesh position={[1.7, 0.07, 0]}>
        <boxGeometry args={[0.3, 0.3, 1.76]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.55} />
      </mesh>

      {[-1.42, 1.42].map((x) => (
        <group key={x} ref={x < 0 ? rearWheelRef : frontWheelRef} position={[x, -0.37, 0]}>
          {[-0.9, 0.9].map((z) => (
            <group key={z} position={[0, 0, z]}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.45, 0.13, 24, 48]} />
                <meshStandardMaterial color="#020617" roughness={0.75} metalness={0.18} />
              </mesh>
              <mesh>
                <cylinderGeometry args={[0.22, 0.22, 0.18, 32]} />
                <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

export function Hero3D() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(window.scrollY / viewportHeight, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[84vh] overflow-hidden bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900 text-white">
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[6.8, 2.7, 6.5]} fov={35} />
            <ambientLight intensity={0.5} />
            <spotLight intensity={1.6} position={[6, 10, 5]} angle={0.3} penumbra={0.55} />
            <pointLight intensity={0.9} position={[-5, 3, -2]} color="#7aa2ff" />
            <PerformanceSUV scrollProgress={scrollProgress} />
            <ContactShadows opacity={0.42} blur={2.5} scale={13} far={4.8} resolution={1024} position={[0, -1.06, 0]} />
            <Environment preset="sunset" />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.35} />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-6xl items-end px-4 pb-16 pt-24 md:pb-20">
        <div className="max-w-xl space-y-4 rounded-2xl border border-white/20 bg-slate-900/50 p-6 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Premium Pre-Owned & Certified</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Find your next drive at Signature Motors</h1>
          <p className="text-slate-100">
            Discover inspected vehicles, transparent financing, and trusted trade-in valuations designed for modern buyers in Colombo.
          </p>
          <a href="#inventory" className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Browse Inventory
          </a>
        </div>
      </div>
    </section>
  );
}
