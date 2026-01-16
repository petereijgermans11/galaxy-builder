# 🌌 Galaxy Builder Workshop

## 💡 Wat is het Idee?

Galaxy Builder is een interactieve 3D applicatie waarin je met **natuurlijke taal** commando's kunt typen om direct 3D universes te genereren. Stel je voor: je typt "Create a solar system" en ziet direct de zon, aarde en Mars tot leven komen met realistische orbits. Dit is jouw persoonlijke universum-bouwer!

## 🎯 Waarom Dit Project? / Doel van de Workshop

Deze workshop combineert **moderne web development** met **3D graphics** en bereidt je voor op toekomstige **AI-integratie**. Je leert:

- ✨ **Angular 21** met de nieuwste features (Standalone Components, Signals)
- 🎮 **Three.js** voor 3D rendering in de browser
- 🤖 Command parsing (uitbreidbaar naar OpenAI/Claude AI)
- 🔊 **Web Audio API** voor immersive experiences
- 🚀 Van prototype naar productie-klare applicatie

**Perfecte startbasis** voor AI-gestuurde 3D applicaties, games, visualisaties of educational tools!

## 📋 Wat Houdt Deze App In?

### Huidige Features

De app bevat nu al drie werkende 3D scenes die je kunt aanroepen met natuurlijke taal:

1. **Solar System** (`Create a solar system`)
   - Zon met glow effect
   - Aarde en Mars met realistische orbits
   - Automatische rotatie en beweging

2. **Galaxy** (`Create a galaxy`)
   - 5000 sterren als particle system
   - Spiraal galaxy vormgeving
   - Kleurenvariatie (wit, blauw, rood)

3. **Black Hole** (`Create a black hole`)
   - Zwarte bol met event horizon
   - Accretion disk met rotatie
   - Energetische gloed-effecten

### UI Componenten

- 💬 **Command Input** - Type je commando's in natuurlijke taal
- 🎨 **3D Viewer** - Real-time 3D canvas met smooth animaties
- 🔇 **Audio Controls** - Mute/unmute sound effects

## 🚀 Aan de Slag met Technische Setup

### Vereisten

Zorg dat je de volgende tools geïnstalleerd hebt:

- ✅ **Cursor** (of VS Code) - Code editor
- ✅ **Node.js** (v18 of hoger) & **NPM** - JavaScript runtime
- ✅ **Angular CLI v21** - Angular command-line tool

#### Angular CLI Installeren

Als je Angular CLI nog niet hebt:

```bash
npm install -g @angular/cli@21
```

Controleer je installatie:

```bash
ng version
```

### Installatie van het Project

1. **Clone of download dit project**

2. **Installeer dependencies:**

```bash
npm install
```

Dit installeert:
- Angular 21
- Three.js (3D engine)
- TypeScript
- Alle benodigde build tools

3. **Start de development server:**

```bash
npm start
```

4. **Open je browser:**

Navigeer naar **http://localhost:4200/**

Je ziet nu de Galaxy Builder interface! 🎉

### Handige Commando's

```bash
# Development server starten (poort 4200)
npm start

# Production build maken
npm run build

# Unit tests draaien
npm test

# Code linting
ng lint

# Nieuwe component genereren
ng generate component components/my-new-component

# Nieuwe service genereren  
ng generate service services/my-new-service
```

## 🏗️ Wat Zit Er in Deze Repo?

### Project Structuur

```
galaxy-builder/
├── src/
│   ├── app/
│   │   ├── components/           # UI Components
│   │   │   ├── command-input.component.ts    # Command input interface
│   │   │   └── viewer-3d.component.ts        # Three.js 3D canvas
│   │   ├── services/             # Business Logic
│   │   │   ├── scene.service.ts              # Three.js scene management
│   │   │   ├── ai.service.ts                 # Command parsing (AI-ready)
│   │   │   └── audio.service.ts              # Web Audio API
│   │   ├── app.ts                # Main app component
│   │   ├── app.html              # Main template
│   │   └── app.config.ts         # App configuration
│   ├── index.html                # HTML entry point
│   ├── main.ts                   # Bootstrap applicatie
│   └── styles.css                # Global styles
├── angular.json                  # Angular project config
├── package.json                  # NPM dependencies
└── tsconfig.json                 # TypeScript config
```

