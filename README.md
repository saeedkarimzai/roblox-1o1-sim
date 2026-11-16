# Roblox-1o1-Sim

A lightweight browser-based Roblox-inspired simulation prototype with:
- 3D blocky world
- first-person WASD movement
- jumping, gravity, and simple collision
- collectible gems and a score counter
- bright sandbox-style design

## Run it locally

Because this project uses browser modules, the easiest way is to serve the folder with a local static server.

### Option 1: Python

```bash
cd roblox-1o1-sim
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: VS Code Live Server

Open the folder in VS Code and run a static file server extension like Live Server.

## Controls

- `W A S D` — move
- `Space` — jump
- `Mouse` — look around
- `Click` — lock pointer / start game

## Notes

This is a playable prototype inspired by Roblox-style sandbox gameplay, not a full Roblox clone. It is designed to be easy to run and extend.
