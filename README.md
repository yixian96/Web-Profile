# Au Yi Xian — Cybersecurity Portfolio

> Personal portfolio for **Au Yi Xian**, Senior Penetration Tester.  
> Hacker-themed terminal aesthetic with BIOS boot sequence, matrix rain, and Ctrl+K command palette.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0071?style=flat-square&logo=framer&logoColor=white)

---

## Overview

A fully custom, single-page portfolio built from scratch with a cyberpunk / hacker terminal aesthetic. No templates. Designed to reflect the identity of an offensive security professional — from the BIOS boot animation on load, to classified case file cards, to a live command palette for navigation.

---

## Features

| Feature | Description |
|---|---|
| **Boot Sequence** | BIOS-style terminal animation verifying certifications before the portfolio loads |
| **Matrix Rain** | Canvas-based falling character background, desktop only, capped at 20fps |
| **Command Palette** | `Ctrl+K` opens a fuzzy-search terminal navigator across all sections |
| **Typewriter Effect** | Chained typewriter animations on hero section role and expertise list |
| **Cert Hover Verify** | Hover any certification card to reveal a terminal verification overlay |
| **CRT Aesthetic** | Scanline overlay, vignette, glitch effect on headings |
| **Glassmorphism** | Backdrop-blur glass panels with neon accent borders |
| **Responsive** | Mobile-first; matrix rain, scanlines, and glitch disabled on small screens |
| **Reduced Motion** | All animations fully disabled when `prefers-reduced-motion` is enabled |
| **Security Headers** | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy |
| **0 Vulnerabilities** | `npm audit` clean — `postcss` patched via package overrides |

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Name, typewriter role/expertise, profile JSON terminal panel |
| 2 | **About** | Bio, stats (Years / Certs / Domains / Targets Pwned), expertise highlights |
| 3 | **Certifications** | 9 certs across 4 categories, hover each card to authenticate |
| 4 | **Security Expertise** | 9 capability cards covering every attack surface |
| 5 | **Methodology** | 9-step engagement lifecycle timeline with framework badges |
| 6 | **Case Files** | 5 classified engagement case files with expandable findings |
| 7 | **Tools** | Security toolbox grouped by discipline |
| 8 | **Contact** | LinkedIn, GitHub, and email secure channel cards |

### Certifications

`OSWE` · `OSCP+` · `OSCP` · `CREST CRT` · `CREST CPSA` · `CKBPro` · `C-AI/MLPen` · `CEH` · `Workday Extend`

### Security Expertise Areas

`Web VAPT` · `Mobile VAPT` · `Cloud VAPT` · `Source Code Review` · `Thick Client` · `Kiosk / Lockdown Breakout` · `Reverse Engineering` · `WiFi Penetration Testing` · `AI/ML Security Testing`

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router, dynamic imports) |
| Language | TypeScript 5 (strict mode) |
| Styling | TailwindCSS 3 + custom CSS properties |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | JetBrains Mono · Orbitron · Inter (via `next/font/google`) |
| Runtime | React 19 |

---

## Project Structure

```
├── app/
│   ├── globals.css           # Scanlines, glitch, glass panels, neon borders, CRT vignette
│   ├── layout.tsx            # Root layout, Google Fonts, metadata, viewport
│   └── page.tsx              # Boot state machine, Ctrl+K handler, section composition
│
├── components/
│   ├── BootSequence.tsx      # BIOS boot animation (booting → waiting → exiting)
│   ├── CommandPalette.tsx    # Ctrl+K fuzzy-search command palette
│   ├── MatrixRain.tsx        # Canvas matrix rain (lazy-loaded, desktop only)
│   ├── Navbar.tsx            # Sticky glass nav with IntersectionObserver active section
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Typewriter hook, expertise badges, profile JSON panel
│   │   ├── About.tsx         # Bio terminal window, stats grid, highlight cards
│   │   ├── Certifications.tsx # Cert cards with hover terminal verification overlay
│   │   ├── SecurityExpertise.tsx # 9-capability card grid
│   │   ├── Methodology.tsx   # Timeline + frameworks sidebar
│   │   ├── Projects.tsx      # Expandable classified case file cards
│   │   ├── Tools.tsx         # Tool groups (lazy-loaded)
│   │   └── Contact.tsx       # Channel cards + footer
│   │
│   └── ui/
│       ├── SectionHeader.tsx # Reusable section header with terminal command label
│       ├── TerminalWindow.tsx # Terminal chrome wrapper component
│       └── NeonCard.tsx      # Generic neon-bordered glass card
│
├── next.config.js            # Security headers, poweredByHeader: false
├── tailwind.config.ts        # Custom color tokens and animation keyframes
├── postcss.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
git clone https://github.com/yixian96/Web-Profile.git
cd Web-Profile
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Design System

### Color Palette

| Token | Hex | Role |
|---|---|---|
| `neon-green` | `#00ff41` | Primary accent, matrix green |
| `cyber-blue` | `#00d4ff` | Secondary accent |
| `warning-red` | `#ff0040` | Critical severity / danger |
| `accent-purple` | `#bf00ff` | Specialized categories |
| `accent-yellow` | `#ffd700` | Executing / in-progress states |
| `terminal-bg` | `#080c08` | Page background |

### Custom CSS Classes

| Class | Purpose |
|---|---|
| `.glass-panel` | Glassmorphism panel with backdrop blur |
| `.terminal-window` | Terminal chrome wrapper with title bar |
| `.neon-border-*` | Colored neon border + glow (green/blue/red/purple/yellow) |
| `.glitch` | CSS clip-path glitch animation on headings |
| `.scanline-overlay` | Full-screen CRT scanline effect |
| `.crt-vignette` | Radial dark vignette overlay |
| `.badge-*` | Colored pill badges (green/blue/red/purple/yellow) |
| `.btn-neon-green` / `.btn-neon-blue` | Neon glow CTA buttons |

---

## Security Headers

Configured in `next.config.js` and applied to every route:

```
Content-Security-Policy    — restricts scripts, styles, fonts, and frames
Strict-Transport-Security  — HSTS, max-age 1 year, includeSubDomains
X-Frame-Options            — DENY (clickjacking protection)
X-Content-Type-Options     — nosniff
Referrer-Policy            — strict-origin-when-cross-origin
Permissions-Policy         — camera, microphone, geolocation disabled
```

---

## Links

- **GitHub:** [github.com/yixian96](https://github.com/yixian96)
- **LinkedIn:** [linkedin.com/in/au-yi-xian-5a871b121](https://www.linkedin.com/in/au-yi-xian-5a871b121)

---

## License

MIT — feel free to fork and adapt for your own portfolio.