### Components Uitgelegd

**`Viewer3DComponent`** - De 3D rendering engine
- Initialiseert Three.js scene, camera, renderer
- Real-time animation loop (60 FPS)
- Responsive canvas die meeschaalt
- Lifecycle management voor clean-up

**`CommandInputComponent`** - De command interface
- Text input met suggesties
- Voice mute/unmute toggle rechtsboven
- Command submission naar AI service
- Event handling en user feedback

### Services Uitgelegd

**`SceneService`** - Het hart van de 3D wereld
- `createSolarSystem()` - Genereert zonnestelsel met orbital mechanics
- `createGalaxy()` - Maakt particle system met 5000+ sterren
- `createBlackHole()` - Creëert black hole met accretion disk
- `animate()` - Game loop voor continues rendering
- Scene cleanup en memory management

**`AIService`** - Command parsing engine
- Parse natuurlijke taal naar gestructureerde commando's
- Pattern matching voor verschillende commando types
- **Ready voor AI API integratie** (OpenAI, Claude, Gemini)
- Extensible command system

**`AudioService`** - Sound feedback systeem
- Web Audio API integratie
- Beep sounds voor user feedback
- Mute/unmute functionality
- Basis voor spatial audio (3D sound positioning)

## 🛠️ Beschikbare Tooling & Tech Stack

### Core Technologies

- **Angular 21** - Modern framework met:
  - Standalone Components (geen NgModules meer!)
  - Signals voor reactive state
  - OnPush Change Detection voor performance
  - Nieuwe template syntax (`@if`, `@for`)

- **Three.js r169** - Industry-standard 3D engine:
  - WebGL rendering
  - Scene graph management
  - Built-in geometries en materials
  - Animation system

- **TypeScript 5.7** - Type safety en modern JavaScript:
  - Strict mode enabled
  - Decorators voor Angular
  - ES2022 target

- **Web Audio API** - Browser-native audio:
  - OscillatorNode voor synth sounds
  - GainNode voor volume control
  - Basis voor spatial audio effects

### Development Tools

- **Angular DevTools** - Browser extension voor debugging
- **Angular CLI** - Code generation en build tools
- **TypeScript Language Service** - IntelliSense in je editor
- **Source Maps** - Debug je TypeScript direct in de browser

## 💻 Gebruik van de App

Zodra de app draait, kun je direct experimenteren:

### Basis Commando's

Type in de command box:

- `Create a solar system` - Genereert zon, aarde, mars met orbits
- `Create a galaxy` - Maakt 5000 sterren particle system  
- `Create a black hole` - Maakt black hole met accretion disk

### Tips

- 🔇 Gebruik de **mute button** rechtsboven om geluid aan/uit te zetten
- 🌍 De 3D scene is **real-time** - objecten blijven bewegen
- 🎨 Elk commando **vervangt** de huidige scene (uitbreidbaar!)
- ⚡ Commando's zijn **case-insensitive**

## 🎯 Van Prototype naar Productie - Uitbreidingen

Dit is jouw **startbasis**. Bouw het uit tot een volwaardige Galaxy app! Hier zijn ideeën van simpel naar geavanceerd:

### 🌟 Level 1: Beginner (0-2 uur)

- ✨ **Meer planeten toevoegen** - Jupiter, Saturn met ringen, Uranus, Neptunus
- 🌙 **Manen** - Laat manen rond planeten draaien (Earth → Moon)
- 🎨 **Kleuren aanpassen** - Maak planeten realistischer met echte kleuren
- 🔆 **Extra lights** - Point lights bij sterren, ambient light voor sfeer
- 📝 **Labels toevoegen** - Toon namen van planeten met CSS 3D labels

