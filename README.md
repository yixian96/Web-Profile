# Au Yi Xian — Personal Portfolio

Personal cybersecurity portfolio for **Au Yi Xian**, Senior Penetration Tester. Built with a hacker/terminal aesthetic featuring a BIOS-style boot sequence, matrix rain background, and command-palette navigation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | TailwindCSS 3 + custom CSS |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Font | JetBrains Mono / Orbitron / Inter |
| Runtime | React 19 |

---

## Features

- **Boot sequence** — BIOS-style terminal animation with cert verification before the portfolio loads
- **Matrix rain** — Canvas-based falling character background (desktop only, 20fps capped)
- **Command palette** — `Ctrl+K` fuzzy-search navigation across all sections
- **Typewriter effects** — Chained typewriter animations on the hero section
- **Cert hover verification** — Hover any certification card to see a live terminal verify overlay
- **Glassmorphism UI** — Backdrop-blur glass panels with neon border accents
- **CRT aesthetic** — Scanline overlay, vignette, and glitch effects on headings
- **Responsive** — Mobile-first; heavy effects disabled on small screens
- **Reduced-motion** — All animations fully disabled when `prefers-reduced-motion` is set
- **Security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy configured in `next.config.js`
- **Zero vulnerabilities** — `npm audit` clean; postcss patched via `overrides`

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Name, role, typewriter expertise list, profile JSON panel |
| 2 | **About** | Bio, stats (Years / Certs / Domains / Targets Pwned), expertise highlights |
| 3 | **Certifications** | 9 certs across 4 categories — hover each card to verify |
| 4 | **Security Expertise** | 9 capability cards covering all attack surfaces |
| 5 | **Methodology** | 9-step engagement lifecycle timeline with framework badges |
| 6 | **Projects** | 5 classified case files with expandable findings |
| 7 | **Tools** | Security toolbox grouped by discipline |
| 8 | **Contact** | LinkedIn, GitHub, and email secure channels |

### Certifications covered

`OSWE` · `OSCP+` · `OSCP` · `CREST CRT` · `CREST CPSA` · `CKBPro` · `C-AI/MLPen` · `CEH` · `Workday Extend`

### Security expertise areas

Web VAPT · Mobile VAPT · Cloud VAPT · Source Code Review · Thick Client · Kiosk / Lockdown Breakout · Reverse Engineering · WiFi Penetration Testing · AI/ML Security Testing

---

## Project Structure

```
├── app/
│   ├── globals.css          # Custom cyberpunk CSS (scanlines, glitch, glass, neon borders)
│   ├── layout.tsx           # Root layout, fonts, metadata, security headers
│   └── page.tsx             # Main page — boot state, command palette, section composition
│
├── components/
│   ├── BootSequence.tsx     # BIOS boot animation state machine
│   ├── CommandPalette.tsx   # Ctrl+K fuzzy-search navigation
│   ├── MatrixRain.tsx       # Canvas matrix rain (lazy loaded)
│   ├── Navbar.tsx           # Sticky glass nav with IntersectionObserver active state
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── SecurityExpertise.tsx
│   │   ├── Methodology.tsx
│   │   ├── Projects.tsx
│   │   ├── Tools.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── SectionHeader.tsx
│       ├── TerminalWindow.tsx
│       └── NeonCard.tsx
│
├── next.config.js           # Security headers + poweredByHeader: false
├── tailwind.config.ts       # Custom color palette and animation keyframes
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
git clone https://github.com/yixian96/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
# → http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `neon-green` | `#00ff41` | Primary accent, matrix green |
| `cyber-blue` | `#00d4ff` | Secondary accent |
| `warning-red` | `#ff0040` | Critical / danger |
| `accent-purple` | `#bf00ff` | Specialized categories |
| `accent-yellow` | `#ffd700` | Executing / pending states |
| `terminal-bg` | `#080c08` | Page background |

---

## Security

Security headers are set globally in `next.config.js`:

- `Content-Security-Policy` — restricts script, style, font, and frame sources
- `Strict-Transport-Security` — HSTS with 1-year max-age
- `X-Frame-Options: DENY` — clickjacking protection
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — disables camera, microphone, geolocation

---

## License

MIT — feel free to fork and adapt for your own portfolio.

---

*Built with Next.js · TypeScript · TailwindCSS · Framer Motion*
