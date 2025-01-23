---
name: "StageHunter"
url: "https://stagehunter.cc"
githubUrl: "https://github.com/michaelbennett99/stagehunter"
order: -1
techStack: [
    "react",
    "typescript",
    "nextjs",
    "tailwindcss",
    "go",
    "postgresql",
    "aws",
    "cloudflare",
    "docker"
]
---

A daily pro cycling trivia game leveraging 3D geospatial track data.

- **Data Pipeline:** Scraped/cleaned 3D race tracks (.gpx) + results using Python,
stored in PostgreSQL with PostGIS for low-latency spatial queries.
- **Frontend:** React SPA (Next.js/Mapbox GL JS) with cached static site generation.
- **Backend:** Go API (net/http) for data serving + input validation.
- **Deployment:** Containerised application deployed behind nginx reverse proxy
on AWS EC2, updates orchestrated via CI/CD with GitHub Actions.
