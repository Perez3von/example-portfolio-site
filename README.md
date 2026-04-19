PORTFOLIO WEBSITE SETUP GUIDE

This guide explains two ways to start the project:

1. Using a ZIP file (easiest)
2. Using GitHub clone (recommended long-term)

========================
OPTION 1 — USING THE ZIP
========================

Step 1 — Extract the ZIP

- Right click the ZIP file
- Click "Extract All"
- Open the extracted folder

IMPORTANT:
Make sure you are inside the folder that contains:
package.json

Step 2 — Open the project

- Open the folder in VS Code (or any code editor)

Step 3 — Open terminal

- In VS Code: Terminal → New Terminal

Step 4 — Install dependencies
Run:
npm install

Step 5 — Run the project
Run:
npm run dev

Step 6 — Open the site
Go to:
http://localhost:3000

===========================
OPTION 2 — CLONE FROM GITHUB
===========================

Step 1 — Clone the repo
Run:
git clone https://github.com/REPLACE-WITH-REPO.git
cd REPLACE-WITH-REPO

Step 2 — Install dependencies
Run:
npm install

Step 3 — Run the project
Run:
npm run dev

Step 4 — Open the site
Go to:
http://localhost:3000

================
REQUIREMENTS
================

Install:

- Node.js (version 18 or newer)
- Git (only needed for cloning or uploading)

Check installation:
node -v
npm -v
git --version

========================
EDITING YOUR CONTENT
========================

Main files to update:

- HeroSection.js → name, headline, links
- BackgroundSection.js → about section
- ToolkitSection.js → skills and tools
- CompletedProjectsSection.js → completed projects
- WorkInProgressSection.js → work-in-progress projects
- ProjectCard.js → project preview
- ProjectModal.js → project details

==============================
ADDING IMAGES AND RESUME
==============================

Place files inside:
public/

Example:
public/
profile.png
project1.png
resume.pdf

Use them like this:
src="/profile.png"
href="/resume.pdf"

==============================
PUSH TO YOUR OWN GITHUB
==============================

Step 1 — Create a new empty repo on GitHub

Step 2 — Run:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main

========================
DEPLOY YOUR SITE (FREE)
========================

Use Vercel

Steps:

1. Go to Vercel
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click Deploy

You will get a live URL like:
https://your-site.vercel.app

========================
UPDATING YOUR SITE
========================

Run:
git add .
git commit -m "Update"
git push

Vercel will automatically redeploy your site.

========================
COMMON ISSUES
========================

1. npm not working
   → Install Node.js

2. Images not showing
   → Make sure they are inside public/ and used like:
   "/image.png"

3. Site not loading
   → Run:
   npm run dev

4. Wrong folder
   → Make sure you are inside the folder with:
   package.json

========================
RECOMMENDED WORKFLOW
========================

1. Run project locally
2. Customize content
3. Add images and resume
4. Push to GitHub
5. Deploy on Vercel

========================
FINAL CHECKLIST
========================

- Node installed
- Project runs locally
- Content updated
- Images added
- Resume added
- GitHub repo created
- Site deployed
