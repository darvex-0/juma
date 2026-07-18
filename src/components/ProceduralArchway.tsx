import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float } from '@react-three/drei';
import * as THREE from 'three';

function RubElHizb({ position, scale, speed, rotationOffset }: { position: [number, number, number], scale: number, speed: number, rotationOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const starShape = useMemo(() => {
    const s = new THREE.Shape();
    const radius1 = 0.4;
    const radius2 = 1.0;
    const points = 8;
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points + rotationOffset;
      const r = i % 2 === 0 ? radius2 : radius1;
      if (i === 0) {
        s.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
      } else {
        s.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
    }
    s.closePath();
    
    // Add inner cut-out for Rub el Hizb look
    const hole = new THREE.Path();
    const innerRadius1 = 0.2;
    const innerRadius2 = 0.5;
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points + rotationOffset;
      const r = i % 2 === 0 ? innerRadius2 : innerRadius1;
      if (i === 0) {
        hole.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
      } else {
        hole.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
    }
    hole.closePath();
    s.holes.push(hole);

    return s;
  }, [rotationOffset]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.5;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <extrudeGeometry args={[starShape, { depth: 0.1, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 }]} />
        <meshStandardMaterial color="#C5A880" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  );
}

function IslamicArch() {
  const meshRef = useRef<THREE.Group>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const w = 3;
    const h = 5;
    const thick = 1;

    // Outer boundary (classic pointed arch)
    s.moveTo(-w - thick, -h);
    s.lineTo(-w - thick, h / 2);
    s.quadraticCurveTo(-w / 2 + 0.5, h / 2 + 1, 0, h + 3);
    s.quadraticCurveTo(w / 2 - 0.5, h / 2 + 1, w + thick, h / 2);
    s.lineTo(w + thick, -h);
    s.lineTo(w, -h);

    // Inner arch cutout
    s.lineTo(w, h / 2 - 0.5);
    s.quadraticCurveTo(w / 2 - 0.2, h / 2 + 0.5, 0, h + 1.5);
    s.quadraticCurveTo(-w / 2 + 0.2, h / 2 + 0.5, -w, h / 2 - 0.5);
    s.lineTo(-w, -h);
    s.lineTo(-w - thick, -h);
    
    return s;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
        // Rotate arch slightly towards mouse for interactive parallax
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            (state.pointer.x * Math.PI) / 10,
            0.05
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            -(state.pointer.y * Math.PI) / 20,
            0.05
        );
    }
    if (pointLightRef.current) {
        // Dynamic interactive lighting follows mouse
        pointLightRef.current.position.x = THREE.MathUtils.lerp(
            pointLightRef.current.position.x, 
            state.pointer.x * 12, 
            0.1
        );
        pointLightRef.current.position.y = THREE.MathUtils.lerp(
            pointLightRef.current.position.y, 
            state.pointer.y * 12, 
            0.1
        );
    }
  });

  return (
    <group>
      <pointLight ref={pointLightRef} intensity={3} color="#C5A880" distance={25} />
      
      <group ref={meshRef}>
          <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
            {/* Multiple nested arches for a layered 3D depth effect */}
            {[-0.6, 0, 0.6].map((zOffset, index) => (
              <mesh key={index} position={[0, -1, zOffset]} scale={1 - Math.abs(zOffset) * 0.15}>
                <extrudeGeometry args={[shape, {
                    depth: 0.2,
                    bevelEnabled: true,
                    bevelSegments: 4,
                    steps: 1,
                    bevelSize: 0.05,
                    bevelThickness: 0.05,
                }]} />
                <meshStandardMaterial 
                  color={index === 1 ? "#C5A880" : "#FBF9F1"} 
                  metalness={index === 1 ? 0.8 : 0.4} 
                  roughness={0.2} 
                  transparent={true}
                  opacity={0.85}
                />
              </mesh>
            ))}
          </Float>
      </group>
    </group>
  );
}

export function ProceduralArchway() {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Attach to body for global hover interaction without blocking elements
    setEventSource(document.body);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-70 pointer-events-none mix-blend-screen">
      {eventSource && (
        <Canvas eventSource={eventSource} camera={{ position: [0, 0, 14], fov: 45 }}>
          <ambientLight intensity={0.5} color="#FBF9F1" />
          <directionalLight position={[-8, 8, -5]} intensity={1.5} color="#C5A880" />
          <directionalLight position={[8, -8, 5]} intensity={0.5} color="#0F2027" />
          
          <Center>
            <IslamicArch />
            
            {/* Background floating geometric elements */}
            <RubElHizb position={[-5, 4, -2]} scale={0.5} speed={0.4} rotationOffset={0} />
            <RubElHizb position={[6, 3, -4]} scale={0.8} speed={0.2} rotationOffset={Math.PI / 8} />
            <RubElHizb position={[-6, -2, -3]} scale={0.6} speed={-0.3} rotationOffset={Math.PI / 4} />
            <RubElHizb position={[4, -4, 0]} scale={0.4} speed={-0.5} rotationOffset={0} />
          </Center>
        </Canvas>
      )}
    </div>
  );
}