### 🚀 Level 2: Intermediate (2-5 uur)

- 🎮 **Camera controls** - OrbitControls voor interactieve navigatie
- 🪨 **Asteroid belt** - Gebruik `InstancedMesh` voor duizenden asteroids
- 🖼️ **Textures** - Laad echte NASA planeet textures
- ⚡ **Post-processing** - Bloom, glow, lens flare effects
- 💾 **Save/Load scenes** - localStorage voor persistentie
- 📊 **Stats panel** - FPS meter en performance monitoring
- 🎵 **Spatial audio** - 3D geluid gebaseerd op camera positie

### 🔥 Level 3: Advanced (5-10 uur)

- 🤖 **AI integration** - OpenAI/Claude/Gemini voor intelligente parsing
- 🎙️ **Voice input** - Speech Recognition API ("Hey Galaxy, create a nebula")
- ⚙️ **Physics engine** - Cannon.js/Rapier voor realistische zwaartekracht
- 🎨 **Custom shaders** - GLSL voor nebula, aurora, plasma effects
- 🌈 **Procedural generation** - Genereer random planeten met eigenschappen
- 📱 **Mobile controls** - Touch gestures, gyroscoop
- 🔄 **State management** - NgRx of signals-based state

### 🌌 Level 4: Expert (10+ uur)

- 🥽 **VR support** - WebXR voor immersive experiences
- 🌐 **Multiplayer** - WebSockets voor shared universes
- 🧮 **N-body simulation** - Realistische orbital mechanics
- 🎬 **Timeline & Recording** - Capture en replay camera paths
- 🗺️ **Minimap** - 2D overview van je universe
- 🏆 **Achievements** - Gamification elements
- 📦 **Asset pipeline** - GLB/GLTF model loading met Blender export

### 📚 Quick Start Examples

Hier zijn concrete code snippets om je op weg te helpen:

#### 🪐 Voorbeeld 1: Jupiter Toevoegen aan Solar System

Open `src/app/services/scene.service.ts` en voeg toe aan `createSolarSystem()`:

```typescript
// Jupiter met realistische kleur en grootte
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(2.5, 32, 32),
  new THREE.MeshStandardMaterial({ 
    color: 0xcc8844,  // Oranje/bruin tint
    metalness: 0.3,
    roughness: 0.7
  })
);
jupiter.position.set(20, 0, 0);
jupiter.userData['orbitRadius'] = 20;
jupiter.userData['orbitSpeed'] = 0.005;  // Trager dan Mars
jupiter.userData['rotationSpeed'] = 0.02;  // Snelle rotatie
this.scene.add(jupiter);
```

#### 🎮 Voorbeeld 2: Camera Controls voor Interactie

Installeer Three.js addons:

```bash
npm install three
```

Voeg toe aan `scene.service.ts`:

```typescript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// In SceneService class
private controls!: OrbitControls;

// In initScene() na camera setup
initScene(canvas: HTMLCanvasElement): void {
  // ... bestaande camera code ...
  
  // Camera controls voor mouse interactie
  this.controls = new OrbitControls(this.camera, canvas);
  this.controls.enableDamping = true;  // Smooth camera movement
  this.controls.dampingFactor = 0.05;
  this.controls.minDistance = 5;   // Zoom limiet
  this.controls.maxDistance = 100;
}

// Update in animate loop
private animate(): void {
  // ... bestaande code ...
  
  this.controls?.update();  // Update camera controls
  
  // ... rest van animatie ...
}
```

#### 🤖 Voorbeeld 3: AI Integration met OpenAI

Voeg toe aan `ai.service.ts`:

```typescript
async parseWithOpenAI(input: string): Promise<GalaxyCommand> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openaiApiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{
        role: 'system',
        content: 'Parse user input into galaxy commands: solar_system, galaxy, or black_hole'
      }, {
        role: 'user',
        content: input
      }]
    })
  });
  
  const data = await response.json();
  // Parse AI response naar GalaxyCommand
  return this.parseAIResponse(data.choices[0].message.content);
}
```

