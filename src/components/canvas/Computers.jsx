import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useSpring, animated } from "@react-spring/three";
import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "always",
});

const Computers = ({ isMobile }) => {
  // const ref = useRef();

  // useFrame((_, delta) => {
  //   ref.current.rotation.x += 1 * delta;
  //   ref.current.rotation.y += 0.5 * delta;
  // });
  //

  const { deskRotation } = useSpring({
    from: {
      deskRotation: Math.PI / 7,
    },
    to: [
      {
        deskRotation: -Math.PI / 7,
      },
      {
        deskRotation: Math.PI / 7,
      },
      // {
      //   deskRotation: -1.5 * Math.PI,
      // },
      // {
      //   deskRotation: -2 * Math.PI,
      // },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      duration: 25000,
    },
    loop: true,
    immediate: true,
  });

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
      <animated.group rotation-y={deskRotation}>
        <primitive
          object={computer.scene}
          // ref={ref}
          // onPointerDown={(e) =>
          //   // console.log(`clicked? ${JSON.stringify(e.target)}`)
          //   clickTest()
          // }
          onClick={(e) => console.log("you clicked", e.object.name)}
          scale={isMobile ? 0.6 : 0.95}
          position={isMobile ? [0, -3.5, -1.2] : [0, -4.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </animated.group>
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
          // autoRotate={true}
          // autoRotateSpeed={-0.29}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
