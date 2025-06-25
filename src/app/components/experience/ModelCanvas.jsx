"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function Model({ rotationY }) {
  const ref = useRef(null);
  const { scene } = useGLTF("models/nike_adapt.glb");

  useEffect(() => {
    if (scene) {
      console.log("✅ Model loaded:", scene);
    }
  }, [scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = rotationY;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.2} position={[0, -0.5, 0]} />;
}

export default function ExperienceCanvas() {
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    function onWheel(event) {
      // event.deltaY > 0 means scroll down, < 0 scroll up
      // Adjust sensitivity by multiplying deltaY
      setRotationY((r) => r + event.deltaY * 0.005);
    }
    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <hemisphereLight skyColor="white" groundColor="black" intensity={0.4} />

        <Model rotationY={rotationY} />
      </Canvas>

      {/* Static text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold pointer-events-none">
        Front
      </div>
    </div>
  );
}
