// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Энд 'sans' болон 'serif' гэж зааж өгснөөр чиний ашигласан классууд ажиллана
        sans: ["var(--font-lexend)"],
        serif: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
export default config;