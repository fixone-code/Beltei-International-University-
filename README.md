# BELTEI International University (BIU) — Official Website

> **A Complete, Modern, Premium, Responsive Institutional Web Platform for BELTEI International University, Cambodia.**
> Built with **React 19**, **Vite**, **React Router v7**, **Framer Motion**, and **Lucide React**.

---

## 🏛️ Project Overview

This project is a modern, responsive web portal for **BELTEI International University (BIU)**, Cambodia, designed with authentic institutional branding, rigorous academic visual hierarchy, and full mobile responsiveness.

- **Official University Portal**: [https://beltei.edu.kh/biu](https://beltei.edu.kh/biu)
- **Tagline**: *"Empowering the Next Generation of Global Leaders"* / *"អនាគតនៃអ្នកដឹកនាំសកល"*
- **Core Institutional Values**: *"Quality, Efficiency, Excellence, Morality, Virtue"* (*គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ គុណធម៌*)

---

## 🌟 Key Features

1. **Official Brand Identity & Colors**:
   - Header & Signature Blue: `#006CB8`
   - Academic Royal Navy: `#0F2263`
   - Institutional Gold Accent: `#FDB515`
   - Crimson Brand Accent: `#E23439`
   - Exact color variables for all 13 faculties defined in `src/index.css`.

2. **Bilingual Typography & Support (English & Khmer)**:
   - English: `Plus Jakarta Sans`
   - Khmer Classical Headings: `Moul` (Google Fonts, matching KhmerOSMoul)
   - Khmer Body: `Battambang` & `Kantumruy Pro`
   - Instant 1-click Language Switcher in the top utility bar (`EN` ⇄ `KH`).

3. **Academic Dark & Light Theme**:
   - Persistent theme toggle between daylight campus mode and deep academic navy dark mode.

4. **Interactive Site-Wide Search**:
   - Instant search across faculties, specialized majors, qualification levels, and news articles with highlighted matching.

5. **Complete 13-Faculty Directory**:
   - Full directory with faculty booklet covers, official color codes, specialized majors, and interactive details modal:
     1. Business Administration (`BBA` • `#E23439`)
     2. Finance and Banking (`BFB` • `#8E2F39`)
     3. Economics (`BEco` • `#006F87`)
     4. Law (`BLaw` • `#0F2263`)
     5. Education, Arts and Humanities (`BEdu` • `#4156A3`)
     6. Tourism and Hospitality (`BTh` • `#39A753`)
     7. Information Technology and Science (`BIT` • `#C1AA3F`)
     8. Digital Technology and Telecommunications (`BDT` • `#8F61A7`)
     9. Engineering (`BEng` • `#EE8A36`)
     10. Architecture (`BArch` • `#F3868C`)
     11. International Relations (`BIR` • `#55545E`)
     12. Civil Aviation (`BCA` • `#42B7DA`)
     13. Chinese Language (`BCHN` • `#FFC62A`)

6. **Academic Programs & Degrees (5 Levels)**:
   - Foundation / Pre-University Studies
   - Associate Degrees (2 Years)
   - Bachelor's Degrees (4 Years)
   - Master's Degrees (2 Years)
   - Doctoral Degrees (Ph.D, 3–5 Years)
   - Filter tabs, study shift schedules, admission requirements, and transparent tuition notes.

7. **Interactive Admissions System**:
   - 4-step enrollment roadmap
   - Required document checklist
   - Validated online application form (frontend demonstration) with immediate confirmation.

8. **Official News & Events**:
   - Featured annual debate championship spotlight
   - Category filtering & search
   - Full article view (`/news/:id`) with related press releases.

9. **Campus Life & Facilities Gallery**:
   - Central KOHA Library, High-tech IT Labs, Multimedia Classrooms, 2,000-seat Grand Auditorium.
   - Annual debate and public speaking traditions.

10. **Campus Locations & Interactive Contact**:
    - Campus 1 (Tuol Sleng), Campus 2 (Chaom Chao Flyover), Campus 3 (Tuol Pongro), Head Office.
    - Verified phone numbers, emails, and embedded Google Maps.

---

## 📁 Project Structure

```text
ass1/
├── index.html                   # HTML entry point with Google Fonts & SEO meta
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── README.md                    # Comprehensive documentation
├── public/
│   ├── favicon.ico              # Authentic university crest icon
│   ├── logo/
│   │   └── beltei_logo.png      # Genuine BELTEI International University logo (PNG)
│   └── images/
│       ├── asaihl_logo.png       # ASAIHL partnership seal
│       ├── researchjournal.png   # Research Journal emblem
│       ├── campus1_tuolsleng.png # Campus 1 photo (Tuol Sleng)
│       ├── campus2_chaomchao.png # Campus 2 photo (Chaom Chao)
│       ├── campus3_tuolpongro.png# Campus 3 photo (Tuol Pongro)
│       ├── hq_beltei.png         # BELTEI Group HQ photo
│       ├── leadership/
│       │   └── dr_lychheng.jpg   # Portrait of Founder H.E. Dr. Ly Chheng
│       ├── degrees/
│       │   ├── phd.png           # Doctoral Degree certificate badge
│       │   ├── master.png        # Master's Degree certificate badge
│       │   ├── bachelor.png      # Bachelor's Degree certificate badge
│       │   └── associate.png     # Associate's Degree certificate badge
│       ├── facilities/
│       │   ├── library_1.png     # KOHA central library physical collections
│       │   ├── library_2.png     # KOHA digital reference hall
│       │   ├── lab_1.jpg         # Computer & Software Engineering lab
│       │   ├── classroom_1.jpg   # Multimedia lecture classroom
│       │   └── hall_1.jpg        # 2,000-seat Grand Conference Hall
│       ├── faculties/
│       │   ├── faculty_1.png to 12.png # Official booklet cover images
│       └── news/
│           ├── news_debate_2026.jpg
│           ├── news_intake_2026.jpg
│           ├── news_peace_day.jpg
│           └── news_business_faculty.jpg
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application routes & layout
    ├── index.css                # Official design tokens & global styles
    ├── App.css                  # Layout, card & component styles
    ├── context/
    │   └── AppContext.jsx       # Theme, language, & search modal state
    ├── data/
    │   ├── translations.js      # English & Khmer bilingual dictionaries
    │   ├── faculties.js         # The 13 official faculties & curricula
    │   ├── programs.js          # Degree qualification levels & courses
    │   ├── news.js              # Official university press releases
    │   └── campuses.js          # Campus locations & facility data
    ├── components/
    │   ├── Navbar.jsx           # Sticky bilingual navbar + mobile drawer
    │   ├── Footer.jsx           # Institutional footer with contacts & MoEYS note
    │   ├── Hero.jsx             # Hero section with headline & dual CTAs
    │   ├── SectionTitle.jsx     # Reusable section title with gold accent
    │   ├── FacultyCard.jsx      # Card for each faculty with booklet cover
    │   ├── ProgramCard.jsx      # Card for degree level & schedule details
    │   ├── NewsCard.jsx         # Card for news & event announcements
    │   ├── SearchBar.jsx        # Site-wide instant search modal
    │   ├── Breadcrumb.jsx       # Breadcrumb navigation for inner pages
    │   └── BackToTop.jsx        # Floating back-to-top button
    └── pages/
        ├── Home.jsx             # Homepage (/)
        ├── About.jsx            # About page (/about)
        ├── Faculties.jsx        # Faculty directory (/faculties)
        ├── Programs.jsx         # Academic qualifications (/programs)
        ├── Admissions.jsx       # Admissions guide & form (/admissions)
        ├── CampusLife.jsx       # Student activities & gallery (/campus-life)
        ├── News.jsx             # News & announcements (/news)
        ├── NewsDetails.jsx      # News detail page (/news/:id)
        ├── Contact.jsx          # Campus switcher & contact (/contact)
        └── NotFound.jsx         # 404 page
```

---

## 💻 Instructions for Running in VS Code on macOS

### 1. Prerequisites
Ensure you have **Node.js 20.19 or higher**, or **22.12 or higher**, as required by Vite 8:
```bash
node -v
npm -v
```

### 2. Navigate to Project Directory
In your macOS terminal or VS Code integrated terminal:
```bash
cd /path/to/Assignment/ass1
```

### 3. Install Dependencies
```bash
npm install
```

Installed packages:
- `react` & `react-dom` (v19)
- `react-router-dom` (Routing & navigation)
- `framer-motion` (Subtle micro-animations)
- `lucide-react` (Institutional icons)
- `vite` & `@vitejs/plugin-react` (Ultra-fast build tooling)

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

### 5. Build for Production
To test production bundling:
```bash
npm run build
npm run preview
```

## 🚀 Deploying to Vercel

This project is a React single-page application built with Vite. When importing the `ass1` folder as the repository root, use:

- **Framework preset**: Vite
- **Install command**: `npm install`
- **Build command**: `npm run build`
- **Output directory**: `dist`

`vercel.json` routes page requests back through the app so React Router pages continue to work when opened or refreshed directly. If the GitHub repository contains the parent `Assignment` folder, set the Vercel **Root Directory** to `ass1`; otherwise, leave it as `.`. Keep credentials in Vercel environment-variable settings, not in committed `.env` files.

---

## 🎨 Official Brand Assets & Image Handling

All official assets were fetched directly from verified institutional URLs on `beltei.edu.kh`:
- **Official Logo**: `public/logo/beltei_logo.png` (transparent RGBA PNG, 2243 × 364)
- **Official Favicon**: `public/favicon.ico`
- **Campus & Facility Photography**: Stored locally in `public/images/` with fallback error handlers on every `<img>` tag so broken image icons never appear.

---

## 🧪 Verification & Testing Checklist

- [x] **Sticky Navigation**: Smooth scrolling, sticky header with utility bar, logo, and action CTAs.
- [x] **Bilingual Switching**: 1-click toggle switches seamlessly between Khmer and English.
- [x] **Dark Mode Toggle**: Toggles between crisp light campus theme and dark institutional navy.
- [x] **Hero Section**: Displays the headline *"Empowering the Next Generation of Global Leaders"* and dual CTAs.
- [x] **13 Academic Faculties**: Filterable by category, searchable by major/code, and clickable for modal inspection.
- [x] **Academic Qualifications**: 5 degree tiers with credit structures and study shifts.
- [x] **Online Admissions Form**: Validates inputs, handles submissions gracefully, and indicates frontend demonstration status.
- [x] **Campus Locations**: Switcher displays Campus 1 (Tuol Sleng), Campus 2 (Chaom Chao), Campus 3 (Tuol Pongro), and Head Office with interactive Google Maps.
- [x] **Search Modal**: Instant search across faculties, programs, and news articles.
- [x] **Mobile Responsiveness**: Animated hamburger drawer menu and zero horizontal overflow on mobile screens.
- [x] **Production Bundle**: Successfully builds via `npm run build` with zero errors.
