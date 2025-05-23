import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MenuItems from '../components/MenuItems';

function Menu() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <MenuItems />
      </Canvas>
    </div>
  );
}

export default Menu;
