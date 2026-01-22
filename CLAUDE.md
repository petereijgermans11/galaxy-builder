# 🌌 Galaxy Builder - Claude Onboarding

## Project
Angular 21 + Three.js workshop: bouw interactief 3D zonnestelsel met natuurlijke taal commando's. Type "Create a solar system" → planeten verschijnen.

## Tech Stack
- Angular 21 (Standalone Components, Signals, nieuwe @if/@for syntax)
- Three.js (3D rendering)
- Web Audio API + Speech Recognition
- APIs: Le Système Solaire, NASA APOD

## Run
```bash
npm install && npm start  # localhost:4200
```

## Structuur (belangrijkste files)
```
src/app/services/scene.service.ts    # ⭐ ALLE 3D LOGIC HIER
src/app/services/ai.service.ts       # Command parsing
src/app/components/viewer-3d.component.ts   # Canvas setup
src/app/components/command-input.component.ts   # UI
```

## Basis Commando's
- `Create a solar system` - Zon + 2 planeten (Earth, Mars)
- `Create a galaxy` - 5000 sterren particle system
- `Create a black hole` - Black hole + accretion disk

## Workshop Docs
- [EXERCISE.md](./EXERCISE.md) - 4 opdrachten (planeten, spraak, APIs, polish)
- [MCP-SETUP.md](./MCP-SETUP.md) - Angular/Chrome DevTools/SupaBase MCPs
