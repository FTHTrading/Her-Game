<div align="center">

# 🏆 HER GAME
### Precision Athlete Pendant Collection
#### 7th Grade Marketing Project — by **Kaci Burns**

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)
![School Project](https://img.shields.io/badge/Grade-7th-gold?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

> **HER GAME** is a fictional sports pendant collection for female athletes,  
> built as a full-stack marketing project covering all 7 Functions of Marketing.

</div>

---

## 📋 Table of Contents

| # | Section | Description |
|---|---------|-------------|
| 1 | [Project Overview](#-project-overview) | What HER GAME is and why it was built |
| 2 | [Live Pages](#-live-pages) | All website routes with descriptions |
| 3 | [Presentation Slides](#-presentation-slides) | 11-slide deck summary |
| 4 | [Tech Stack](#-tech-stack) | Frameworks, tools, and libraries |
| 5 | [Project Structure](#-project-structure) | Folder and file layout |
| 6 | [Quick Start](#-quick-start) | How to run locally |
| 7 | [Teacher Checklist](#-teacher-checklist) | All requirements verified |
| 8 | [Image Gallery](#-image-gallery) | Photos used in the project |
| 9 | [Disclaimer](#-disclaimer) | School project notice |

---

## 🎯 Project Overview

**HER GAME** is a 7th-grade school marketing project that demonstrates all **7 Functions of Marketing** through a fictional sports pendant collection. The project was built as a real-world example website — not just a poster — using modern web development tools.

### The Product
A sports necklace pendant collection for female athletes. Each pendant shows a female athlete in perfect sports form. 16 sports are represented, including archery, soccer, basketball, volleyball, gymnastics, and more.

### The 7 Functions Covered

| # | Function | HER GAME Application |
|---|----------|----------------------|
| 1 | **Product Management** | Physical pendant goods, 16 sports, multiple finishes |
| 2 | **Market Planning** | Girls 10–18, female athletes, sports parents, coaches |
| 3 | **Selling** | Online store, retail sports shops, team orders |
| 4 | **Distribution** | Manufacturer → Warehouse → Website → Ships to customer → Stores |
| 5 | **Marketing Information Management** | Surveys, web analytics, reviews, sport popularity data |
| 6 | **Pricing** | Basic $24.99 / Premium $49.99 / Bundles $89.99 / Team discounts |
| 7 | **Promotion** | Social media, posters, short video commercial, athlete ambassadors |

---

## 🌐 Live Pages

| Route | Page | Description |
|-------|------|-------------|
| [`/`](/) | **Home** | Hero landing page with HER GAME brand intro |
| [`/collection`](/collection) | **Collection** | Full 16-pendant sport catalog with photos |
| [`/marketing`](/marketing) | **7 Functions** | All 7 marketing functions explained with cards |
| [`/business-plan`](/business-plan) | **Business Plan** | Pricing, market, strategy overview |
| [`/ai-system`](/ai-system) | **AI System** | How the AI design system works |
| [`/presentation`](/presentation) | **Presentation** | Full 11-slide web presentation view |
| [`/presentation/pdf`](/presentation/pdf) | **PDF View** | Print-friendly version of all slides |
| [`/commercial`](/commercial) | **Commercial** | Demo broadcast ad + print ad page |
| [`/api/presentation/pptx`](/api/presentation/pptx) | **Download PPTX** | Downloads the full PowerPoint file |

---

## 📊 Presentation Slides

The presentation follows the teacher's rubric exactly — 11 slides, max 5 bullets per slide, max 5 words per bullet, real images on every slide.

| Slide | Title | Key Content |
|-------|-------|-------------|
| 1 | **HER GAME** | Title, product, by Kaci Burns |
| 2 | **7 Functions Overview** | All 7 functions in 5 combined bullets |
| 3 | **Product Management** | Product type, features, improvements |
| 4 | **Market Planning** | Target market demographics |
| 5 | **Selling** | Sales channels and methods |
| 6 | **Distribution** | 5-stop channel chain (manufacturer → store) |
| 7 | **Marketing Information Management** | Data collection methods |
| 8 | **Pricing** | 3 price tiers + team discounts |
| 9 | **Promotion** | Ads, commercial, print ad with demo link |
| 10 | **References** | 5 project sources |
| 11 | **Closing** | Form. Focus. Force. — Thank you |

**Download:** [`HER-GAME-Presentation-FINAL-CORRECTED.pptx`](./HER-GAME-Presentation-FINAL-CORRECTED.pptx)

---

## 🛠 Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | [Next.js](https://nextjs.org) | 16.2.6 | Full-stack React framework |
| **UI Library** | [React](https://react.dev) | 18 | Component rendering |
| **Language** | [TypeScript](https://typescriptlang.org) | 5 | Type-safe JavaScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 3.3 | Utility-first CSS |
| **Fonts** | [Barlow Condensed + Inter](https://fonts.google.com) | — | Display + body fonts |
| **PPTX Export** | [pptxgenjs](https://gitbookio.github.io/pptxgenjs/) | 4.0 | Server-side PowerPoint generation |
| **Color Palette** | Gold `#C9A84C` · Gunmetal `#2C3539` · Silver `#C0C0C0` | — | Brand colors |

---

## 📁 Project Structure

```
her-game-marketing-project/
│
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout + fonts
│   ├── globals.css               # Global styles
│   ├── collection/page.tsx       # Pendant catalog
│   ├── marketing/page.tsx        # 7 Functions page
│   ├── business-plan/page.tsx    # Business plan page
│   ├── ai-system/page.tsx        # AI system page
│   ├── commercial/page.tsx       # Demo commercial page
│   ├── presentation/
│   │   ├── page.tsx              # Web slide presentation
│   │   └── pdf/page.tsx          # Print-friendly PDF view
│   └── api/presentation/
│       └── pptx/route.ts         # PowerPoint download API
│
├── components/                   # Shared React components
│   ├── Navbar.tsx                # Site navigation
│   ├── Hero.tsx                  # Landing hero section
│   ├── PendantCard.tsx           # Pendant catalog card
│   ├── FunctionCard.tsx          # Marketing function card
│   └── Section.tsx               # Generic section wrapper
│
├── data/                         # Shared data / content
│   ├── pendants.ts               # 16 pendant definitions
│   ├── marketingFunctions.ts     # 7 marketing functions data
│   ├── slideContent.ts           # 11 presentation slides (single source of truth)
│   └── ragKnowledgeBase.ts       # AI knowledge base
│
├── public/images/                # Product photography
│   ├── her-game-1.png            # Brand overview
│   ├── her-game-2.png            # Pendant collection
│   ├── her-game-3.png            # Selling/retail
│   ├── her-game-5.png            # Distribution
│   ├── her-game-7.png            # Athlete photo
│   ├── her-game-8.png            # Brand poster (title/closing)
│   ├── her-game-9.png            # Target market athletes
│   ├── her-game-10.png           # Pricing display
│   ├── her-game-11.png           # Promotion/social
│   ├── her-game-13.png           # Archery sport
│   ├── her-game-14.png           # Mountain biking sport
│   ├── her-game-15.png           # Lacrosse sport
│   └── her-game-chatgpt.png      # AI/information management
│
├── scripts/
│   └── generate-pptx.js          # Standalone PPTX generator
│
├── docs/
│   ├── TEACHER_REQUIREMENTS_CHECKLIST_FINAL.md   # All requirements: PASS
│   ├── TEACHER_REQUIREMENTS_CHECKLIST.md
│   ├── PRESENTATION_OUTLINE.md
│   └── PARENT_REVIEW_CHECKLIST.md
│
├── HER-GAME-Presentation-FINAL-CORRECTED.pptx   # Final PowerPoint
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js 18+](https://nodejs.org) installed

### 1 — Install dependencies
```bash
cd her-game-marketing-project
npm install
```

### 2 — Run development server
```bash
npm run dev
```

### 3 — Open in browser
```
http://localhost:3000
```

### 4 — Download PowerPoint
```
http://localhost:3000/api/presentation/pptx
```

### 5 — Generate PPTX directly (no server needed)
```bash
node scripts/generate-pptx.js
# Saves: HER-GAME-Presentation-FINAL-CORRECTED.pptx
```

### Build for production
```bash
npm run build
npm start
```

---

## ✅ Teacher Checklist

All requirements from the **7 Functions of Marketing Project Sheet** verified:

| Requirement | Result |
|-------------|--------|
| 11 slides total | ✅ PASS |
| Slide 1 — title, product, by name | ✅ PASS |
| Slide 2 — all 7 functions listed | ✅ PASS |
| Max 5 bullets per slide | ✅ PASS |
| Max 5 words per bullet | ✅ PASS |
| Product Management slide | ✅ PASS |
| Market Planning slide | ✅ PASS |
| Selling strategies slide | ✅ PASS |
| Distribution channels (min 2 stops) | ✅ PASS — 5 stops shown |
| Marketing Information Management slide | ✅ PASS |
| Pricing slide | ✅ PASS |
| Promotion slide | ✅ PASS |
| Broadcast ad / commercial link | ✅ PASS — `/commercial` |
| Print ad example | ✅ PASS — pendant poster |
| Ad types specified (inform/persuade/remind) | ✅ PASS |
| References slide | ✅ PASS |
| Closing slide | ✅ PASS |
| Real images on every slide | ✅ PASS |
| PG rated content | ✅ PASS |
| Easy to read | ✅ PASS |

**Overall: 20/20 requirements passed.**

Full checklist: [`docs/TEACHER_REQUIREMENTS_CHECKLIST_FINAL.md`](./docs/TEACHER_REQUIREMENTS_CHECKLIST_FINAL.md)

---

## 🖼 Image Gallery

| File | Used On | Description |
|------|---------|-------------|
| `her-game-1.png` | Slides 2, 10 | Brand overview / references |
| `her-game-2.png` | Slide 3 | Pendant collection detail |
| `her-game-3.png` | Slide 5 | Selling / retail |
| `her-game-5.png` | Slide 6 | Distribution flow |
| `her-game-8.png` | Slides 1, 11 | Brand poster — title and closing |
| `her-game-9.png` | Slide 4 | Target market athletes |
| `her-game-10.png` | Slide 8 | Pricing display |
| `her-game-11.png` | Slide 9 | Promotion / social |
| `her-game-chatgpt.png` | Slide 7 | AI / information management |
| `her-game-13.png` | Collection | Archery pendant |
| `her-game-14.png` | Collection | Mountain biking pendant |
| `her-game-15.png` | Collection | Lacrosse pendant |

---

## ⚠️ Disclaimer

> **This is a school demo project only.**  
> - No real purchases can be made  
> - No personal student data is collected  
> - All prices, products, and business details are fictional examples  
> - HER GAME is not a real company  
> - Created for educational purposes for 7th grade marketing class

---

<div align="center">

**HER GAME** · *Form. Focus. Force.*  
Made with ❤️ by **Kaci Burns** · 7th Grade Marketing · 2026

[GitHub Repo](https://github.com/FTHTrading/Her-Game) · [View Presentation](/presentation) · [Download PPTX](./HER-GAME-Presentation-FINAL-CORRECTED.pptx)

</div>

---

## What Is This Project?

This is a school marketing project for **7th grade marketing class**. The product is called **HER GAME** — a sports pendant collection for female athletes.

> ⚠️ **School Disclaimer:** This is a demo website only. No real purchases can be made. No personal student data is collected. All prices, AI features, and business details are examples only.

---

## How to Run the Website

### Step 1: Install Node.js
Download from [https://nodejs.org](https://nodejs.org) if not already installed.

### Step 2: Install project dependencies
```bash
cd her-game-marketing-project
npm install
```

### Step 3: Start the development server
```bash
npm run dev
```

### Step 4: Open in browser
Go to [http://localhost:3000](http://localhost:3000)

### Build for production (optional)
```bash
npm run build
npm start
```

---

## Pages Included

| Page | URL | What It Covers |
|------|-----|----------------|
| Home | `/` | Brand intro, sports grid, overview |
| Collection | `/collection` | All 16 sport pendants with details |
| 7 Functions | `/marketing` | All 7 marketing functions explained |
| Business Plan | `/business-plan` | Full business plan for HER GAME |
| AI System | `/ai-system` | AI / RAG / MCP concept demo |
| Presentation | `/presentation` | All 11 slides with speaker notes |

---

## How to Edit Content

### Add or change a pendant
Edit `/data/pendants.ts` — each pendant is an object with:
- `sport` — sport name
- `concept` — pendant design name
- `formFocus` — athletic form description
- `targetCustomer` — who it's for
- `priceRange` — demo price
- `imageSuggestion` — visual description
- `finish` — gold, silver, or gunmetal

### Add a new sport
1. Open `/data/pendants.ts`
2. Copy an existing pendant object
3. Change all fields for the new sport
4. Add it to the array

### Change marketing function descriptions
Edit `/data/marketingFunctions.ts`

### Change AI / RAG knowledge base entries
Edit `/data/ragKnowledgeBase.ts`

---

## How to Add Images
1. Put your image file in `/public/images/`
2. Reference it in any page as `/images/your-file.png`
3. Use Next.js `<Image>` component for best performance

---

## How to Export Slide Content for a Presentation
1. Go to [http://localhost:3000/presentation](http://localhost:3000/presentation)
2. Use **Open PDF View** to open the print-friendly version at `/presentation/pdf`
3. Use **Download PowerPoint** to download a `.pptx` file from `/api/presentation/pptx`
4. Each slide shows: title, bullets, speaker notes, and image suggestion
5. Use the real images from `/public/images/` in your deck
6. Slide 10 is the references slide, so do not create a separate references page in the final deck

---

## Project Folder Structure

```
her-game-marketing-project/
├── app/                        # All website pages
│   ├── page.tsx                # Home page
│   ├── collection/page.tsx     # Pendant collection
│   ├── marketing/page.tsx      # 7 Functions of Marketing
│   ├── business-plan/page.tsx  # Business plan
│   ├── ai-system/page.tsx      # AI concept demo
│   ├── presentation/page.tsx   # 11-slide outline
│   ├── presentation/pdf/page.tsx # PDF print view
│   ├── layout.tsx              # Global layout + navbar
│   └── globals.css             # Global styles
├── components/                 # Reusable parts
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PendantCard.tsx
│   ├── FunctionCard.tsx
│   └── Section.tsx
├── data/                       # All project data
│   ├── pendants.ts             # 16 pendant definitions
│   ├── marketingFunctions.ts   # 7 functions data
│   └── ragKnowledgeBase.ts     # AI knowledge base
├── docs/                       # Project documents
│   ├── PRESENTATION_OUTLINE.md
│   ├── BUSINESS_PLAN.md
│   ├── AI_MCP_RAG_SYSTEM.md
│   ├── TEACHER_REQUIREMENTS_CHECKLIST.md
│   ├── REFERENCES.md
│   └── PARENT_REVIEW_CHECKLIST.md
└── public/images/              # All brand images
```

---

## What Kaci Should Present

1. **Open the website** at localhost:3000
2. **Walk through** the Home page briefly
3. **Go to** /marketing and explain each of the 7 functions
4. **Show** /collection to display the pendant designs
5. **Show** /business-plan for the business structure
6. **Reference** /presentation for the 11-slide deck
7. **Be ready** to answer: "Why this product?" and "Who are your customers?"

---

*Project by Kaci Burns — 7th Grade Marketing Class Demo*
