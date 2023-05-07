import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const lowPolyPlanet = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.95} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, -15, 10]}
        angle={-0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={lowPolyPlanet.scene} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 250,
        position: [-8, 5, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.25}
          minPolarAngle={Math.PI / 2.25}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
