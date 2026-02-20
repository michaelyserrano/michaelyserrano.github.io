# Image assets

Next.js serves files from `public/` at the site root. Use paths **starting with `/`** in config (e.g. `/projects/my-project/logo.png`).

## Project cards & project detail pages

**Where to put files:** `public/projects/<project-id>/`

- **Card thumbnail (required):** one image per project, e.g. `logo.png` or `cover.webp`.
  - Set in `config/projects.ts` as `companyLogoImg: "/projects/<project-id>/logo.png"`.
- **Detail page images:** any screenshots or gallery images for that project.
  - Add paths to `pagesInfoArr[].imgArr` in `config/projects.ts` (e.g. `"/projects/<project-id>/screenshot_1.webp"`).

**Example:** for a project with `id: "my-app"`:
- Put images in `public/projects/my-app/` (e.g. `logo.png`, `screen1.webp`).
- In `config/projects.ts`: `companyLogoImg: "/projects/my-app/logo.png"` and reference other images in `pagesInfoArr` as `/projects/my-app/screen1.webp`.

## Experience cards

**Where to put files:** `public/experience/`

- **Company/org logo (optional):** one image per experience, e.g. `company-name-logo.png`.
  - Set in `config/experience.ts` as `logo: "/experience/company-name-logo.png"`.

**Example:** for “Acme Corp” you could add `public/experience/acme-logo.png` and set `logo: "/experience/acme-logo.png"` for that experience in `config/experience.ts`.

## Formats

- PNG and WebP work well. Use WebP for photos/screenshots to keep size down.
- Project card thumbnails are shown at ~200px height; logos on experience cards at ~48px. Prefer square or landscape for project thumbnails.
