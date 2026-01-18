# 🌌 Galaxy Builder Workshop

**Dit is jouw startbasis. Bouw het uit tot een volwaardige Galaxy app!** Hier zijn ideeën van simpel naar geavanceerd:

## 🌟 Level 1: Beginner (0-2 uur)

- ✨ **Meer planeten toevoegen** - Jupiter, Saturn met ringen, Uranus, Neptunus
- 🌙 **Manen** - Laat manen rond planeten draaien (Earth → Moon)
- 🎨 **Kleuren aanpassen** - Maak planeten realistischer met echte kleuren
- 🔆 **Extra lights** - Point lights bij sterren, ambient light voor sfeer
- 📝 **Labels toevoegen** - Toon namen van planeten met CSS 3D labels

## 🚀 Level 2: Intermediate (2-5 uur)

- 🎮 **Camera controls** - OrbitControls voor interactieve navigatie
- 🪨 **Asteroid belt** - InstancedMesh voor duizenden asteroids
- 🖼️ **Textures** - Laad echte NASA planeet textures
- ⚡ **Post-processing** - Bloom, glow, lens flare effects
- 🎵 **Spatial audio** - 3D geluid gebaseerd op positie

## 🔥 Level 3: Advanced (5-10 uur)

- 🤖 **AI integration** - OpenAI/Claude voor intelligente parsing
- 🎙️ **Voice input** - Speech Recognition API
- ⚙️ **Physics engine** - Cannon.js voor realistische zwaartekracht
- 🎨 **Custom shaders** - GLSL voor nebula, aurora effects

## 🌌 Level 4: Expert (10+ uur)

- 🥽 **VR support** - WebXR voor immersive experiences
- 🌐 **Multiplayer** - WebSockets voor shared universes
- 🧮 **N-body simulation** - Realistische orbital mechanics

---

## 💡 Wat is het?

Een Angular 21 + Three.js applicatie om 3D universes te bouwen met **natuurlijke taal commando's**. Type "Create a solar system" en zie direct de zon, aarde en Mars tot leven komen!

**Wat leer je:**
- Angular 21 (Standalone Components, Signals)
- Three.js 3D rendering
- Command parsing (AI-ready)
- Web Audio API

## 🚀 Quick Start

### Installatie

```bash
npm install
npm start
```

Open **http://localhost:4200/**

### Vereisten

- Node.js 18+
- Angular CLI 21: `npm install -g @angular/cli@21`

### Basis Commando's

- `Create a solar system` - Zon + planeten met orbits
- `Create a galaxy` - 5000 sterren particle system  
- `Create a black hole` - Black hole + accretion disk

## 🏗️ Project Structuur

```
src/app/
├── components/
│   ├── command-input.component.ts    # Command input UI
│   └── viewer-3d.component.ts        # Three.js 3D canvas
├── services/
│   ├── scene.service.ts              # Three.js scene management
│   ├── ai.service.ts                 # Command parsing (AI-ready)
│   └── audio.service.ts              # Web Audio
└── app.ts                            # Main component
```

**SceneService** - Bevat alle 3D logic:
- `createSolarSystem()`, `createGalaxy()`, `createBlackHole()`
- Animation loop met orbital mechanics

**AIService** - Parse commando's (klaar voor AI API's)

**AudioService** - Sound feedback (Web Audio API)

## 📚 Code Voorbeelden

### Planeet Toevoegen

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

### Camera Controls

```bash
npm install three
```

```typescript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// In scene.service.ts
private controls!: OrbitControls;

initScene(canvas: HTMLCanvasElement): void {
  // ... bestaande code ...
  this.controls = new OrbitControls(this.camera, canvas);
  this.controls.enableDamping = true;
}

animate(): void {
  this.controls?.update();
  // ... rest ...
}
```

### AI Integratie (OpenAI)

```typescript
// In ai.service.ts
async parseWithAI(input: string): Promise<GalaxyCommand> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: input }]
    })
  });
  return response.json();
}
```

## 🎨 Angular 21 Cheat Sheet

### Signals

```typescript
// Reactive state
readonly count = signal(0);
readonly double = computed(() => count() * 2);

count.set(5);           // Zet waarde
count.update(n => n+1); // Update
```

### Nieuwe Template Syntax

```html
@if (user()) {
  <div>Welcome {{ user().name }}</div>
} @else {
  <div>Login</div>
}

@for (item of items(); track item.id) {
  <div>{{ item }}</div>
}
```

### Standalone Components

```typescript
@Component({
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

## 🐛 Troubleshooting

### Zwart Scherm?

```typescript
// Voeg lights toe
const light = new THREE.AmbientLight(0xffffff, 0.5);
this.scene.add(light);

// Check camera positie
this.camera.position.z = 15;
```

### Audio Werkt Niet?

- Check mute button (rechtsboven)
- Browser vereist user interaction voor audio
- Check console voor errors

### Performance Laag?

```typescript
// Verlaag polygons
new THREE.SphereGeometry(1, 16, 16)  // ipv 64, 64

// Disable antialiasing
new THREE.WebGLRenderer({ antialias: false })
```

## 🛠️ Handige Commando's

```bash
npm start              # Dev server
npm run build          # Production build
npm test               # Unit tests

ng generate component components/my-comp    # Nieuwe component
ng generate service services/my-service     # Nieuwe service
```

## 📚 Resources

- [Angular Docs](https://angular.dev/)
- [Three.js Docs](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Three.js Journey](https://threejs-journey.com/) - Beste cursus

## 🎉 Klaar om te Beginnen!

1. Start de app: `npm start`
2. Speel met de commando's
3. Kies een Level 1 uitbreiding
4. Bouw verder!

**Veel succes! 🚀✨🌌**
