# CLAUDE.md

Personal academic website for Dr. Ruebena Dawes — NHMRC Investigator Fellow (EL1), Postdoctoral Researcher at the Nuffield Department of Medicine, University of Oxford, and Visiting Scientist at the Garvan Institute of Medical Research.

## Tech Stack

- **Framework**: Gatsby 5
- **Styling**: Tailwind CSS 3 + global styles in `src/styles/global.css` (Raleway font, warm link color `#c2410c`)
- **Icons**: lucide-react
- **Deployment**: Netlify (`public/` dir, `yarn project-setup && yarn build`)

## Project Structure

```
src/
  pages/       # index.js, work.js, publications.js, software.js, talks.js, contact.js
  components/  # layout.js, header.js, seo.js
  styles/      # global.css (Tailwind directives + Raleway font + link color)
  images/
  templates/
```

## Pages

| Route | File | Content |
|---|---|---|
| `/` | `index.js` | About / home |
| `/work` | `work.js` | Research themes and current projects |
| `/publications` | `publications.js` | Publication list (JS array) |
| `/software` | `software.js` | SpliceVault, SpliceVault VEP plugin, SpliceAI-splint |
| `/talks` | `talks.js` | Invited talks and posters |
| `/contact` | `contact.js` | Email, Bluesky, LinkedIn, ORCID, Scholar, GitHub |

`other.js` and Gatsby starter template files (`using-ssr.js`, `using-typescript.tsx`) are unused — ignore them.

## Conventions

- All content is hardcoded in JS files — no CMS, no markdown, no GraphQL data layer beyond images.
- Every page wraps its content in `<Layout>` and includes `<Seo title="..." />`.
- Header background: `#FAA275` (salmon). Link color: `#c2410c` (warm orange-brown) — set globally in `global.css`, do NOT add `text-blue-*` classes to links.
- Layout uses `max-w-4xl` centered content area.
- Publications and software tools are stored as JS arrays at the top of their respective page files.
- Mobile nav is a hamburger toggle in `header.js` with local `useState`.

## Key Content Details

- **Affiliation**: Oxford (primary) + Garvan Institute (visiting scientist)
- **Fellowship**: NHMRC Investigator Grant EL1 — "Enhanced analysis of splice-altering variants to improve diagnostic rate in rare disease"
- **Collaborators at Oxford**: Whiffin group (Computational Rare Disease Genomics) + Sanders group (small ORFs / disease risk)
- **Email**: ruebena.dawes@ndm.ox.ac.uk (Oxford) · r.dawes@garvan.org.au (Garvan)
- **Social**: Bluesky @ruebenadawes.bsky.social · LinkedIn · GitHub: RubyDawes
- **ORCID**: 0000-0003-2135-0117

## Software URLs

- SpliceVault web portal: https://kidsneuro.shinyapps.io/splicevault/
- SpliceVault GitHub: https://github.com/kidsneuro-lab/SpliceVault
- SpliceVault VEP plugin: https://github.com/Ensembl/VEP_plugins/blob/release/115/SpliceVault.pm
- SpliceAI-splint GitHub: https://github.com/Computational-Rare-Disease-Genomics-WHG/spliceai-splint

## Development

```bash
npm run develop   # Start dev server at localhost:8000
npm run build     # Production build
npm run clean     # Clear Gatsby cache
```

## Key Details

- Site URL: `https://ruebenadawes.com/`
- No test suite (placeholder only).
- The `netlify.toml` includes leftover Hugo/Go env vars that are unused — do not remove without confirming with user.
