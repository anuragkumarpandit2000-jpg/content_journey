import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  theme: string;
  intensity?: number;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  theme,
  intensity = 1.0,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Scene references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Mesh refs
  const torusRef = useRef<THREE.Group | null>(null);
  const alertGroupRef = useRef<THREE.Group | null>(null);
  const chromeGroupRef = useRef<THREE.Group | null>(null);
  const driveGroupRef = useRef<THREE.Group | null>(null);
  const goldGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // In portrait (9:16), aspect is 0.5625. Use FOV 65 and camera closer at z = 5.2
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // 2. Powerful Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 4.0);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 5.0, 15);
    rimLight.position.set(0, 3, 2);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // 3. Floating 3D Star / Dust Particle Field
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 4. Mode 1: Cyber Torus Knot (Intro & Solution)
    const torusGroup = new THREE.Group();
    const torusGeo = new THREE.TorusKnotGeometry(1.6, 0.42, 128, 32);
    // Inner glowing solid mesh
    const torusSolidMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
    });
    const torusSolid = new THREE.Mesh(torusGeo, torusSolidMat);
    torusGroup.add(torusSolid);

    // Outer wireframe cage
    const torusWireMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const torusWire = new THREE.Mesh(torusGeo, torusWireMat);
    torusWire.scale.set(1.03, 1.03, 1.03);
    torusGroup.add(torusWire);

    torusGroup.position.set(0, 1.2, -0.5);
    torusGroup.visible = false;
    scene.add(torusGroup);
    torusRef.current = torusGroup;

    // 5. Mode 2: Red Alert Core & Hazard Rings
    const alertGroup = new THREE.Group();
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0xef4444,
      emissiveIntensity: 1.2,
    });
    const alertCore = new THREE.Mesh(coreGeo, coreMat);
    alertGroup.add(alertCore);

    // Hazard orbital ring 1
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.08, 16, 64);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xf87171,
      emissive: 0xdc2626,
      emissiveIntensity: 1.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    alertGroup.add(ring1);

    // Hazard orbital ring 2
    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.06, 16, 64);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat1);
    ring2.rotation.y = Math.PI / 4;
    alertGroup.add(ring2);

    alertGroup.position.set(0, 1.3, -0.5);
    alertGroup.visible = false;
    scene.add(alertGroup);
    alertGroupRef.current = alertGroup;

    // 6. Mode 3: Chrome Discs (Plate Analogy)
    const chromeGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const discGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.12, 48);
      const discMat = new THREE.MeshStandardMaterial({
        color: i === 0 ? 0xf59e0b : 0xe2e8f0,
        metalness: 0.95,
        roughness: 0.1,
        emissive: i === 0 ? 0xb45309 : 0x475569,
        emissiveIntensity: 0.4,
      });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.position.set((i - 1) * 2.1, 0.8, 0);
      disc.rotation.x = 0.7;
      chromeGroup.add(disc);
    }
    chromeGroup.position.set(0, 0.6, -0.5);
    chromeGroup.visible = false;
    scene.add(chromeGroup);
    chromeGroupRef.current = chromeGroup;

    // 7. Mode 4: 3D Tech Drive Storage Nodes (Drive C, D, E)
    const driveGroup = new THREE.Group();
    // Center Drive C
    const driveCGeo = new THREE.BoxGeometry(1.8, 2.2, 0.8);
    const driveCMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.8,
    });
    const driveCMesh = new THREE.Mesh(driveCGeo, driveCMat);
    driveCMesh.name = 'driveC';
    driveGroup.add(driveCMesh);

    // Left Drive D
    const driveDGeo = new THREE.BoxGeometry(1.1, 1.6, 0.6);
    const driveDMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xa855f7,
      emissiveIntensity: 0.6,
    });
    const driveDMesh = new THREE.Mesh(driveDGeo, driveDMat);
    driveDMesh.position.set(-2.4, 0, -0.2);
    driveDMesh.name = 'driveD';
    driveGroup.add(driveDMesh);

    // Right Drive E
    const driveEMesh = new THREE.Mesh(driveDGeo, driveDMat);
    driveEMesh.position.set(2.4, 0, -0.2);
    driveEMesh.name = 'driveE';
    driveGroup.add(driveEMesh);

    driveGroup.position.set(0, 1.2, -0.5);
    driveGroup.visible = false;
    scene.add(driveGroup);
    driveGroupRef.current = driveGroup;

    // 8. Mode 5: Golden Luxury Polyhedron / Diamond (Outro CTA)
    const goldGroup = new THREE.Group();
    const diamondGeo = new THREE.OctahedronGeometry(1.8, 0);
    const diamondMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0xca8a04,
      emissiveIntensity: 0.6,
    });
    const diamondMesh = new THREE.Mesh(diamondGeo, diamondMat);
    goldGroup.add(diamondMesh);

    // Surrounding glowing halo
    const haloGeo = new THREE.TorusGeometry(2.3, 0.05, 16, 64);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xeab308,
      emissiveIntensity: 1.5,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2.5;
    goldGroup.add(halo);

    goldGroup.position.set(0, 1.2, -0.5);
    goldGroup.visible = false;
    scene.add(goldGroup);
    goldGroupRef.current = goldGroup;

    // Perform initial render with active theme
    updateAndRender();

    return () => {
      renderer.dispose();
      torusGeo.dispose();
      torusSolidMat.dispose();
      torusWireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringMat1.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      driveCGeo.dispose();
      driveCMat.dispose();
      driveDGeo.dispose();
      driveDMat.dispose();
      diamondGeo.dispose();
      diamondMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  const updateAndRender = () => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    // 1. Particle rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = frame * 0.003;
      particlesRef.current.rotation.x = Math.sin(frame * 0.004) * 0.15;
    }

    // Hide all groups initially
    if (torusRef.current) torusRef.current.visible = false;
    if (alertGroupRef.current) alertGroupRef.current.visible = false;
    if (chromeGroupRef.current) chromeGroupRef.current.visible = false;
    if (driveGroupRef.current) driveGroupRef.current.visible = false;
    if (goldGroupRef.current) goldGroupRef.current.visible = false;

    // Theme logic
    if (theme === 'INTRO_CYBER' || theme === 'SOLUTION_NEON' || theme === 'EDITORIAL_BW') {
      if (torusRef.current) {
        torusRef.current.visible = true;
        torusRef.current.rotation.x = frame * 0.022;
        torusRef.current.rotation.y = frame * 0.032;
        torusRef.current.rotation.z = Math.sin(frame * 0.02) * 0.4;
        const scale = 1.0 + Math.sin(frame * 0.08) * 0.08;
        torusRef.current.scale.set(scale, scale, scale);
      }
      if (keyLightRef.current) {
        keyLightRef.current.color.setHex(theme === 'EDITORIAL_BW' ? 0xffffff : 0x38bdf8);
        keyLightRef.current.intensity = 4.0;
      }
      if (rimLightRef.current) {
        rimLightRef.current.color.setHex(0x38bdf8);
      }
    } else if (theme === 'RED_ALERT') {
      if (alertGroupRef.current) {
        alertGroupRef.current.visible = true;
        alertGroupRef.current.rotation.y = frame * 0.045;
        alertGroupRef.current.rotation.x = frame * 0.025;
        const pulse = 1.0 + Math.sin(frame * 0.22) * 0.14;
        alertGroupRef.current.scale.set(pulse, pulse, pulse);
      }
      if (keyLightRef.current) {
        keyLightRef.current.color.setHex(0xef4444);
        keyLightRef.current.intensity = 5.0;
      }
      if (rimLightRef.current) {
        rimLightRef.current.color.setHex(0xf87171);
      }
    } else if (theme === 'FOOD_PLATE_AMBER' || theme === 'BROTHERS_DUO' || theme === 'EQUAL_BALANCE_GREEN') {
      if (chromeGroupRef.current) {
        chromeGroupRef.current.visible = true;
        chromeGroupRef.current.rotation.y = Math.sin(frame * 0.025) * 0.35;
        chromeGroupRef.current.position.y = 0.6 + Math.sin(frame * 0.04) * 0.15;
      }
      if (keyLightRef.current) {
        keyLightRef.current.color.setHex(theme === 'EQUAL_BALANCE_GREEN' ? 0x10b981 : 0xf59e0b);
        keyLightRef.current.intensity = 4.5;
      }
    } else if (theme === 'TECH_EXPAND_CYAN' || theme === 'CRAZY_SPEED_PURPLE') {
      if (driveGroupRef.current) {
        driveGroupRef.current.visible = true;
        driveGroupRef.current.rotation.y = Math.sin(frame * 0.02) * 0.3;
        const driveC = driveGroupRef.current.getObjectByName('driveC');
        if (driveC) {
          const expandScale = 1.0 + (Math.sin(frame * 0.07) > 0 ? 0.45 : 0.1);
          driveC.scale.set(expandScale, 1.0, 1.0);
        }
      }
      if (keyLightRef.current) {
        keyLightRef.current.color.setHex(theme === 'CRAZY_SPEED_PURPLE' ? 0xc084fc : 0x06b6d4);
        keyLightRef.current.intensity = 4.0;
      }
    } else if (theme === 'LUXURY_GOLD_CTA') {
      if (goldGroupRef.current) {
        goldGroupRef.current.visible = true;
        goldGroupRef.current.rotation.x = frame * 0.018;
        goldGroupRef.current.rotation.y = frame * 0.028;
      }
      if (keyLightRef.current) {
        keyLightRef.current.color.setHex(0xfacc15);
        keyLightRef.current.intensity = 5.0;
      }
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  // Frame update on every Remotion frame before snapshot
  useLayoutEffect(() => {
    updateAndRender();
  }, [frame, theme]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        opacity: intensity,
        pointerEvents: 'none',
        zIndex: 6,
      }}
    />
  );
};
