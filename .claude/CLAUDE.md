# CLAUDE.md

## Project Overview

This project is a **photography portfolio website** for a fashion/editorial photographer working between Europe and Vietnam.

The goal is to create a **minimal, high-end, editorial-style website** that:
- Showcases photography work
- Attracts potential clients (fashion, artists, editorial weddings)
- Is easy to update (images and text)
- Does NOT require a backend or complex web app logic

This is strictly a **static website**, not a web application.

---

## Core Principles

- Minimal, clean, editorial aesthetic
- Image-first design (photography is the focus)
- Fast loading
- Simple structure
- editable (easy to update content and images)
- No unnecessary frameworks or complexity

---

## Tech Stack (Preferred)

Use one of the following:

### Option A (Recommended)
- HTML
- CSS (or Tailwind CSS)
- Minimal JavaScript (only if needed)

### Option B (If using framework)
- Next.js in **static export mode**
- No server-side rendering
- No API routes

---

## Project Structure


/public
/images
/projects
/project-name-1
/project-name-2

/src (if using framework)
/components
/pages

/content
projects.json
site.json

index.html


---

## Content Management

Content should be **easy to edit without coding knowledge**.

Use simple JSON or Markdown files:

### Example: `/content/projects.json`:

[
  {
    "title": "Runaway Bride",
    "category": "wedding",
    "cover": "/images/projects/runaway-bride/cover.jpg",
    "images": [
      "/images/projects/runaway-bride/1.jpg",
      "/images/projects/runaway-bride/2.jpg"
    ],
    "description": "A fashion-inspired wedding story in an urban environment."
  }
]

## minimum content in the website
Pages
1. Home
Hero image
Short positioning statement
Featured categories:
Fashion Editorial
Artists
Editorial Weddings
Link to Work page
2. Work
Grid layout
Filter or sections by category:
Fashion
Artists
Weddings
3. Project Page
Fullscreen or large images
Minimal text
Optional description
4. About
Short biography
Visual philosophy
EU ↔ Vietnam positioning
5. Contact
Email (manager)
Simple contact info
No complex forms required
Design Guidelines

## Typography:
Clean, modern serif or sans-serif
Large headings
Generous spacing

## Colors:
White / black / neutral tones
Let images dominate

## Layout:

Grid-based
Full-width images
Lots of whitespace
Image Handling
Optimize all images (WebP preferred)
Use responsive sizes
Lazy loading enabled
Performance
No heavy libraries
No unnecessary animations
Keep bundle size minimal
Fast load on mobile
SEO Basics
Add meta titles and descriptions
Use semantic HTML
Add alt text to images

## What to Avoid
No CMS complexity (e.g., WordPress, headless CMS)
No authentication systems
No dashboards
No databases
No overuse of animations
No unnecessary dependencies
Future Flexibility

## The structure should allow:

Adding new projects easily
Replacing images without breaking layout
Updating text via JSON/Markdown
Tone & Feel

## The site should feel like:

A fashion magazine
A gallery, not a tech product
Quiet, confident, and curated
End Goal

## A simple, elegant portfolio website that:

Looks premium
Loads fast
Is easy to maintain
Helps convert visitors into clients

---