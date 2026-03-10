// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         card: "var(--card)",
//         primary: "var(--primary)",
//         secondary: "var(--secondary)",
//         accent: "var(--accent)",
//       },
//       fontFamily: {
//         heading: ["Montserrat", "sans-serif"],
//         body: ["Open Sans", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
  "card-foreground": "var(--card-foreground)",

  primary: "var(--primary)",
  "primary-foreground": "var(--primary-foreground)",

  secondary: "var(--secondary)",
  "secondary-foreground": "var(--secondary-foreground)",

  accent: "var(--accent)",
  "accent-foreground": "var(--accent-foreground)",

  muted: "var(--muted))",
  "muted-foreground": "var(--muted-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },

      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },

      backgroundImage: {
        hero: "hsl(var(--hero-gradient))",
        section: "hsl(var(--section-gradient))",
        cta: "hsl(var(--cta-gradient))",
      },

      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        cta: "var(--shadow-cta)",
      },
    },
  },
  plugins: [],
};

export default config;