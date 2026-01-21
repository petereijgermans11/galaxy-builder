# 🚀 Galaxy Builder - Workshop Exercise

**Missie:** Bouw het meest realistische interactieve zonnestelsel met spraakbesturing!

---

## 🎯 Wat Ga Je Maken?

Een zonnestelsel waar je:
- 🖱️ **360° rond kunt kijken** met muis drag en zoom
- 🎙️ **"Add Jupiter"** zegt → Jupiter verschijnt
- 👆 **Klikt op Earth** → Ziet real-time astronomie data
- 🖼️ **NASA foto** ziet als bonus achtergrond
- 📊 **8 planeten ziet** met labels en orbit trails

**Demo:** Type `Create a solar system` → Compleet zonnestelsel met alle features!

---

## 📋 Roadmap

```
Stap 0 → Setup MCPs (zie MCP-SETUP.md)
Opdracht 1 → 8 Planeten + Labels + 360° Camera
Opdracht 2 → Spraakbesturing  
Opdracht 3 → Real-time Astronomie Data + NASA APOD (bonus)
Opdracht 4 → Visual Polish (Orbit Lines + Stars)
```

> 💡 **Tip:** De Cursor prompts zijn suggesties. Eigen aanpak of betere ideeën? Die zijn ook welkom!

---

## 🔧 Stap 0: Setup MCPs

**Voordat je begint:** Configureer de MCPs (Model Context Protocols) voor extra superkrachten!

👉 **Zie volledige instructies in:** [MCP-SETUP.md](./MCP-SETUP.md)

**MCPs geven je:**
- 🌐 Browser testing & screenshots
- 🔍 Performance debugging
- 💾 Cloud data opslag (optioneel)

**Quick Check:** Test of MCPs werken:
```
Using Browser MCP, open http://localhost:4200
```

---

## 🌟 Opdracht 1: Realistisch Zonnestelsel

### Einddoel
✅ Command `Create a solar system` toont 8 planeten met labels en Saturn's ringen

### Wat Je Doet

**Stap 1: Voeg 8 Planeten Toe**

📂 Open: `src/app/services/scene.service.ts` → functie `createSolarSystem()`

📋 Alle 8 planeten: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

**Planet Data:**
```
Mercury:  radius 0.4  | color 0x8c7853 | distance 4   | speed 0.04
Venus:    radius 0.95 | color 0xffc649 | distance 7   | speed 0.035
Earth:    radius 1.0  | color 0x6b93d6 | distance 10  | speed 0.03
Mars:     radius 0.53 | color 0xc1440e | distance 15  | speed 0.024
Jupiter:  radius 2.5  | color 0xc88b3a | distance 20  | speed 0.013
Saturn:   radius 2.2  | color 0xfad5a5 | distance 28  | speed 0.010
Uranus:   radius 1.0  | color 0x4fd0e7 | distance 35  | speed 0.007
Neptune:  radius 0.9  | color 0x4166f5 | distance 42  | speed 0.005
```

**Cursor Prompt:**
```
Add all 8 planets to createSolarSystem() using THREE.Mesh with SphereGeometry.
Set userData: orbitRadius, orbitSpeed. Add all to this.scene.
```

---

**Stap 2: Planet Labels**

🎯 Toon naam boven elke planeet als floating label

**Cursor Prompt:**
```
Create method addPlanetLabel(planet, name) using CSS2DRenderer from three/examples.
Make white text on dark background, position above planet. Call for each planet.
```

---

**Stap 3: Saturn Ringen**

🎯 Maak Saturn herkenbaar met ringen!

**Cursor Prompt:**
```
Add RingGeometry to Saturn: inner radius 2.6, outer 4.4, color 0xc9b382.
Rotate 60 degrees to tilt. Add to Saturn as child.
```

---

**Stap 4: Camera Controls (360° View)**

🎯 Bekijk je zonnestelsel vanuit elke hoek!

**Cursor Prompt:**
```
Add OrbitControls from three/examples/jsm/controls/OrbitControls.js
In initScene(), after camera setup:
- Create controls with camera and canvas
- Set enableDamping = true, minDistance = 10, maxDistance = 200
In animate(), call controls.update()
```

---

### ✅ Test Checkpoint

```bash
npm start
# Type: Create a solar system
```

**Verwacht:** 
- 8 planeten in banen met labels
- Saturn heeft ringen
- Je kunt met muis slepen om rond te kijken ← NIEUW!

---

## 🎙️ Opdracht 2: Spraakbesturing

### Einddoel
✅ Microfoon knop werkt
✅ "Add Jupiter" → Jupiter verschijnt
✅ "Remove Mars" → Mars verdwijnt

### Wat Je Doet

**Stap 1: Microphone Button**

📂 Open: `src/app/components/command-input.component.ts`

**Cursor Prompt:**
```
Add microphone button next to input. On click, start Web Speech API (webkitSpeechRecognition).
Show "Listening..." while recording. Send recognized text to existing submitCommand().
```

---

**Stap 2: Voice Command Parser**

📂 Open: `src/app/services/ai.service.ts`

**Extend bestaande `parseCommand()` voor:**
- "add [planet]" → Voeg planeet toe
- "remove [planet]" → Verwijder planeet  
- "zoom [planet]" → Camera naar planeet
- "create solar system" → Rebuild alles