#### 🖼️ Voorbeeld 4: Planet Textures Laden

```typescript
// In scene.service.ts
import * as THREE from 'three';

createEarthWithTexture(): void {
  const textureLoader = new THREE.TextureLoader();
  
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial({
      map: textureLoader.load('assets/textures/earth_day.jpg'),
      normalMap: textureLoader.load('assets/textures/earth_normal.jpg'),
      roughnessMap: textureLoader.load('assets/textures/earth_specular.jpg')
    })
  );
  
  this.scene.add(earth);
}
```

#### 🎙️ Voorbeeld 5: Voice Input (Speech Recognition)

Voeg toe aan `command-input.component.ts`:

```typescript
startVoiceInput(): void {
  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  
  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    this.command.set(transcript);
    this.submitCommand();
  };
  
  recognition.start();
}
```

## 🎨 Angular 21 Modern Patterns - Cheat Sheet

Deze app gebruikt de **nieuwste Angular features**. Hier is wat je moet weten:

### 🔔 Signals - De Nieuwe Reactivity

Signals vervangen de oude RxJS patterns voor simpele state:

```typescript
// Basis signal (read/write)
readonly count = signal(0);
console.log(count());  // Lees waarde met ()

// Waarde updaten
count.set(5);                    // Direct zetten
count.update(n => n + 1);        // Update functie

// Computed signal (afgeleide waarde)
readonly double = computed(() => count() * 2);
console.log(double());  // Altijd 2x count

// Effect (side-effect bij wijziging)
effect(() => {
  console.log('Count changed:', count());
});
```

**Wanneer gebruiken?**
- ✅ Component state (mute status, commando tekst)
- ✅ Afgeleide waardes (filtered lists, calculations)
- ❌ Complexe async flows (gebruik RxJS)
- ❌ HTTP calls (gebruik observables)

### 📦 Standalone Components - Geen NgModules!

Elke component importeert wat ie nodig heeft:

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-comp',
  standalone: true,  // Standalone component!
  imports: [CommonModule, FormsModule],  // Importeer wat je gebruikt
  template: `<div>{{ title() }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush  // Performance!
})
export class MyComponent {
  title = signal('Hello');
}
```

**Voordelen:**
- 🚀 Snellere compile times
- 📦 Betere tree-shaking (kleinere bundles)
- 🧩 Modulaire architectuur
- 🎯 Duidelijke dependencies

### 🎭 Nieuwe Template Syntax - Control Flow

Geen `*ngIf` en `*ngFor` meer! Gebruik de nieuwe `@` syntax:

```html
<!-- Conditional rendering -->
@if (user()) {
  <div>Welcome {{ user()?.name }}</div>
} @else if (loading()) {
  <div>Loading...</div>
} @else {
  <div>Please login</div>
}

<!-- List rendering met track -->
@for (planet of planets(); track planet.id) {
  <div class="planet">{{ planet.name }}</div>
} @empty {
  <div>No planets found</div>
}

<!-- Switch statement -->
@switch (status()) {
  @case ('loading') { <div>Loading...</div> }
  @case ('error') { <div>Error!</div> }
  @case ('success') { <div>Done!</div> }
  @default { <div>Unknown</div> }
}
```

**Waarom beter?**
- ⚡ Betere performance (compile-time optimalisatie)
- 📖 Meer leesbaar (standaard control flow)
- 🐛 Type safety (TypeScript checks)
- 🔧 `@empty` en `@default` fallbacks

### 🎯 OnPush Change Detection

Voor betere performance:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

**Wat doet het?**
- Component update alleen bij:
  - Input changes
  - Signal changes
  - Event handlers
  - Async pipe updates

**Resultaat:** Minder checks = snellere app! 🚀

### 🔌 Dependency Injection - inject() Functie

Modern en type-safe:

