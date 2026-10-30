import React, { useRef, useEffect } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import * as THREE from 'three';

interface ThreeOxygenWorldProps {
  stage: string;
  progress: number;
}

export const ThreeOxygenWorld: React.FC<ThreeOxygenWorldProps> = ({ stage, progress }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const sec = frame / fps;

  // Scene references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Mesh refs for dynamic animation
  const characterGroupRef = useRef<THREE.Group | null>(null);
  const headRef = useRef<THREE.Mesh | null>(null);
  const mouthRef = useRef<THREE.Mesh | null>(null);
  const leftArmRef = useRef<THREE.Group | null>(null);
  const rightArmRef = useRef<THREE.Group | null>(null);
  const leftLegRef = useRef<THREE.Group | null>(null);
  const rightLegRef = useRef<THREE.Group | null>(null);
  const buildingsGroupRef = useRef<THREE.Group | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const dustParticlesRef = useRef<THREE.Points | null>(null);
  const toyPlaneRef = useRef<THREE.Group | null>(null);
  const earRingsRef = useRef<THREE.Group | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xbfe3f7);

    // 2. Camera: 9:16 portrait composition
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 1.85, 5.8);
    camera.lookAt(0, 1.35, 0);
    cameraRef.current = camera;

    // 3. Renderer with ACESFilmic tone mapping
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
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lighting: Warm pastel studio lights
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.3);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    sunLight.position.set(4, 9, 5);
    sunLight.castShadow = true;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // 5. Ground Meadow (Curved Hill)
    const groundGeo = new THREE.CylinderGeometry(14, 14, 2, 48);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x82c874,
      roughness: 0.55,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.set(0, -1, -2);
    ground.rotation.x = 0.06;
    ground.receiveShadow = true;
    scene.add(ground);

    // 6. Instanced Pastel Lollipop / Mushroom Flowers
    const flowersGroup = new THREE.Group();
    scene.add(flowersGroup);

    const stemGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.45, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x428238, roughness: 0.8 });
    const capGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.04, 12);
    const flowerColors = [0xfca5a5, 0xfde047, 0x93c5fd, 0xc4b5fd, 0xf9a8d4, 0x6ee7b7];

    for (let i = 0; i < 90; i++) {
      const flower = new THREE.Group();
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = 0.22;
      flower.add(stem);

      const capColor = flowerColors[i % flowerColors.length];
      const capMat = new THREE.MeshStandardMaterial({ color: capColor, roughness: 0.35 });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.45;
      flower.add(cap);

      const angle = (i / 90) * Math.PI * 2 + Math.random() * 0.1;
      const radius = 1.1 + Math.random() * 3.6;
      flower.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 1.5);
      flower.scale.setScalar(0.7 + Math.random() * 0.45);
      flowersGroup.add(flower);
    }

    // 7. Background Pastel Buildings
    const buildingsGroup = new THREE.Group();
    scene.add(buildingsGroup);
    buildingsGroupRef.current = buildingsGroup;

    const buildingPalette = [0xf5ebe0, 0xe3d5ca, 0xd5bdaf, 0xedede9];
    for (let b = 0; b < 6; b++) {
      const bWidth = 0.85 + Math.random() * 0.4;
      const bHeight = 2.4 + Math.random() * 1.8;
      const bGeo = new THREE.BoxGeometry(bWidth, bHeight, 0.7);
      const bMat = new THREE.MeshStandardMaterial({
        color: buildingPalette[b % buildingPalette.length],
        roughness: 0.45,
      });
      const building = new THREE.Mesh(bGeo, bMat);
      building.position.set(-3.2 + b * 1.3, bHeight / 2 - 0.2, -4.5 + (b % 2) * 0.3);
      buildingsGroup.add(building);
    }

    // 8. Twinkling Stars (visible when daytime sky turns black)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 180;
    const starPos = new Float32Array(starCount * 3);
    for (let s = 0; s < starCount * 3; s += 3) {
      starPos[s] = (Math.random() - 0.5) * 16;
      starPos[s + 1] = 1.5 + Math.random() * 8;
      starPos[s + 2] = -5 - Math.random() * 10;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    starsRef.current = stars;

    // 9. Concrete Dust Particles (Stage 3)
    const dustGeo = new THREE.BufferGeometry();
    const dustCount = 200;
    const dustPos = new Float32Array(dustCount * 3);
    for (let d = 0; d < dustCount * 3; d += 3) {
      dustPos[d] = (Math.random() - 0.5) * 6;
      dustPos[d + 1] = Math.random() * 4;
      dustPos[d + 2] = -2 - Math.random() * 3;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({ color: 0xd6ccc2, size: 0.12, transparent: true, opacity: 0 });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);
    dustParticlesRef.current = dust;

    // 10. Toy Airplane (Stage 4 Engine stall)
    const plane = new THREE.Group();
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.08, 0.9, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    fuselage.rotation.z = Math.PI / 2;
    plane.add(fuselage);
    const wings = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.03, 0.25), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    plane.add(wings);
    plane.position.set(1.5, 4.5, -3);
    plane.rotation.z = -0.4;
    plane.scale.setScalar(0.7);
    scene.add(plane);
    toyPlaneRef.current = plane;

    // 11. Ear Pressure Shockwave Rings (Stage 2)
    const earRings = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(0.16, 0.02, 8, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0 });
    const lRing = new THREE.Mesh(ringGeo, ringMat);
    lRing.position.set(-0.38, 1.85, 0.1);
    earRings.add(lRing);
    const rRing = new THREE.Mesh(ringGeo, ringMat);
    rRing.position.set(0.38, 1.85, 0.1);
    earRings.add(rRing);
    scene.add(earRings);
    earRingsRef.current = earRings;

    // 12. The Signature White Clay Character (Refined Anatomy)
    const characterGroup = new THREE.Group();
    characterGroup.position.set(0, 0.1, 0);
    scene.add(characterGroup);
    characterGroupRef.current = characterGroup;

    const clayMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.05,
    });

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 24, 24), clayMat);
    head.position.y = 1.95;
    head.castShadow = true;
    characterGroup.add(head);
    headRef.current = head;

    // Eyes
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x18181b });
    const eyeGeo = new THREE.SphereGeometry(0.042, 12, 12);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.11, 0.04, 0.29);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.11, 0.04, 0.29);
    head.add(rightEye);

    // Cute Smile Curve
    const mouthGeo = new THREE.TorusGeometry(0.07, 0.015, 8, 16, Math.PI);
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x27272a });
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, -0.09, 0.29);
    mouth.rotation.x = Math.PI; // Inverted arc = happy smile
    head.add(mouth);
    mouthRef.current = mouth;

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 12), clayMat);
    neck.position.y = 1.62;
    characterGroup.add(neck);

    // Torso (Smooth Capsule)
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 0.72, 16), clayMat);
    torso.position.y = 1.25;
    torso.castShadow = true;
    characterGroup.add(torso);

    // Left Arm (Jointed from shoulder)
    const leftArm = new THREE.Group();
    leftArm.position.set(-0.25, 1.55, 0);
    const lUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.048, 0.62, 12), clayMat);
    lUpper.position.y = -0.3;
    leftArm.add(lUpper);
    characterGroup.add(leftArm);
    leftArmRef.current = leftArm;

    // Right Arm (Jointed from shoulder)
    const rightArm = new THREE.Group();
    rightArm.position.set(0.25, 1.55, 0);
    const rUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.048, 0.62, 12), clayMat);
    rUpper.position.y = -0.3;
    rightArm.add(rUpper);
    characterGroup.add(rightArm);
    rightArmRef.current = rightArm;

    // Left Leg
    const leftLeg = new THREE.Group();
    leftLeg.position.set(-0.11, 0.9, 0);
    const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.055, 0.88, 12), clayMat);
    lLegMesh.position.y = -0.44;
    leftLeg.add(lLegMesh);
    characterGroup.add(leftLeg);
    leftLegRef.current = leftLeg;

    // Right Leg
    const rightLeg = new THREE.Group();
    rightLeg.position.set(0.11, 0.9, 0);
    const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.055, 0.88, 12), clayMat);
    rLegMesh.position.y = -0.44;
    rightLeg.add(rLegMesh);
    characterGroup.add(rightLeg);
    rightLegRef.current = rightLeg;

    // 13. Street Lamp with glowing spherical bulb
    const lampGroup = new THREE.Group();
    lampGroup.position.set(1.4, 0, 0.3);
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 2.4, 12),
      new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.3 })
    );
    pole.position.y = 1.2;
    lampGroup.add(pole);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xfff0c2,
        emissiveIntensity: 1.8,
        roughness: 0.1,
      })
    );
    bulb.position.y = 2.45;
    lampGroup.add(bulb);
    scene.add(lampGroup);

    return () => {
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  // Frame update loop
  useEffect(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const char = characterGroupRef.current;
    const head = headRef.current;
    const mouth = mouthRef.current;
    const lArm = leftArmRef.current;
    const rArm = rightArmRef.current;
    const lLeg = leftLegRef.current;
    const rLeg = rightLegRef.current;
    const sun = sunLightRef.current;
    const ambient = ambientLightRef.current;
    const buildings = buildingsGroupRef.current;
    const stars = starsRef.current;
    const dust = dustParticlesRef.current;
    const plane = toyPlaneRef.current;
    const earRings = earRingsRef.current;

    // Reset defaults
    if (stars && stars.material instanceof THREE.PointsMaterial) stars.material.opacity = 0;
    if (dust && dust.material instanceof THREE.PointsMaterial) dust.material.opacity = 0;
    if (plane) plane.visible = false;
    if (earRings) earRings.visible = false;
    if (mouth) mouth.rotation.x = Math.PI; // Default smile

    // STAGE 0: Hook (0 - 7.5s)
    if (stage === 'Hook') {
      scene.background = new THREE.Color(0xbfe3f7);
      if (sun) sun.color.set(0xfffaed);
      if (ambient) ambient.intensity = 1.35;
      if (char) char.position.set(0, 0.08 + Math.sin(frame * 0.08) * 0.025, 0);
      if (head) head.rotation.set(0, Math.sin(frame * 0.04) * 0.12, 0);
      if (lArm) lArm.rotation.set(0, 0, 0.12 + Math.sin(frame * 0.08) * 0.05);
      if (rArm) rArm.rotation.set(0, 0, -0.12 - Math.sin(frame * 0.08) * 0.05);
    }
    // STAGE 1: Pitch Black Sky (7.5s - 14.8s)
    else if (stage === '1 sec') {
      scene.background = new THREE.Color(0x020409);
      if (stars && stars.material instanceof THREE.PointsMaterial) {
        stars.material.opacity = 0.95;
      }
      if (sun) {
        sun.color.set(0xffffff);
        sun.intensity = 0.9;
      }
      if (ambient) ambient.intensity = 0.25;

      // Character looking straight up startled with mouth open in shock (O-shape)
      if (char) char.position.set(0, 0.08, 0);
      if (head) {
        head.rotation.set(-0.65, Math.sin(frame * 0.08) * 0.18, 0);
      }
      if (lArm) lArm.rotation.set(-0.4, 0, 0.2);
      if (rArm) rArm.rotation.set(-0.4, 0, -0.2);
      if (mouth) mouth.rotation.x = 0; // Shocked open expression
    }
    // STAGE 2: Ear Pressure Drop (14.8s - 22.1s)
    else if (stage === '2 sec') {
      scene.background = new THREE.Color(0x1a0a0d); // Eerie reddish tint
      if (ambient) ambient.intensity = 0.6;
      if (earRings) {
        earRings.visible = true;
        const ringScale = 1 + (frame % 30) * 0.05;
        earRings.scale.setScalar(ringScale);
        earRings.children.forEach((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = 1 - (frame % 30) / 30;
          }
        });
      }
      // Character crouching down in pain, covering both ears
      if (char) char.position.set(0, -0.05 + Math.sin(frame * 0.8) * 0.02, 0);
      if (head) head.rotation.set(0.35, 0, Math.sin(frame * 0.8) * 0.08);
      if (lArm) lArm.rotation.set(0.6, 0, 2.35); // Reaching to ear
      if (rArm) rArm.rotation.set(0.6, 0, -2.35); // Reaching to ear
    }
    // STAGE 3: Concrete Collapses into Dust (22.1s - 31.5s)
    else if (stage === '3 sec') {
      scene.background = new THREE.Color(0x383430);
      if (dust && dust.material instanceof THREE.PointsMaterial) {
        dust.material.opacity = 0.85;
      }
      // Buildings sinking and crumbling
      if (buildings) {
        buildings.position.y = -Math.min(2.8, (frame - 663) * 0.015);
        buildings.rotation.z = Math.sin(frame * 0.18) * 0.06;
      }
      // Character running in panic
      if (char) {
        char.position.x = Math.sin(frame * 0.09) * 0.45;
        char.position.y = 0.1 + Math.abs(Math.sin(frame * 0.28)) * 0.16;
      }
      if (lArm && rArm) {
        lArm.rotation.x = Math.sin(frame * 0.28) * 0.9;
        rArm.rotation.x = -Math.sin(frame * 0.28) * 0.9;
      }
      if (lLeg && rLeg) {
        lLeg.rotation.x = -Math.sin(frame * 0.28) * 0.85;
        rLeg.rotation.x = Math.sin(frame * 0.28) * 0.85;
      }
    }
    // STAGE 4: Engine Stall & Planes Fall (31.5s - 39.6s)
    else if (stage === '4 sec') {
      scene.background = new THREE.Color(0x141622);
      if (plane) {
        plane.visible = true;
        // Airplane tumbling down diagonally
        plane.position.x = 2.4 - ((frame - 945) % 240) * 0.025;
        plane.position.y = 4.2 - ((frame - 945) % 240) * 0.02;
        plane.rotation.z = -0.8 + Math.sin(frame * 0.1) * 0.2;
      }
      if (char) char.position.set(0, 0.08, 0);
      if (head) head.rotation.set(-0.5, 0.35, 0); // Watching falling plane
      if (lArm) lArm.rotation.set(-0.6, 0.2, 0.3);
      if (rArm) rArm.rotation.set(0, 0, -0.2);
    }
    // STAGE 5: Ground Shatters into Freefall (39.6s - 48.8s)
    else if (stage === '5 sec') {
      scene.background = new THREE.Color(0x04050a);
      // Character floating/flailing in zero-g free fall!
      if (char) {
        char.position.y = 0.6 + Math.sin(frame * 0.12) * 0.35;
        char.rotation.z = Math.sin(frame * 0.08) * 0.25;
      }
      if (lArm && rArm) {
        lArm.rotation.z = 2.5 + Math.sin(frame * 0.15) * 0.2;
        rArm.rotation.z = -2.5 - Math.sin(frame * 0.15) * 0.2;
      }
      if (lLeg && rLeg) {
        lLeg.rotation.x = Math.sin(frame * 0.12) * 0.4;
        rLeg.rotation.x = -Math.sin(frame * 0.12) * 0.4;
      }
    }
    // OUTRO: Breathe in / Oxygen returns (48.8s - 53.8s)
    else {
      scene.background = new THREE.Color(0xcde8fa);
      if (sun) {
        sun.color.set(0xfff6e6);
        sun.intensity = 2.4;
      }
      if (ambient) ambient.intensity = 1.45;
      if (buildings) {
        buildings.position.set(0, 0, 0);
        buildings.rotation.set(0, 0, 0);
      }
      if (char) {
        char.position.set(0, 0.1, 0);
        char.rotation.set(0, 0, 0);
      }
      // Gentle breathing posture: hands over heart / chest taking deep breath
      const chestExpansion = Math.sin(frame * 0.1) * 0.04;
      if (head) head.rotation.set(-0.18 + chestExpansion, 0, 0);
      if (lArm) lArm.rotation.set(-0.45, 0.35, 1.35);
      if (rArm) rArm.rotation.set(-0.45, -0.35, -1.35);
      if (mouth) mouth.rotation.x = Math.PI; // Peaceful smile
    }

    rendererRef.current.render(scene, camera);
  }, [frame, stage, progress]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
      }}
    />
  );
};
