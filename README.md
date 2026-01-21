# 🌌 Galaxy Builder Workshop

**Moeilijkheidsgraad:** M | **Focus:** Frontend Development

---

## 🎯 Wat is het Idee?

Bouw een interactieve 3D applicatie waarin je met **natuurlijke taal** commando's kunt typen om direct 3D universes te genereren. Type "Create a solar system" en zie de zon, aarde en Mars tot leven komen met realistische orbits. Dit is jouw persoonlijke universum-bouwer, klaar om uit te breiden met AI-integratie.

---

## 📚 Workshop Documenten

- 📋 **[EXERCISE.md](./EXERCISE.md)** - Concrete 2-uur workshop opdrachten
- 🔧 **[MCP-SETUP.md](./MCP-SETUP.md)** - MCPs configureren voor extra superkrachten

## 🚀 Quick Start

### Installatie

```bash
# Clone/download het project
cd galaxy-builder

# Installeer dependencies
npm install

# Start development server
npm start
```

Open **http://localhost:4200/** in je browser.

### Vereisten
- Node.js 18+ en npm
- Cursor editor (of VS Code)
- Angular CLI 21: `npm install -g @angular/cli@21`

### Probeer de Basis Commando's

Type in de command box:
- `Create a solar system` - Zon + planeten met orbits
- `Create a galaxy` - 5000 sterren particle system  
- `Create a black hole` - Black hole + accretion disk

**🎉 Je eerste 3D universe is klaar!** Nu gaan we het uitbreiden.

## 🤔 Waarom Dit Project?

Perfect voor **AI-assisted development** omdat je leert:
- **Modern Angular 21** - Signals, Standalone Components, nieuwe syntax
- **Three.js 3D rendering** - WebGL, scene management, animaties  
- **Prompt engineering** - AI gebruiken voor complexe 3D code
- **Visual debugging** - Direct feedback zien in 3D scene

Het combineert moderne frontend tech met visuele output - ideaal om AI-tools zoals Cursor effectief te gebruiken.

## 📦 Wat Zit er in Deze Repo?

### Project Structuur

```
src/app/
├── components/
│   ├── command-input.component.ts    # Command UI
│   └── viewer-3d.component.ts        # Three.js canvas
├── services/
│   ├── scene.service.ts              # 3D scene management ⭐
│   ├── ai.service.ts                 # Command parsing (AI-ready)
│   └── audio.service.ts              # Web Audio
└── app.ts                            # Main component
```

**⭐ scene.service.ts** is waar de magie gebeurt - alle 3D logic staat hier.

### Tech Stack

- **Angular 21** - Standalone Components, Signals, moderne template syntax
- **Three.js** - 3D rendering engine
- **TypeScript 5.7** - Strict mode, type safety
- **Web Audio API** - Sound feedback

### Handige Commando's

```bash
npm start              # Dev server (poort 4200)
npm run build          # Production build
npm test               # Unit tests
ng generate component  # Nieuwe component
ng generate service    # Nieuwe service
```

## 🐛 Troubleshooting

**Zwart scherm?** → Check lights en camera positie (`z = 15`)  
**Audio werkt niet?** → Check mute button, browser vereist user interaction  
**Performance laag?** → Verlaag polygon count of disable antialiasing  
**Build errors?** → `rm -rf node_modules && npm install`

## 📚 Resources

- [Angular Docs](https://angular.dev/) - Officiële documentatie
- [Three.js Docs](https://threejs.org/docs/) - API reference
- [Three.js Examples](https://threejs.org/examples/) - Voorbeelden
- [Three.js Journey](https://threejs-journey.com/) - Beste cursus

## 🎉 Klaar om te Beginnen!

### Je Eerste Stappen

1. 🚀 **Start de app:** `npm start`
2. 🎮 **Probeer alle drie commando's** (solar system, galaxy, black hole)
3. 🔧 **Setup MCPs:** Zie [MCP-SETUP.md](./MCP-SETUP.md) voor Browser & DevTools MCPs
4. 📋 **Begin met opdrachten:** Ga naar [EXERCISE.md](./EXERCISE.md) voor de workshop

**Veel succes en plezier! 🚀✨🌌**