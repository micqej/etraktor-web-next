import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // DOMOV
      {
        name: "domov",
        label: "Domovská stránka",
        path: "content/pages",
        match: { include: "domov" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { name: "hero_title", label: "Hero Nadpis", type: "string" },
          { name: "hero_subtitle", label: "Hero Podnadpis", type: "string" },
          { name: "hero_desc", label: "Hero Popis", type: "string", ui: { component: "textarea" } },
        ],
      },
      // PALETY
      {
        name: "palety",
        label: "Transportné palety",
        path: "content/pages",
        match: { include: "palety" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { name: "title", label: "Nadpis stránky", type: "string" },
          { name: "description", label: "Popis", type: "string", ui: { component: "textarea" } },
          {
            name: "cards",
            label: "Produkty",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Názov", type: "string" },
              { name: "description", label: "Popis", type: "string", ui: { component: "textarea" } },
              { name: "image", label: "Obrázok", type: "image" },
            ],
          },
        ],
      },
      // ETRAKTOR
      {
        name: "etraktor",
        label: "eTRAKTOR",
        path: "content/pages",
        match: { include: "etraktor" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { name: "title", label: "Nadpis stránky", type: "string" },
          { name: "description", label: "Popis", type: "string", ui: { component: "textarea" } },
          {
            name: "dokumenty",
            label: "Dokumenty na stiahnutie",
            type: "object",
            list: true,
            fields: [
              { name: "nazov", label: "Názov dokumentu", type: "string" },
              { name: "popis", label: "Popis", type: "string" },
              { name: "subor", label: "Súbor (PDF)", type: "image" },
            ],
          },
          {
            name: "parametre_et2000",
            label: "Parametre ET 2000",
            type: "object",
            list: true,
            fields: [
              { name: "parameter", label: "Parameter", type: "string" },
              { name: "hodnota", label: "Hodnota", type: "string" },
            ],
          },
          {
            name: "parametre_et3000",
            label: "Parametre ET 3000",
            type: "object",
            list: true,
            fields: [
              { name: "parameter", label: "Parameter", type: "string" },
              { name: "hodnota", label: "Hodnota", type: "string" },
            ],
          },
        ],
      },
      // KONTAKT
      {
        name: "kontakt",
        label: "Kontakt",
        path: "content/pages",
        match: { include: "kontakt" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { name: "email", label: "E-mail", type: "string" },
          { name: "telefon", label: "Telefón", type: "string" },
          { name: "adresa", label: "Adresa", type: "string" },
          { name: "pracovna_doba", label: "Pracovná doba", type: "string" },
        ],
      },
    ],
  },
});
