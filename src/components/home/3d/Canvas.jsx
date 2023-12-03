// src/App.js
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


const MoonModel = () => {
  const gltf = useLoader(GLTFLoader, '/public/moon.glb');

  return (
    <primitive object={gltf.scene} scale={[1, 1, 1]} castShadow receiveShadow />
  );
};

const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 50, near: 1, far: 30 }}
      gl={{ antialias: true }}
      style={{ width: '1000px', height: '1000px' }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <MoonModel />
    </Canvas>
  );
};

export default App;
