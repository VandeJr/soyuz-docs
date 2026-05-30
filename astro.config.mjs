// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://dunno.dev.br",
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [
    starlight({
      title: "Soyuz",
      description:
        "Documentação oficial da linguagem de programação Soyuz (.sy)",
      defaultLocale: "pt-br",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/VandeJr/soyuz-docs",
        },
      ],
      sidebar: [
        {
          label: "Começando",
          items: [{ label: "Introdução", link: "/" }],
        },
        {
          label: "A Linguagem",
          items: [{ autogenerate: { directory: "features" } }],
        },
        {
          label: "Arquitetura",
          items: [{ autogenerate: { directory: "internals" } }],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
