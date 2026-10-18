"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingTorusKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.18;
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    ref.current.position.y = Math.sin(t * 1.8) * 0.15;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.38, 200, 32]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#3b0764"
        emissiveIntensity={0.5}
        roughness={0.05}
        metalness={0.95}
      />
    </mesh>
  );
}

function Stars({ count = 4000, radius = 90 }: { count?: number; radius?: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.5 + Math.random() * 0.5);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count, radius]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#ffffff" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

function Sparkles({ count = 50, scale = 10, color = "#a78bfa" }: { count?: number; scale?: number; color?: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * scale;
      pos[i * 3 + 1] = (Math.random() - 0.5) * scale;
      pos[i * 3 + 2] = (Math.random() - 0.5) * scale;
    }
    return pos;
  }, [count, scale]);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={color} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

export default function ConstructionCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} intensity={2} color="#7c3aed" />
      <pointLight position={[-8, -4, -6]} intensity={1.2} color="#2563eb" />
      <pointLight position={[0, -6, 4]} intensity={0.6} color="#0ea5e9" />
      <Stars />
      <Sparkles />
      <FloatingTorusKnot />
    </Canvas>
  );
}
