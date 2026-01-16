# 🌌 Galaxy Builder

Een Angular 20+ applicatie met Three.js voor het bouwen van interactieve 3D universes. Type natuurlijke taal commando's en genereer real-time 3D objecten met geluid.

## 🚀 Quick Start

```bash
npm install
npm start
```

Open **http://localhost:4200/** in je browser.

## 💡 Gebruik

Type een commando in de input box:

- `Create a solar system` - Maakt zon, aarde, mars met orbits
- `Create a galaxy` - Maakt 5000 sterren particle system  
- `Create a black hole` - Maakt black hole met accretion disk

## 🏗️ Wat Zit Er In

### Components

**`Viewer3DComponent`** - Three.js 3D canvas met scene rendering
- Scene, camera, renderer setup
- Real-time animation loop
- Responsive canvas

**`CommandInputComponent`** - Natural language input UI
- Text input met suggestions
- Voice mute/unmute toggle
- Command submission

### Services

**`SceneService`** - Three.js scene management
- `createSolarSystem()` - Zon + planeten met orbits
- `createGalaxy()` - Particle system met sterren
- `createBlackHole()` - Black hole + accretion disk
- Animation loop met orbital mechanics

**`AIService`** - Command parsing (simpel pattern matching)
- Parse natural language → structured commands
- Klaar voor AI API integration (OpenAI, Claude, etc.)

**`AudioService`** - Web Audio API
- Beep sounds voor feedback
- Mute/unmute functionality
- Extensible voor spatial audio

## 🎨 Tech Stack

- **Angular 21** - Standalone components, Signals, OnPush
- **Three.js** - 3D rendering engine
- **TypeScript** - Type safety
- **Web Audio API** - Sound effects

## 🛠️ Project Structuur

```
src/app/
├── components/
│   ├── command-input.component.ts    # UI voor commands
│   └── viewer-3d.component.ts        # 3D viewer canvas
├── services/
│   ├── scene.service.ts              # Three.js logic
│   ├── ai.service.ts                 # Command parsing
│   └── audio.service.ts              # Web Audio
├── app.ts                            # Main component
└── app.html                          # Main template
```

## 🎯 Extend & Build

Dit is je startpunt. Bouw wat je wilt:

### Ideas

- **Meer planeten** - Jupiter, Saturn met ringen, Uranus, Neptunus
- **Manen** - Laat manen rond planeten draaien
- **Asteroid belt** - Gebruik InstancedMesh voor duizenden asteroids
- **Custom shaders** - GLSL voor coole effects
- **Lights** - Point lights, spotlights, shadows
- **Camera controls** - OrbitControls voor interactie
- **AI integration** - OpenAI/Claude voor geavanceerde parsing
- **Voice input** - Speech Recognition API
- **Physics** - Cannon.js voor realistische beweging
- **Textures** - Load planet textures
- **Post-processing** - Bloom, glow effects
- **VR support** - WebXR voor immersive experience

### Quick Examples

**Add Jupiter:**
```typescript
// In scene.service.ts - createSolarSystem()
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(2.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xcc8844 })
);
jupiter.position.set(20, 0, 0);
jupiter.userData['orbitRadius'] = 20;
jupiter.userData['orbitSpeed'] = 0.005;
this.scene.add(jupiter);
```

**Add Camera Controls:**
```bash
npm install three/addons
```

```typescript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// In scene.service.ts - initScene()
this.controls = new OrbitControls(this.camera, canvas);
this.controls.enableDamping = true;

// In animate loop
this.controls.update();
```

**Add AI Parsing:**
```typescript
// In ai.service.ts
async parseWithOpenAI(input: string): Promise<GalaxyCommand> {
  const response = await fetch('/api/ai', {
    method: 'POST',
    body: JSON.stringify({ prompt: input })
  });
  return response.json();
}
```

## 🎨 Angular 20+ Patterns

### Signals
```typescript
readonly count = signal(0);              // Read/write
readonly double = computed(() => count() * 2);  // Computed
count.set(5);                            // Set value
count.update(n => n + 1);               // Update
```

### Components
```typescript
@Component({
  selector: 'app-my-comp',
  imports: [CommonModule],
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### Template Syntax
```html
@if (condition()) { <div>Yes</div> }
@for (item of items(); track item.id) { <div>{{ item }}</div> }
```

## 🔧 Development

**Build:**
```bash
npm run build
```

**Test:**
```bash
npm test
```

## 📚 Resources

- [Angular Docs](https://angular.dev/)
- [Three.js Docs](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 🐛 Troubleshooting

**Zwart scherm?**
- Check console voor errors
- Zorg dat lights zijn toegevoegd
- Check camera positie: `camera.position.z = 15`

**Audio werkt niet?**
- Check mute button (rechtsboven)
- Browser vereist user interaction eerst
- Check browser console

**Performance problemen?**
- Verlaag polygon count: `SphereGeometry(1, 16, 16)` ipv 64
- Disable antialias: `WebGLRenderer({ antialias: false })`

## 🎉 Have Fun!

Dit is jouw canvas. Experimenteer, bouw, en maak iets cools! 🚀✨
