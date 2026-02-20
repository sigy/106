# Wizard žádosti o informace (106/1999 Sb.) – Design plán

## Přehled

Webová aplikace (Astro) s 5krokovým wizardem pro vytvoření žádosti o poskytnutí informací dle zákona č. 106/1999 Sb.

## Kroky wizardu

| Krok | Název | Obsah |
|------|-------|-------|
| 1 | Vaše právo na informace | Edukace – co zákon říká, kdo musí odpovědět, lhůty, opravné prostředky |
| 2 | O vás | Typ žadatele (FO/PO) + formulář údajů + způsob doručení odpovědi |
| 3 | Komu píšete? | Výběr/zadání povinného subjektu. AI napovídá úřad podle tématu |
| 4 | Co chcete vědět? | Textarea s popisem požadavku. AI kontrola relevance + vylepšení formulace |
| 5 | Náhled a stažení | Kompletní žádost – kopírování textu + stažení PDF |

## Technická architektura

- **Framework:** Astro (SSR pro API endpoint, statický web jinak)
- **UI:** Vanilla JS/TS na klientu, žádný React/Vue
- **API route:** `/api/assist` – proxy na Claude API (klíč na serveru)
- **PDF:** jsPDF na klientu
- **Fallback:** Wizard plně funkční bez Claude API – AI prvky se gracefully degradují

## Vizuální styl

- Minimalistický, úřední, důvěryhodný
- Barvy: #FAFAFA (pozadí), #FFFFFF (karty), #1A1A1A (text), #0D6E6E (accent teal)
- Font: Inter (body), Newsreader (headings), JetBrains Mono (labels)
- Bordered cards (1px #E5E5E5), bez shadows
- Max-width obsahu: 640px centrovaný
- Progress bar nahoře (5 segmentů)

## AI integrace (Claude API)

| Akce | Endpoint | Popis |
|------|----------|-------|
| suggest-authority | POST /api/assist | Navrhne povinný subjekt podle tématu dotazu |
| check-relevance | POST /api/assist | Ověří, zda dotaz spadá pod zákon 106 |
| improve-wording | POST /api/assist | Přeformuluje žádost přesněji a úředně |

Každá AI funkce má fallback – předpřipravené tipy/nápovědy místo AI odpovědi.

## Souborová struktura

```
src/
├── layouts/Layout.astro
├── pages/
│   ├── index.astro          # Wizard
│   └── api/assist.ts        # Claude API proxy
├── scripts/
│   ├── wizard.ts            # Logika kroků, navigace, validace
│   ├── ai-assist.ts         # Volání AI endpointu
│   └── pdf-generator.ts     # jsPDF generování
└── styles/
    └── global.css           # Design tokens + styl
```

## Pencil design

Vizuální návrh všech 5 kroků je v souboru `.pen` (nový dokument v editoru).
