# WDD 331R Portfolio

**Student:** Joshua Walker
**Semester:** Fall 2026
**Live Site:** [View Site](https://joshwalks7.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

## Architecture
The home page is styled with layered CSS that is imported into main.css. This project uses Lightning CSS to compile the CSS into one file, currently located in dist/styles.css. Even though it is not used actively (main.css is), it works if used. To run this, simply run "npm install" and then "npm run build." Unit folders showcase work across the units.
Additionally, dark/light mode has now been enabled for the home site. You can find the tokens used to style each mode in the css/tokens/ directory.

## Typography

Typography tokens live in `css/tokens/variables.css`. The type system uses a minor-third modular scale with a `1.2` ratio, fluid `clamp()` values for larger sizes, and semantic roles for body text, supporting text, headings, and display text. EB Garamond is loaded for headings with `display=swap` from Google Fonts, while body text uses a system sans-serif fallback stack. Unfortunately, I kept running into a bug with the Google import, so I had to import it in the html pages themselves rather than in main.css.

Specific layout:
```text
css/
├── base/
│   ├── elements.css
│   └── reset.css
├── components/
│   ├── card.css
│   ├── nav.css
│   └── theme-toggle.css
├── layout/
│   └── primary.css
├── tokens/
│   ├── colors.css
│   └── variables.css
├── utilities/
│   └── utilities.css
└── main.css

js/
└── theme-preference.js

dist/
└── styles.css
```

## Pages

- [Home](index.html)
- [Ward Activity Board - Implementing Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Scripture Study Companion - Layered Components + Modern Selectors](unit-2/layered-components/index.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Editorial Grid](unit-4/grid-layouts/editorial.html)
- [Responsive Grid](unit-4/grid-layouts/cards.html)
- [Container Queries](unit-4/advanced/container-demo.html)
- [Sticky Positioning](unit-4/advanced/sticky-demo.html)

## Choose Topics
- [Bootstrap Choose Topic](https://youtu.be/n4xMBO8K5fQ)
- [Lightning CSS Choose Topic](https://youtu.be/34RYou6i3sc)
- [The "contrast-color" function](https://youtu.be/Y8apCqzfW7o)
- [Shape-Outside](https://www.youtube.com/watch?v=KY7MboGwRE0)
- [Logical Properties](https://youtu.be/u-Aw4Pyw2fA)
- [Masonry CSS](https://youtu.be/WPKIWkG6wYs)
