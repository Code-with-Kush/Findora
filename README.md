# Findora

> A modern search and discovery platform for exploring businesses, places, services, restaurants, attractions, and local experiences.

![Status](https://img.shields.io/badge/status-prototype-blue)
![Frontend](https://img.shields.io/badge/frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Responsive](https://img.shields.io/badge/responsive-yes-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## Project Metadata

| Field | Details |
|---|---|
| Project Name | Findora |
| Repository | `findora` |
| Type | Search & Discovery / Directory Web App |
| Status | Prototype / In Development |
| Platform | Web |
| Frontend | HTML5, CSS3, JavaScript |
| Design | Modern, responsive, clean, Prism-inspired UI |
| Search | Keyword, category and location based |
| Views | List and Grid |
| Data | Demo data, API-ready |
| Planned API | Google Places API or equivalent place-data provider |
| License | MIT |
| Maintainer | Code with Kush |

## Overview

Findora is a modern directory and discovery web application designed to make it easy to search, explore, compare, and view detailed information about businesses, places, services, restaurants, attractions, activities, and other points of interest.

The project focuses on a clean, human-centred experience with fast search, advanced filters, rich listing cards, detailed place pages, and a distinctive rainbow-accent visual system.

## Key Features

- Keyword-based search
- Category search
- City/location filtering
- Searchable category selector
- Searchable location selector
- Advanced search filters
- Rating, distance, price and open-now filters
- Sorting by rating, reviews, distance, name and relevance
- List and grid views
- Clear-search action
- Responsive listing cards
- Business/place images
- Ratings and review counts
- Address and contact information
- Website information
- Opening status
- Favourite/save actions
- Detailed listing view
- Similar places
- Related categories and tags
- Directions and contact actions
- Voice-search support where available
- Responsive desktop, tablet and mobile layouts

## Design System

Findora uses a minimal white interface with subtle gradients and a Prism-inspired rainbow accent.

Core UI principles:

- Clean white surfaces
- Thin rainbow borders for major components
- No nested or double borders
- Clear visual hierarchy
- Compact information presentation
- Smooth hover and transition states
- Accessible, responsive interactions
- Human-centred navigation

## Current Project Structure

```text
findora/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── docs/
│   ├── FEATURES.md
│   ├── PROJECT-STRUCTURE.md
│   └── GOOGLE-PLACES-INTEGRATION.md
├── original/
│   └── single-file-prototype.html
├── project.json
├── .gitignore
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/findora.git
cd findora
```

Open `index.html` directly in your browser, or run a local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Search Flow

```text
Landing Page
    ↓
Search / Category / Location
    ↓
Advanced Filters
    ↓
List or Grid Results
    ↓
View Details
    ↓
Similar & Related Places
```

## Planned Architecture

The prototype currently uses demo listing data.

A production version can follow:

```text
Frontend
   ↓
Application API / Serverless Backend
   ↓
Places Data Provider
   ↓
Normalized Search Results
```

Possible future technologies:

- React
- TypeScript
- Next.js
- ASP.NET Core API
- Google Places API
- Google Maps
- PostgreSQL / SQL Server
- Redis caching
- Azure / Vercel / Netlify

## Roadmap

- [x] Landing page
- [x] Search experience
- [x] Category selector
- [x] Location selector
- [x] Advanced filters
- [x] List and grid modes
- [x] Listing cards
- [x] Detailed listing view
- [x] Similar places
- [x] Responsive design
- [ ] Connect live Places API
- [ ] Map view
- [ ] User authentication
- [ ] Saved places
- [ ] Search history
- [ ] Reviews
- [ ] User-created collections
- [ ] Personalised recommendations
- [ ] Backend caching
- [ ] Production deployment

## API Integration

For production, API credentials should never be exposed directly in client-side JavaScript.

Recommended approach:

```text
Browser
   ↓
Secure Backend/API
   ↓
Google Places API
```

Store API keys in secure environment variables and apply appropriate provider restrictions, quotas and monitoring.

## Contributing

This is currently a personal/demo project. Contributions, ideas and improvements can be introduced through issues or pull requests as the project evolves.

## License

This project can be distributed under the MIT License unless a different license is selected for the repository.

---

Built as a modern search and discovery project by **Code with Kush**.
