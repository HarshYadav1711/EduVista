# EduVista — ReactJS Internship Assessment

This project is a pixel-accurate implementation of the provided Adobe XD design, built as part of the ReactJS Development internship assessment for Educase India.

The goal was not to redesign or extend the interface, but to recreate it faithfully while maintaining clean engineering practices, structured code, and production-ready quality.

---

## Approach

The Adobe XD file was treated as the single source of truth. Every decision—layout, spacing, typography, colors, and component structure—was derived directly from the design.

The implementation was done section-by-section to ensure visual accuracy and consistency across the entire interface. The focus was on:

* Maintaining exact spacing and alignment
* Preserving visual hierarchy and proportions
* Avoiding unnecessary abstractions or added features
* Keeping the codebase readable and intentional

---

## Key Decisions

The interface is built as a centered mobile application inside a desktop viewport, as specified in the instructions. This ensures that the design behaves like an app preview rather than a full-width website.

Routing is implemented using React Router to allow seamless navigation between screens without page reloads.

The styling approach avoids heavy UI libraries to maintain full control over layout precision. All styles are written with clarity and consistency in mind.

---

## Tech Stack

* React (Vite)
* React Router
* CSS (scoped and modular where appropriate)

No additional libraries were introduced unless they directly supported the requirements.

---

## Project Structure

The project is organized to keep concerns clearly separated:

* components are divided into layout, common, and section-level elements
* pages represent individual screens
* styles are centralized and consistent
* assets are isolated and reusable

This structure keeps the codebase scalable while remaining simple to navigate.

---

## What I Focused On

* Pixel-level accuracy with respect to the XD design
* Clean, readable, and maintainable code
* Logical component structure without overengineering
* Smooth and predictable navigation
* A UI that feels stable, balanced, and production-ready

---

## Running Locally

Clone the repository and install dependencies:

npm install

Start the development server:

npm run dev

---

## Build

To create a production build:

npm run build

---

## Deployment

The project is deployed on Vercel and is accessible via the submitted link.

---

## Notes

This project intentionally avoids feature additions, design changes, or unnecessary enhancements. The objective was to demonstrate attention to detail, discipline in execution, and the ability to translate a design into a clean, working product.

---

## Closing

This submission reflects how I approach frontend work: understand the requirement fully, execute with precision, and keep the implementation clean and maintainable.

If something feels simple here, it is because it was kept that way deliberately.
