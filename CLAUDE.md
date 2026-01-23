# Galaxy Builder - Claude Onboarding

## What?
Angular 21 + Three.js workshop: interactief 3D zonnestelsel met natuurlijke taal commando's.

**Stack:** Angular 21 (Standalone, Signals), Three.js, Web Audio, Speech Recognition

## Why?
Workshop voor AI-assisted development:
- Visual 3D feedback
- Complex orbital mechanics
- Modern Angular 21 patterns
- Multiple API integration (Le Système Solaire, NASA APOD)

## How?

### Quick Start
```bash
npm install && npm start  # localhost:4200
```

### Architecture
```
app.ts (root)
├── command-input.component.ts (UI input)
├── viewer-3d.component.ts (3D canvas)
├── scene.service.ts ⭐ (ALL 3D LOGIC)
├── ai.service.ts (command parsing)
└── audio.service.ts (sound feedback)
```

**Data Flow:** Input → AIService.parseCommand() → SceneService.create*() → Viewer3D renders

### Commands
- `Create a solar system` - Zon + planeten
- `Create a galaxy` - 5000 sterren
- `Create a black hole` - Black hole + disk

## Coding Rules

### DO ✅
- Use **Signals** for state: `signal()`, `computed()`, `effect()`
- Use **OnPush** change detection
- Use **Standalone** components (no NgModules)
- Use **new syntax**: `@if`, `@for`, `@switch`
- Add **"Workshop TODO"** comments for extensions
- Keep **strict typing** (no `any`)
- Use **readonly/private** modifiers
- Document with **JSDoc**

### DON'T ❌
- No `*ngIf`, `*ngFor` (use `@if`, `@for`)
- No `any` types
- No NgModules
- No constructor injection (use `inject()` function)
- No direct DOM manipulation (use Signals)

### Code Style
```typescript
// Services
@Injectable({ providedIn: 'root' })
export class MyService {
  readonly state = signal(0);
  private helper() { }
}

// Components
@Component({
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

## AI Behavior Guidelines

### When Extending Features
1. **Add to scene.service.ts** - All 3D logic goes here
2. **Use Signals** - For reactive state updates
3. **Follow patterns** - Match existing code style
4. **Add TODOs** - Mark workshop extension points

### Good Prompts
- "Add Jupiter to createSolarSystem() with radius 2.5, orbit 20"
- "Add OrbitControls from three/examples/jsm/controls"
- "Implement voice command 'add planet' using parseCommand()"

### File Targets
- **3D features** → `scene.service.ts`
- **Commands** → `ai.service.ts`
- **UI** → `command-input.component.ts`
- **Canvas** → `viewer-3d.component.ts`

### MCPs Available
- `angular-cli` - Angular 21 best practices
- `Chrome DevTools` - Performance debugging
- `supabase` - Data persistence

## Workshop Docs
- [EXERCISE.md](./EXERCISE.md) - 4 opdrachten (planeten, spraak, APIs, visual)
- [MCP-SETUP.md](./MCP-SETUP.md) - MCPs configuratie
