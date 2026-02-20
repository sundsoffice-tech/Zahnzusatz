# 🦷 ZahnSchutzPlus – Lead Generation Landing Page

Hochkonvertierende Landing Page für Zahnzusatzversicherung-Leads. Optimiert für maximale Conversion Rate mit bewährten Lead-Gen-Strategien.

## 🎯 Features

- **Conversion-optimiertes Design** – Basierend auf Best Practices von GEICO, Lemonade und deutschen Lead-Gen-Profis
- **Minimales Lead-Formular** – Nur Name + Telefonnummer (weniger Felder = mehr Leads)
- **Social Proof** – Kundenbewertungen, Nutzerzahlen, Testsieger-Badge
- **Pain-Point-Sektion** – Zeigt die Kostenlücke bei Zahnbehandlungen
- **3-Schritte-Prozess** – Macht den Ablauf transparent und einfach
- **FAQ-Akkordeon** – Beantwortet Einwände direkt auf der Seite
- **Floating CTA (Mobile)** – Bleibt immer sichtbar beim Scrollen
- **Live Social Proof Notifications** – „Maria aus München hat gerade angefragt"
- **Mobile-First Design** – Perfekt auf allen Geräten
- **Meta Pixel & Google Ads ready** – Conversion-Tracking vorbereitet
- **DSGVO-konform** – SSL-Hinweise, Datenschutz-Links

## 🚀 Quick Start

### Option 1: Einfach öffnen
```bash
# Einfach index.html im Browser öffnen
open index.html
```

### Option 2: Local Server
```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Option 3: GitHub Pages
1. Repo auf GitHub pushen
2. Settings → Pages → Branch: main → Save
3. Fertig! Seite ist live unter `https://username.github.io/zahnzusatz-leads/`

## 📋 Setup-Checkliste

### 1. Lead-Empfang einrichten
In `script.js` einen der vorbereiteten Endpoints aktivieren:

```javascript
// Option A: Make.com Webhook
await fetch('https://hook.eu1.make.com/DEIN_WEBHOOK_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, telefon, source: 'landing-page' })
});

// Option B: Google Sheets
// Option C: Formspree
// Option D: Eigener Server
```

### 2. Tracking einrichten
In `index.html` den Meta Pixel und/oder Google Ads Tag aktivieren:
```html
<!-- Meta Pixel -->
<script>
  fbq('init', 'DEINE_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 3. Rechtliche Seiten
- `impressum.html` – Mit echten Firmendaten füllen
- `datenschutz.html` – DSGVO-konforme Datenschutzerklärung
- `agb.html` – Allgemeine Geschäftsbedingungen

### 4. Anpassen
- **Preis**: „ab 3,28€" in `index.html` anpassen
- **Telefonnummer**: In Navbar und Footer aktualisieren
- **Farben**: CSS-Variablen in `styles.css` (`:root`)
- **Testimonials**: Echte Kundenstimmen einfügen
- **Firmendaten**: Logo, Name, Kontaktdaten

## 📁 Projektstruktur

```
zahnzusatz-leads/
├── index.html        # Haupt-Landing Page
├── styles.css        # Alle Styles
├── script.js         # Interaktionen & Form-Handling
├── impressum.html    # Impressum (Platzhalter)
├── datenschutz.html  # Datenschutz (Platzhalter)
├── agb.html          # AGB (Platzhalter)
└── README.md         # Diese Datei
```

## 🎨 Design-Entscheidungen

| Element | Strategie |
|---------|-----------|
| **Formular oben rechts** | Sofort sichtbar, keine Scroll-Notwendigkeit |
| **Nur 2 Felder** | Maximale Conversion durch minimale Friction |
| **Orange CTA** | Kontrast zum blauen Design = höhere Klickrate |
| **Kostenlücken-Karten** | Pain-Point-Marketing: Zeigt was passiert OHNE Versicherung |
| **3-Schritte-Prozess** | Reduziert Unsicherheit, macht Ablauf transparent |
| **Social Proof Popups** | FOMO-Effekt: „Andere machen das auch gerade" |
| **Floating Mobile CTA** | Konversion auch nach langem Scrollen |

## 📊 Empfohlene Traffic-Quellen

1. **Meta/Facebook Ads** – Zielgruppe: 25-55, gesundheitsbewusst
2. **Google Ads** – Keywords: „Zahnzusatzversicherung", „Zahnersatz Kosten"
3. **Instagram Stories** – Vorher/Nachher Kostenvergleiche
4. **TikTok** – Kurze „Wusstest du?"-Videos über Zahnarztkosten

## 📈 Conversion-Optimierung

- **A/B-Test Headline**: „Zahnarztkosten?" vs „Sparen Sie bis zu 3.050€"
- **A/B-Test CTA-Text**: „Kostenlos beraten" vs „Angebot sichern"
- **Heatmap-Tracking**: Hotjar oder Microsoft Clarity einbauen
- **Page Speed**: Keine externen Libraries, pure HTML/CSS/JS

## 🔧 Tech-Stack

- **HTML5** – Semantisch, SEO-optimiert
- **CSS3** – Custom Properties, Grid, Animations
- **Vanilla JS** – Kein Framework nötig, maximale Performance
- **Google Fonts** – Plus Jakarta Sans + Playfair Display

Keine Build-Tools, kein npm, kein Framework – einfach deployen und fertig.

## 📄 Lizenz

Privates Projekt. Alle Rechte vorbehalten.
