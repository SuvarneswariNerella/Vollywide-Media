import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Geometry 1: Core Geodesic Sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    mainGroup.add(coreSphere);

    // Inner glowing sphere
    const innerGeometry = new THREE.IcosahedronGeometry(1.1, 1);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: false,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.4
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerSphere);

    // Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.5 }));
    ring2.rotation.y = Math.PI / 2.5;
    mainGroup.add(ring2);

    // Floating Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.7
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 3, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 10);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tilt
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + targetX * 0.5;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + targetY * 0.5;

      innerSphere.rotation.y = -elapsedTime * 0.3;
      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.15;

      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Floating accent badges over 3D visual */}
      <div className="absolute top-8 left-4 md:left-12 glass-card px-4 py-2.5 rounded-2xl shadow-lg border border-indigo-100 flex items-center gap-3 animate-float-slow pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
        <div>
          <p className="text-xs font-semibold text-slate-800">Vollywide Growth AI</p>
          <p className="text-[11px] text-slate-500">Optimum ROAS Engine Active</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 md:right-12 glass-card px-4 py-2.5 rounded-2xl shadow-lg border border-cyan-100 flex items-center gap-3 animate-float-reverse pointer-events-none">
        <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
          +320%
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-800">Average Growth Rate</p>
          <p className="text-[11px] text-slate-500">Verified Client Analytics</p>
        </div>
      </div>
    </div>
  );
};
