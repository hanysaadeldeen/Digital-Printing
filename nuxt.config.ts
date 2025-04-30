// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar' 
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
        },
      ],
        title: "Printing.Do",
        meta: [
        {
          name: "description",
          content:
            "طباعة مبتكرة... بصمة تحكي عنك.",
        },
      ],
    },
  
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
