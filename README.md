# eTraktor.sk – Next.js + TinaCMS

## 🚀 Nasadenie (krok za krokom)

### Krok 1: Nahraj na GitHub

```bash
cd ~/etraktor-next
git init
git add .
git commit -m "Initial Next.js + TinaCMS setup"
git branch -M main
git remote add origin https://github.com/micqej/etraktor-web-next.git
git push -u origin main
```

### Krok 2: Registrácia TinaCMS (zadarmo)

1. Choď na **app.tina.io** → Sign up (zadarmo, GitHub login)
2. Klikni **New Project** → vyber repo `etraktor-web-next`
3. TinaCMS ti dá:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`

### Krok 3: Nasadenie na Vercel

1. Choď na **vercel.com** → New Project → import `etraktor-web-next`
2. V **Environment Variables** pridaj:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = (z TinaCMS)
   - `TINA_TOKEN` = (z TinaCMS)
   - `GITHUB_BRANCH` = `main`
3. Deploy!

### Krok 4: Prepoj TinaCMS s Vercel URL

V TinaCMS dashboarde → Settings → Site URL nastav na tvoju Vercel URL

---

## ✏️ Ako klient edituje obsah

1. Choď na `https://tvoja-domena.sk/admin`
2. Prihlás sa cez TinaCMS
3. V ľavom menu vyber stránku (Domovská, eTRAKTOR, atď.)
4. Edituj texty, obrázky, dokumenty
5. Klikni **Save** → zmeny sa automaticky deployujú

---

## 📁 Štruktúra projektu

```
etraktor-next/
├── app/
│   ├── layout.tsx          ← Layout s Nav a Footer
│   ├── page.tsx            ← Domovská stránka
│   ├── palety/page.tsx     ← Transportné palety
│   ├── zariadenia/page.tsx ← Jednoúčelové zariadenia
│   ├── vyroba/page.tsx     ← Výroba
│   ├── etraktor/page.tsx   ← eTRAKTOR (ET 2000 + ET 3000)
│   └── kontakt/page.tsx    ← Kontakt
├── components/
│   ├── Nav.tsx             ← Navigácia
│   └── Footer.tsx          ← Footer
├── content/pages/
│   ├── domov.json          ← Obsah domovskej stránky
│   └── etraktor.json       ← Obsah eTRAKTOR stránky
├── tina/
│   └── config.ts           ← TinaCMS konfigurácia
└── app/globals.css         ← Všetky štýly
```

---

## 🔗 URL štruktúra (SEO friendly)

- `/` → Domov
- `/palety` → Transportné palety
- `/zariadenia` → Jednoúčelové zariadenia
- `/vyroba` → Výroba
- `/etraktor` → eTRAKTOR (ET 2000 + ET 3000)
- `/kontakt` → Kontakt
- `/admin` → TinaCMS editor (len pre teba a klienta)
