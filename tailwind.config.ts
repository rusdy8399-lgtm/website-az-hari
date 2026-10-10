import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       "#00609C",  // Labschool signature blue
          blueDark:   "#004875",  // Deep rich blue
          blueDarker: "#002F4D",  // Deepest blue
          blueLight:  "#0284C7",  // Sky bright blue
          blueSubtle: "#F0F7FD",  // Very soft blue tint
        },
        emerald: {
          deep:    "#00609C",  // Re-mapped to Labschool blue for seamless compatibility
          dark:    "#004875",
          darker:  "#002F4D",
          light:   "#0284C7",
          subtle:  "#F0F7FD",
        },
        gold: {
          DEFAULT: "#F5A623",  // Vivid bright gold — like reference yellow
          warm:    "#FFBA3A",  // Lighter warm gold
          dark:    "#D4891A",  // Darker gold for hover states
          light:   "#FFF8E8",  // Very light gold for backgrounds
        },
        navy: {
          DEFAULT: "#0F172A",  // Slate navy for text
          light:   "#1E293B",  // Lighter slate
          muted:   "#475569",  // Muted gray-navy for secondary text
        },
        background: {
          DEFAULT: "#FFFFFF",
          offwhite: "#F8F9FA",
          light:    "#F0F4F8",
        },
      },
      fontFamily: {
        // Oswald: heavy condensed institutional — matches reference headlines exactly
        heading: ["var(--font-heading)", "Oswald", "Impact", "sans-serif"],
        // Inter: clean readable body text
        body:    ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Larger hero sizes to match the bold institutional feel
        "hero-sm":  ["2.5rem",  { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "hero-md":  ["3.5rem",  { lineHeight: "1.0",  letterSpacing: "-0.01em" }],
        "hero-lg":  ["4.5rem",  { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "hero-xl":  ["5.5rem",  { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        subtle:      "0 2px 8px rgba(0,0,0,0.06)",
        card:        "0 4px 20px rgba(0,0,0,0.08)",
        cardHover:   "0 12px 40px rgba(0,0,0,0.14)",
        emerald:     "0 4px 20px rgba(11,110,79,0.25)",
        gold:        "0 4px 20px rgba(245,166,35,0.35)",
        goldGlow:    "0 8px 32px rgba(245,166,35,0.40)",
      },
      backgroundImage: {
        "emerald-gradient":  "linear-gradient(135deg, #0B6E4F 0%, #064E3B 100%)",
        "emerald-vivid":     "linear-gradient(135deg, #0B6E4F 0%, #0F8F6A 100%)",
        "navy-gradient":     "linear-gradient(135deg, #1A1A2E 0%, #2D3561 100%)",
        "hero-overlay":      "linear-gradient(90deg, rgba(6,78,59,0.92) 0%, rgba(6,78,59,0.75) 50%, rgba(6,78,59,0.30) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
