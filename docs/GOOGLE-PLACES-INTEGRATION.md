# Google Places integration plan

The included UI currently uses demo data.

## Recommended flow

```text
Prism browser UI
      ↓
Your secure API/serverless backend
      ↓
Google Places API
```

## Search request model

Suggested Prism inputs:
- keyword
- category
- city
- openNow
- minRating
- distance
- price
- hasWebsite
- hasPhone
- sort

## Normalized listing model

```json
{
  "id": "provider-place-id",
  "name": "Example Cafe",
  "category": "Cafe",
  "rating": 4.8,
  "reviewCount": 1200,
  "address": "Example address",
  "phone": "+64 ...",
  "website": "https://...",
  "isOpen": true,
  "distanceKm": 1.2,
  "priceLevel": 2,
  "description": "Short summary",
  "image": "https://...",
  "location": {
    "lat": -43.0,
    "lng": 172.0
  }
}
```

## Detail model
Add provider-supported detail data such as opening hours, photo gallery, phone, website, location/map data, amenities, provider attribution and related places.

## Security
Do not expose unrestricted API keys in the front end. Store them in server environment variables or managed secrets and apply provider-recommended restrictions, quotas and monitoring.
