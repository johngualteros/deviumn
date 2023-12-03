import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const MoonModel = () => {
  const gltf = useLoader(GLTFLoader, '/moon.glb');
  const moonRef = useRef();

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive object={gltf.scene} scale={[1, 1, 1]} castShadow receiveShadow ref={moonRef} />
  );
};

const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 50, near: 1, far: 30 }}
      gl={{ antialias: true }}
      style={{ height: '1000px' }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <MoonModel />
    </Canvas>
  );
};

export default App;