**Cursor Prompt:**
```
Extend parseCommand() to detect: add/remove/zoom/create actions + target planet name.
Return { action: 'add', target: 'jupiter' }. Case-insensitive matching.
```

---

### ✅ Test Checkpoint

1. Klik microfoon 🎤
2. Zeg: **"Add Jupiter"**
3. Jupiter moet verschijnen!

---

## 🌐 Opdracht 3: Real-time Astronomie Data

### Einddoel
✅ Klik op planeet → Info panel met real-time data
✅ BONUS: NASA Astronomy Picture als achtergrond

### Wat Je Doet

**Stap 1: Klikbare Planeten**

📂 Open: `src/app/components/viewer-3d.component.ts`

**Cursor Prompt:**
```
Add click detection using THREE.Raycaster. On planet click:
1. Get planet name from userData
2. Show info panel (HTML div) with: name, "Loading..."
3. Position panel right side of screen
4. Add close button (X)
```

---

**Stap 2: Fetch Planeet Data**

📂 Maak: `src/app/services/astronomy.service.ts`

**API:** Le Système Solaire (open-source astronomie data)
```
https://api.le-systeme-solaire.net/rest/bodies/[planet]
```

**Cursor Prompt:**
```
Create astronomy.service.ts with getPlanetData(name: string).
Fetch from Le Système Solaire API. Return: mass, gravity, avgTemp, moons count.
On success, update info panel with this data. Handle errors.
```

**Data voorbeeld:**
- Mass: 5.97237e24 kg
- Gravity: 9.8 m/s²
- Avg Temperature: 288 K
- Moons: 1 (Moon)

---

**Stap 3 (BONUS): NASA Picture of the Day**

📂 In: `src/app/components/viewer-3d.component.ts` of nieuwe component

**API:** NASA APOD (Astronomy Picture of the Day)
```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

**Cursor Prompt:**
```
Create method loadNasaAPOD() that:
1. Fetches NASA APOD API
2. Shows image thumbnail in corner of screen
3. On click, opens full image in modal
4. Include title and explanation
Note: Use DEMO_KEY for testing (max 30 requests/hour)
```

**API Key:** Je kunt een gratis key aanvragen op https://api.nasa.gov/

---

### ✅ Test Checkpoint

1. Klik op **Earth** 🌍
2. Zie: Temperature, Gravity, 1 Moon (Le Système Solaire data)
3. Close button werkt
4. **BONUS:** NASA foto zichtbaar in hoek

---

## 🎨 Opdracht 4: Visual Polish

### Einddoel
✅ Orbit lijnen zichtbaar (cirkels waar planeten draaien)
✅ Sterren achtergrond (space feeling!)

### Wat Je Doet

**Cursor Prompt:**
```
In scene.service.ts:
1. For each planet, add orbit circle using EllipseCurve + Line (color 0x444444, opacity 0.3)
2. Add 1000 background stars using Points (random positions, radius 500, white, size 0.5)
```

---

### ✅ Final Test

- [ ] 8 planeten met labels ✨
- [ ] Saturn heeft ringen 🪐
- [ ] 360° camera controls (muis drag) 🖱️
- [ ] Spraakcommando werkt 🎙️
- [ ] Planet info toont astronomie data 📊
- [ ] Orbit lijnen + sterren zichtbaar ⭐
- [ ] BONUS: NASA APOD foto zichtbaar 🖼️

---

## 🎉 Demo Time!

### Toon aan je groep:

1. **Command:** `Create a solar system`
2. **Navigate:** Sleep met muis voor 360° view - zoom met muiswiel 🖱️
3. **Voice:** "Add Jupiter" → Jupiter verschijnt 🎙️
4. **Click:** Earth → Astronomie data panel 📊
5. **BONUS:** NASA photo in hoek 🖼️
6. **Screenshot:** Deel je creatie! 📸

---

## 🐛 Hulp Nodig?

**Zwart scherm?**
→ `Cursor: "Check if AmbientLight is added in initScene()"`

**Speech werkt niet?**
→ Gebruik Chrome/Edge (Safari ondersteunt geen Speech API)

**API data laadt niet?**
→ Check network tab (F12) voor failed requests
→ Le Système Solaire API vereist geen key
→ NASA APOD vereist API key: gebruik DEMO_KEY voor testing

**Planeten klikken niet?**
→ `Cursor: "Add console.log in raycaster intersects, what do you see?"`

**NASA APOD rate limit?**
→ DEMO_KEY heeft max 30 requests/uur
→ Vraag gratis key aan op https://api.nasa.gov/

---

## 🚀 Bonus Challenges (Tijd over?)

1. **NASA APOD Achtergrond** - Dagelijkse ruimtefoto als skybox ⭐
2. **ISS Live Position** - Toon ISS met Open Notify API
3. **Planet Trails** - Laat orbit trails tekenen tijdens beweging
4. **Day/Night Cycle** - Donkere kant van planeet met shaders
5. **Moons** - Voeg Moon toe die om Earth draait
6. **Search Bar** - Type "Earth" → zoom naar Earth
7. **Asteroid Belt** - 1000 kleine rotsen tussen Mars en Jupiter
8. **Planet Textures** - Realistische NASA textures laden
9. **SpaceX Launches** - Toon recente missies met SpaceX API
10. **VR Mode** - WebXR ondersteuning

---

**Veel succes Space Developer! 🌌✨**
