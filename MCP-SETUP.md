# 🔧 MCP Setup Guide

**MCPs = Model Context Protocols** → Superkrachten voor Cursor!

---

## ⚠️ Vereiste

**Angular CLI 21** is verplicht!

```bash
ng version                              # Check versie
npm install -g @angular/cli@21         # Installeer Angular 21
```

---

## ⚡ Setup

### Stap 1: Open MCP Config

```
Mac: Cmd + Shift + P → "MCP Settings"
Win: Ctrl + Shift + P → "MCP Settings"
```

### Stap 2: Kopieer Deze Config

📂 File: `~/.cursor/mcp.json`

```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp",
      "headers": {}
    },
    "Chrome DevTools": {
      "command": "npx chrome-devtools-mcp@latest",
      "env": {},
      "args": []
    },
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

### Stap 3: Restart Cursor

Quit en heropen Cursor.

---

## 🎯 Gebruik

### Angular MCP
```
Using Angular MCP, get best practices
Using Angular MCP, search documentation for "signals"
```

### Chrome DevTools MCP
```
Using Chrome DevTools, what's the current FPS?
Using Chrome DevTools, check console for errors
```

### SupaBase MCP
```
Using SupaBase MCP, list tables
Using SupaBase MCP, save current scene
```

---

## ✅ Checklist

- [ ] Angular CLI 21 geïnstalleerd
- [ ] MCP config aangemaakt
- [ ] Cursor restarted
- [ ] Test: "Using Angular MCP, get best practices"

**Klaar! Ga naar [EXERCISE.md](./EXERCISE.md)** 🚀
