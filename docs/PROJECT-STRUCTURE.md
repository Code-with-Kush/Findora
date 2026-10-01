# Project structure

## index.html
Application markup and shell.

## assets/css/styles.css
All visual tokens, responsive layout, Prism borders, search, filters, listings, grid/list modes and detail-page styling.

## assets/js/app.js
All current prototype behaviour and data: categories, New Zealand locations, demo listings, search state, filters, sorting, favourites, detail rendering, similar places and voice search.

## original/prism-directory-single-file.html
Exact single-file prototype retained for reference.

## Suggested production refactor

```text
src/
├── components/
├── pages/
├── models/
├── services/
├── hooks/
├── data/
└── styles/
```

For a production React/TypeScript build, keep provider/API access inside services and keep rendering components focused on UI/state.