```typescript
@Component({...})
export class MyComponent {
  // Oude manier (constructor)
  // constructor(private http: HttpClient) {}
  
  // Nieuwe manier (inject functie)
  private http = inject(HttpClient);
  private sceneService = inject(SceneService);
  
  ngOnInit() {
    this.http.get('...');
  }
}
```

**Voordelen:**
- ✨ Kortere code
- 🎯 Betere tree-shaking
- 🧪 Makkelijker testen

## 🔧 Development Workflow

### Build Commands

```bash
# Development server met hot reload
npm start
# Of: ng serve

# Production build (geoptimaliseerd)
npm run build
# Output in dist/ folder

# Build met source maps voor debugging
ng build --configuration development

# Build statistics tonen
ng build --stats-json
npm install -g webpack-bundle-analyzer
webpack-bundle-analyzer dist/stats.json
```

### Testing

```bash
# Unit tests draaien (Karma + Jasmine)
npm test

# Tests in watch mode
ng test --watch

# Code coverage genereren
ng test --code-coverage
```

### Code Quality

```bash
# Linting (ESLint)
ng lint

# Auto-fix linting issues
ng lint --fix

# TypeScript type checking
npx tsc --noEmit
```

### Code Generation

Gebruik Angular CLI voor consistente code:

```bash
# Component genereren
ng generate component components/planet-detail

# Service genereren
ng generate service services/physics

# Guard genereren
ng generate guard guards/auth

# Pipe genereren
ng generate pipe pipes/distance
```

## 📚 Handige Resources

### Officiële Documentatie

