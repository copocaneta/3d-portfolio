import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { raycaster } = useThree();
  // useEffect(() => {
  //   // if (raycaster.params.Points) {
  //   //   raycaster.params.Points.threshold = 0.1;
  //   // }
  //   if (computer) {
  //     if (raycaster.intersectObject(computer, true)) {
  //       // window.open(link1)
  //       alert("clicou");
  //     }
  //   }
  // }, []);
  const clickTest = () => {
    if (raycaster.intersectObject(computer, true)) {
      // window.open(link1)
      alert("clicou");
    }
  };
  const computer = useGLTF("./copocaneta_setup/copocaneta_setup.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        // onPointerDown={(e) =>
        //   // console.log(`clicked? ${JSON.stringify(e.target)}`)
        //   clickTest()
        // }
        onClick={(e) => console.log("you clicked", e.object.name)}
        scale={isMobile ? 0.6 : 0.95}
        position={isMobile ? [0, -3.5, -1.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ isMobile }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // minAzimuthAngle={2}
          // maxAzimuthAngle={1}
          autoRotate={true}
          autoRotateSpeed={-0.29}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
