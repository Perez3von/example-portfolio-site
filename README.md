PORTFOLIO WEBSITE SETUP GUIDE (GITHUB PAGES VERSION)

This guide explains how to:

1. Clone the project
2. Run it locally
3. Push it to your own GitHub
4. Deploy it for FREE using GitHub Pages

========================
REQUIREMENTS
========================

Install these first:

- Node.js (version 18 or newer)
- Git

Check installation:

node -v
npm -v
git --version

========================

1. # CLONE THE PROJECT

Run:

git clone https://github.com/REPLACE-WITH-REPO.git
cd REPLACE-WITH-REPO

======================== 2. INSTALL DEPENDENCIES
========================

Run:

npm install

======================== 3. RUN LOCALLY
========================

Run:

npm run dev

Then open:

http://localhost:3000

======================== 4. EDIT YOUR CONTENT
========================

Main files to update:

- HeroSection.js → name, headline, links
- BackgroundSection.js → about section
- ToolkitSection.js → skills and tools
- CompletedProjectsSection.js → completed projects
- WorkInProgressSection.js → WIP projects
- ProjectCard.js → project cards
- ProjectModal.js → project details

Update text, links, images, and resume.

======================== 5. ADD IMAGES & RESUME
========================

Place files inside:

public/

Example:

public/
profile.png
project1.png
resume.pdf

Use them like:

src="/profile.png"
href="/resume.pdf"

======================== 6. PUSH TO YOUR OWN GITHUB
========================

Create a new empty repo on your GitHub first.

Then run:

git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main

======================== 7. ENABLE GITHUB PAGES
========================

⚠️ Next.js requires a static export for GitHub Pages.

---

## STEP 1 — UPDATE next.config.js

Create or edit next.config.js:

module.exports = {
output: "export",
images: {
unoptimized: true,
},
};

---

## STEP 2 — ADD BUILD COMMAND

Run:

npm run build

This will create a folder:

out/

---

## STEP 3 — DEPLOY TO GH PAGES

Install gh-pages:

npm install gh-pages --save-dev

Then add this to package.json:

"scripts": {
"dev": "next dev",
"build": "next build",
"export": "next build",
"deploy": "gh-pages -d out"
}

Then run:

npm run build
npm run deploy

---

## STEP 4 — ENABLE PAGES IN GITHUB

Go to your repo → Settings → Pages

Set:
Source = gh-pages branch

---

## STEP 5 — YOUR SITE

Your site will be live at:

https://YOUR-USERNAME.github.io/YOUR-REPO/

======================== 8. UPDATING YOUR SITE
========================

After making changes:

git add .
git commit -m "update"
git push

Then redeploy:

npm run build
npm run deploy

========================
COMMON ISSUES
========================

1. Images not showing
   → Use paths like:
   "/image.png"
   → Make sure they are in public/

2. Site looks broken on GitHub Pages
   → Make sure:
   output: "export" is set
   → Re-run build + deploy

3. Wrong folder
   → You must be inside folder with:
   package.json

4. Build fails
   → Run:
   npm install

========================
RECOMMENDED WORKFLOW
========================

1. Clone repo
2. Run locally
3. Customize content
4. Push to your GitHub
5. Build + deploy to GitHub Pages

========================
FINAL CHECKLIST
========================

- Node installed
- Project runs locally
- Content updated
- Images added
- Resume added
- Repo pushed to GitHub
- GitHub Pages enabled
- Site live
