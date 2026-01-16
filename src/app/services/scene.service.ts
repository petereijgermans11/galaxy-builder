import { Injectable, signal } from '@angular/core';
import * as THREE from 'three';

/**
 * SceneService manages the Three.js 3D scene
 * Workshop TODO: Participants will extend this to add more celestial objects
 */
@Injectable({
  providedIn: 'root',
})
export class SceneService {
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private celestialObjects: THREE.Object3D[] = [];
  
  // Signals for reactive state
  readonly isInitialized = signal(false);
  readonly objectCount = signal(0);

  /**
   * Initialize the Three.js scene
   */
  initScene(canvas: HTMLCanvasElement): void {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000011);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 15;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    this.scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);

    this.isInitialized.set(true);
    this.animate();
  }

  /**
   * Workshop TODO: Create a solar system with planets
   * Example implementation for participants to extend
   */
  createSolarSystem(): void {
    if (!this.scene) return;

    // Clear existing objects
    this.clearScene();

    // Create sun
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.userData['type'] = 'sun';
    this.scene.add(sun);
    this.celestialObjects.push(sun);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x2233ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(8, 0, 0);
    earth.userData['type'] = 'planet';
    earth.userData['orbitRadius'] = 8;
    earth.userData['orbitSpeed'] = 0.01;
    this.scene.add(earth);
    this.celestialObjects.push(earth);

    // Create Mars
    const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xff4444 });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(12, 0, 0);
    mars.userData['type'] = 'planet';
    mars.userData['orbitRadius'] = 12;
    mars.userData['orbitSpeed'] = 0.008;
    this.scene.add(mars);
    this.celestialObjects.push(mars);

    this.objectCount.set(this.celestialObjects.length);
  }

  /**
   * Workshop TODO: Create a galaxy with stars
   */
  createGalaxy(): void {
    if (!this.scene) return;

    this.clearScene();

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.userData['type'] = 'galaxy';
    this.scene.add(stars);
    this.celestialObjects.push(stars);

    this.objectCount.set(this.celestialObjects.length);
  }

  /**
   * Workshop TODO: Add a black hole with gravitational effect visualization
   */
  createBlackHole(): void {
    if (!this.scene) return;

    this.clearScene();

    // Create black hole
    const blackHoleGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHole.userData['type'] = 'blackhole';
    this.scene.add(blackHole);
    this.celestialObjects.push(blackHole);

    // Add accretion disk
    const diskGeometry = new THREE.TorusGeometry(3, 0.3, 16, 100);
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.7,
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = Math.PI / 2;
    disk.userData['type'] = 'accretion-disk';
    disk.userData['rotationSpeed'] = 0.02;
    this.scene.add(disk);
    this.celestialObjects.push(disk);

    this.objectCount.set(this.celestialObjects.length);
  }

  /**
   * Clear all objects from the scene
   */
  private clearScene(): void {
    if (!this.scene) return;

    this.celestialObjects.forEach((obj) => {
      if (obj.type === 'Mesh' || obj.type === 'Points') {
        const mesh = obj as THREE.Mesh | THREE.Points;
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      }
      this.scene?.remove(obj);
    });

    this.celestialObjects = [];
    this.objectCount.set(0);
  }

  /**
   * Animation loop
   */
  private animate = (): void => {
    if (!this.renderer || !this.scene || !this.camera) return;

    requestAnimationFrame(this.animate);

    // Animate celestial objects
    this.celestialObjects.forEach((obj) => {
      // Rotate sun
      if (obj.userData['type'] === 'sun') {
        obj.rotation.y += 0.005;
      }

      // Orbit planets
      if (obj.userData['type'] === 'planet') {
        const orbitRadius = obj.userData['orbitRadius'];
        const orbitSpeed = obj.userData['orbitSpeed'];
        const time = Date.now() * orbitSpeed;
        obj.position.x = Math.cos(time) * orbitRadius;
        obj.position.z = Math.sin(time) * orbitRadius;
        obj.rotation.y += 0.01;
      }

      // Rotate accretion disk
      if (obj.userData['type'] === 'accretion-disk') {
        obj.rotation.z += obj.userData['rotationSpeed'];
      }

      // Rotate galaxy
      if (obj.userData['type'] === 'galaxy') {
        obj.rotation.y += 0.0005;
      }
    });

    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Handle window resize
   */
  onResize(width: number, height: number): void {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  /**
   * Cleanup resources
   */
  dispose(): void {
    this.clearScene();
    this.renderer?.dispose();
    this.isInitialized.set(false);
  }
}
