import React, { useRef, useEffect } from 'react';
import { useCurrentFrame } from 'remotion';
import * as THREE from 'three';

export const ThreeTest: React.FC<{ width?: number; height?: number }> = ({
  width = 1080,
  height = 1920,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frame = useCurrentFrame();

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 128, 32);
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  // Update on each frame deterministically
  if (meshRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
    meshRef.current.rotation.x = frame * 0.03;
    meshRef.current.rotation.y = frame * 0.05;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }

  return (
    <div
      ref={mountRef}
      style={{
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