- 📘 [Angular.dev](https://angular.dev/) - Officiële Angular docs (v21+)
- 🎮 [Three.js Docs](https://threejs.org/docs/) - Complete Three.js API
- 🎨 [Three.js Examples](https://threejs.org/examples/) - Honderden voorbeelden
- 🔊 [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - MDN audio guide

### Learning Resources

- 🎓 [Angular Tutorial](https://angular.dev/tutorials) - Officiële getting started
- 📹 [Three.js Journey](https://threejs-journey.com/) - Beste Three.js cursus
- 🎮 [Discover Three.js](https://discoverthreejs.com/) - Gratis online boek
- 🌟 [WebGL Fundamentals](https://webglfundamentals.org/) - WebGL basics

### Tools & Extensions

- 🔧 [Angular DevTools](https://angular.dev/tools/devtools) - Chrome/Firefox extension
- 🎨 [Three.js Editor](https://threejs.org/editor/) - Visual scene builder
- 📦 [Sketchfab](https://sketchfab.com/) - 3D models download
- 🗺️ [Solar System Scope](https://www.solarsystemscope.com/textures/) - Gratis planeet textures

### Community

- 💬 [Angular Discord](https://discord.gg/angular)
- 🐦 [Three.js Twitter](https://twitter.com/threejs)
- 📖 [Three.js Discourse](https://discourse.threejs.org/)
- 📺 [Angular YouTube](https://www.youtube.com/@Angular)

## 🐛 Troubleshooting - Veelvoorkomende Problemen

### ❌ Zwart Scherm / Niks Zichtbaar

**Mogelijke oorzaken:**

1. **Geen lights in de scene**
   ```typescript
   // Voeg toe aan scene.service.ts - initScene()
   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
   this.scene.add(ambientLight);
   
   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
   directionalLight.position.set(5, 5, 5);
   this.scene.add(directionalLight);
   ```

2. **Camera positie verkeerd**
   ```typescript
   // Camera moet afstand hebben van objecten
   this.camera.position.z = 15;  // Niet 0!
   this.camera.lookAt(0, 0, 0);
   ```

3. **Canvas niet correct gemount**
   - Check browser console voor errors
   - Controleer of `#three-canvas` element bestaat

### 🔇 Audio Werkt Niet

**Oplossingen:**

1. **Check mute button** - Klik rechts boven in de UI
2. **Browser policy** - Browsers vereisen user interaction voor audio
   ```typescript
   // Audio start pas na eerste click/tap
   document.addEventListener('click', () => {
     audioContext.resume();
   }, { once: true });
   ```
3. **Browser console** - Check voor Web Audio errors
4. **HTTPS vereist** - Sommige browsers blokkeren audio op HTTP

### 🐌 Performance Problemen / Lage FPS

**Optimalisaties:**

1. **Verlaag polygon count**
   ```typescript
   // Van SphereGeometry(1, 64, 64) naar:
   new THREE.SphereGeometry(1, 16, 16)  // Minder polygons
   ```

2. **Disable antialiasing**
   ```typescript
   this.renderer = new THREE.WebGLRenderer({ 
     canvas,
     antialias: false  // Sneller!
   });
   ```

3. **Gebruik InstancedMesh** voor veel objecten
   ```typescript
   // Voor asteroid belt met 1000+ objecten
   const geometry = new THREE.SphereGeometry(0.1, 8, 8);
   const material = new THREE.MeshStandardMaterial();
   const mesh = new THREE.InstancedMesh(geometry, material, 1000);
   ```

4. **Monitor performance**
   ```bash
   npm install stats.js
   ```
   ```typescript
   import Stats from 'stats.js';
   const stats = new Stats();
   document.body.appendChild(stats.dom);
   ```

### 🔴 Build Errors

**Common fixes:**

1. **"Cannot find module"**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript errors**
   ```bash
   # Update TypeScript
   npm install -D typescript@latest
   ```

3. **Angular version mismatch**
   ```bash
   ng update @angular/cli @angular/core
   ```

### 🌐 CORS Errors (bij texture loading)

**Fix:**

1. **Development:** Gebruik proxy config
   ```json
   // proxy.conf.json
   {
     "/assets": {
       "target": "https://example.com",
       "secure": false,
       "changeOrigin": true
     }
   }
   ```

2. **Production:** Zorg voor CORS headers op server
3. **Quick fix:** Host assets lokaal in `/public/assets`

### 💡 Nog Steeds Problemen?

1. ✅ Check browser console voor errors (F12)
2. ✅ Verify Node.js versie: `node --version` (moet 18+)
3. ✅ Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. ✅ Try andere browser (Chrome/Firefox)
5. ✅ Check Angular DevTools voor component state
6. 📧 Vraag hulp in Angular/Three.js community

## 🎓 Workshop Tips & Best Practices

### Voor Beginners

1. ⭐ **Start klein** - Eerst één planeet perfect maken
2. 🔍 **Gebruik de browser DevTools** - Inspect 3D objects
3. 📖 **Lees error messages** - TypeScript helpt je!
4. 🎮 **Experimenteer** - Verander waardes en kijk wat gebeurt
5. 💾 **Commit regelmatig** - Git is je vriend

### Code Style

- 📏 Gebruik **4 spaties** voor indentatie
- 🎯 **Type alles** - Geen `any` types gebruiken
- 📝 **JSDoc comments** voor publieke methods
- 🏗️ **Single responsibility** - Elke functie doet één ding
- ♻️ **DRY principle** - Don't Repeat Yourself

### Performance Tips

- ⚡ Gebruik `ChangeDetectionStrategy.OnPush`
- 🎯 Gebruik `trackBy` in `@for` loops
- 🔧 Dispose geometries en materials netjes
- 📦 Lazy load grote assets
- 🎨 Reuse geometries waar mogelijk

## 🎉 Klaar om te Beginnen!

Je hebt nu alles wat je nodig hebt om een **awesome 3D Galaxy applicatie** te bouwen! 

### Next Steps

1. 🚀 Start de app: `npm start`
2. 🎮 Speel met de basis commando's
3. 📚 Kies een Level 1 uitbreiding
4. 💪 Bouw verder naar Level 2, 3, 4
5. 🌟 Deel je creatie!

**Veel plezier en succes! 🚀✨🌌**

---

*Made with ❤️ for Galaxy Builders - Workshop 2026*
