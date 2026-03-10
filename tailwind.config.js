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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;


// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//          background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",

//         card: "hsl(var(--card))",
//   "card-foreground": "hsl(var(--card-foreground))",

//   primary: "hsl(var(--primary))",
//   "primary-foreground": "hsl(var(--primary-foreground))",

//   secondary: "hsl(var(--secondary))",
//   "secondary-foreground": "hsl(var(--secondary-foreground))",

//   accent: "hsl(var(--accent))",
//   "accent-foreground": "hsl(var(--accent-foreground))",

//   muted: "hsl(var(--muted))",
//   "muted-foreground": "hsl(var(--muted-foreground))",

//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//       },

//       fontFamily: {
//         heading: ["Montserrat", "sans-serif"],
//         body: ["Open Sans", "sans-serif"],
//       },

//       backgroundImage: {
//         hero: "hsl(var(--hero-gradient))",
//         section: "hsl(var(--section-gradient))",
//         cta: "hsl(var(--cta-gradient))",
//       },

//       boxShadow: {
//         card: "hsl(var(--shadow-card))",
//         "card-hover": "hsl(var(--shadow-card-hover))",
//         cta: "hsl(var(--shadow-cta))",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;