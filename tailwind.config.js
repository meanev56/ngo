/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        border: "var(--border)",
        "dark-scaledark400": "var(--dark-scaledark400)",
        "green-tertiary": "var(--green-tertiary)",
        "off-white": "var(--off-white)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        yellow: "var(--yellow)",
        "yellow-light": "var(--yellow-light)",
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        h6: "var(--h6-font-family)",
        paragraph: "var(--paragraph-font-family)",
        "paragraph-small": "var(--paragraph-small-font-family)",
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/fill-1.svg')",
        'header-texture': "url('/public/images/bg-image.png')",
        'header-face' : "url('/public/images/bg.png')",
        'header-object' : "url('/public/images/unsplash-1-aa2fadydc.png')",
        'header-value ' : "url('/public/images/unsplash-iigovkrty8g.png')",
        'header-page' : "url('/public/images/unsplash-cveoh-jjmee-1.png')",
        'header-start' : "url('/public/images/unsplash-cveoh-jjmee.png')",
      },
    },
  },
  plugins: [],
};
