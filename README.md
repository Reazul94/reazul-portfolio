# S.B.M. Reazul Karim — Personal Engineering Portfolio

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://reazul94.github.io/reazul-portfolio/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Live Production Website:** [https://reazul94.github.io/reazul-portfolio/](https://reazul94.github.io/reazul-portfolio/)  
> **GitHub Repository:** [https://github.com/Reazul94/reazul-portfolio](https://github.com/Reazul94/reazul-portfolio)

Professional personal portfolio for **S.B.M. Reazul Karim**, Software Engineer at the **Institute of Information and Communication Technology (IICT), BUET**, specializing in **Java, Spring Boot, Groovy on Grails, ERP Systems, Oracle 11g, PL/SQL, and Reporting Solutions**.

All personal information, experience, education, and project details are strictly grounded in his verified Curriculum Vitae.

---

## 🌟 Key Features

* **Bilingual Support (English & বাংলা):** Seamless language switching with natural, professional Bangla phrasing, typography optimized with `Noto Sans Bengali`, and zero translation of technical keywords or proper nouns.
* **Theme System (Light, Dark, System):**
  * **Midnight Enterprise (Dark):** Deep obsidian navy base (`#080B12`) with sky blue accents (`#38BDF8`).
  * **Enterprise Crisp (Light):** Slate base (`#F8FAFC`) with sapphire accents (`#0284C7`).
  * Pre-hydration script to prevent any Flash of Incorrect Theme (FOUC).
* **Mobile-First UX:**
  * Strict mobile-first Hero sequence: *Text → Title → Description → CTA Buttons → Profile Image*.
  * Accessible mobile bottom navigation dock with touch targets ≥ 44px.
  * Smooth animated hamburger drawer menu.
  * Zero horizontal scrolling across all viewports (320px to 2560px).
* **Interactive Project Case Studies & Filtering:**
  * Categorized filters: `All`, `ERP`, `Backend`, `Database`, `Reporting`, `Web`.
  * Verified live links for **KGDCL ERP System** (`erp.kgdcl.gov.bd`), **KGDCL Billing Portal** (`billing.kgdcl.gov.bd`), and **SGCL ERP System** (`erp.sgcl.org.bd`).
  * Abstract conceptual architecture flow diagram.
* **Domain Experience Section:** Dedicated spotlight on 7 enterprise domains: ERP Systems, Utility Billing, Customer Management, VAT / NBR Compliance, Financial Reporting, Legal Case Management, and Production Support.
* **Technology Ecosystem:** Conceptual multi-tier architectural visualization of enterprise layers.
* **Direct Executive Contact (No Fake Forms):** One-click email copy with feedback toast, direct email dispatch, phone dialing, verified LinkedIn link, and direct CV viewing and downloading.
* **Print Stylesheet:** Built-in `@media print` rules generating clean, distraction-free resume documents.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 (JSX, Functional Components, Custom Hooks) |
| **Build Tooling & Bundler** | Vite 4.5 |
| **Styling & Design Tokens** | Tailwind CSS 3.4 (CSS Variables, Dark Mode Class Strategy) |
| **Icons & Visual Language** | Lucide React |
| **Typography** | Inter, Manrope, Noto Sans Bengali, JetBrains Mono |
| **Deployment & CI/CD** | GitHub Pages & GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

* **Node.js:** `v18.x` or `v20.x` recommended (supports Node `16.19+`)
* **npm:** `v8.x` or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Reazul94/reazul-portfolio.git
   cd reazul-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📦 Deployment to GitHub Pages

This project is pre-configured with a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that automatically builds and deploys the site whenever you push to the `main` branch.

### Enabling GitHub Pages on your repository:

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/Reazul94/reazul-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository on GitHub: **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The deployment workflow will run automatically. Your site will be live at:
   ```
   https://reazul94.github.io/reazul-portfolio/
   ```

### 🌐 Connecting a Custom Domain (Optional)

If you wish to use a custom domain (e.g. `www.reazulkarim.com` or `reazul.dev`):
1. In your domain registrar (e.g. Namecheap, Cloudflare, GoDaddy), add a `CNAME` record pointing to `reazul94.github.io`.
2. In your repository on GitHub, go to **Settings** → **Pages** → **Custom domain** and enter your domain name.
3. Check **Enforce HTTPS**.
4. In `vite.config.js`, set `base: '/'` (or set `VITE_BASE_PATH='/'` in your build environment) so assets load from the root domain.

---

## 📝 Maintenance & Content Customization

### 1. How to Update Portfolio Content
All factual resume content is organized in a single source of truth:
* [`src/data/portfolioData.js`](src/data/portfolioData.js) — Personal details, projects, education, technical skills, and experience items.
* [`src/data/translations.js`](src/data/translations.js) — Complete bilingual dictionary for English and বাংলা text.

### 2. How to Replace the Profile Photo
1. Place your updated high-resolution photo in `public/images/Reaz_Image.jpg`.
2. The portfolio will automatically update across all hero cards, metadata previews, and frames.

### 3. How to Update the CV
1. Replace the file at `public/documents/S_B_M_Reazul_Karim_CV.pdf` with your updated PDF.
2. Both the **"View CV"** (online tab) and **"Download CV"** (file download) buttons will automatically point to the new file.

### 4. How to Change Theme Colors
Color tokens are centrally configured via CSS custom properties in [`src/index.css`](src/index.css):
* `--color-canvas`: Primary background
* `--color-card`: Card surfaces
* `--color-brand`: Primary highlight (sky blue)
* `--color-content-primary`: Main headings & high-contrast text

### 5. How to Add or Modify বাংলা (Bengali) Translations
Open [`src/data/translations.js`](src/data/translations.js) and update the corresponding key under the `bn` object. All layout constraints are automatically handled by the responsive CSS and `Noto Sans Bengali` font rules.

---

## 📄 License

This portfolio codebase is open-source under the [MIT License](LICENSE).
Personal content, project descriptions, and photographs belong to **S.B.M. Reazul Karim**.
