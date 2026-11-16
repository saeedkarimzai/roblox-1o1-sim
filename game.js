* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(#7ec8ff, #d9f2ff 35%, #f2f7ff 100%);
  color: white;
}

canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}

#hud {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.top-bar {
  position: absolute;
  top: 18px;
  left: 18px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.chip {
  background: rgba(22, 32, 48, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 14px;
  letter-spacing: 0.04em;
  font-weight: 700;
}

#message {
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  background: rgba(10, 15, 20, 0.48);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 13px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #eff7ff;
}

#crosshair {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
}

#crosshair::before,
#crosshair::after,
#crosshair span::before,
#crosshair span::after {
  content: "";
  position: absolute;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 0 8px rgba(255,255,255,0.8);
}

#crosshair::before {
  width: 2px;
  height: 24px;
}

#crosshair::after {
  width: 24px;
  height: 2px;
}

#crosshair span::before {
  width: 2px;
  height: 10px;
}

#crosshair span::after {
  width: 10px;
  height: 2px;
}
