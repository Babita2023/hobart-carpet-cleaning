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
     container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },

      colors: {

  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",

  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",

  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },

  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },

  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },

  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },

  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },

  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },

  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
},
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      


      //   keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      //   "fade-in-up": {
      //     from: { opacity: "0", transform: "translateY(20px)" },
      //     to: { opacity: "1", transform: "translateY(0)" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      //   "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      // },
     

      // backgroundImage: {
      //   hero: "var(--hero-gradient)",
      //   section: "hsl(var(--section-gradient))",
      //   cta: "hsl(var(--cta-gradient))",
      // },

      // boxShadow: {
      //   card: "var(--shadow-card)",
      //   "card-hover": "var(--shadow-card-hover)",
      //   cta: "var(--shadow-cta)",
      // },
    },
  },
  plugins: [],
};

export default config;