"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Palette } from "lucide-react";

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [main, setMain] = useState("#5a3e36");
  const [sub, setSub] = useState("#8b5e5a");

  // تحديث CSS Variables
  const updateColor = (name: string, color: string) => {
    document.documentElement.style.setProperty(`--${name}`, hexToHSL(color));
  };

  // تحويل HEX إلى HSL عشان يتماشى مع tailwind config
  const hexToHSL = (hex: string) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return `${h} ${s}% ${l}%`;
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 p-3 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition"
      >
        <Palette size={22} />
      </button>

      {open && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl p-4 z-50 flex flex-col gap-6">
          <h2 className="font-bold text-lg mb-2">🎨 Theme Colors</h2>

          {/* Main Color */}
          <div>
            <p className="text-sm font-medium mb-1">Main Color</p>
            <HexColorPicker
              color={main}
              onChange={(color) => {
                setMain(color);
                updateColor("main", color);
              }}
            />
            <input
              type="text"
              value={main}
              dir="ltr"

              onChange={(e) => {
                const val = e.target.value;
                setMain(val);
                if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(val)) {
                  updateColor("main", val);
                }
              }}
              className="mt-2 w-full border rounded px-2 py-1 text-sm"
              placeholder="#000000"
            />
          </div>

          {/* Sub Color */}
          <div>
            <p className="text-sm font-medium mb-1">Sub Color</p>
            <HexColorPicker
              color={sub}
              onChange={(color) => {
                setSub(color);
                updateColor("sub", color);
              }}
            />
            <input
              type="text"
              dir="ltr"
              value={sub}
              onChange={(e) => {
                const val = e.target.value;
                setSub(val);
                if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(val)) {
                  updateColor("sub", val);
                }
              }}
              className="mt-2 w-full border rounded px-2 py-1 text-sm "
              placeholder="#ffffff"
            />
          </div>
        </div>
      )}
    </>
  );
}
