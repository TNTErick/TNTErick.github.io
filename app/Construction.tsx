"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";

function TorusKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.2, 0.38, 200, 32]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#3b0764"
          emissiveIntensity={0.5}
          distort={0.2}
          speed={2.5}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
    </Float>
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
      <Stars radius={90} depth={60} count={4000} factor={3} saturation={0.5} fade speed={0.4} />
      <Sparkles count={50} scale={10} size={1.2} speed={0.35} color="#a78bfa" />
      <TorusKnot />
    </Canvas>
  );
}
