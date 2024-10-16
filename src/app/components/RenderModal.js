"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModal = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative -z-10", className)}>
      <Suspense fallback={null}>
        <Environment preset="dawn" />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default RenderModal;
