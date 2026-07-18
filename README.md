# Life With Indraa - GitHub Pages

Personal website for Kang Indra - Cloud Architect, Property Agent & Entrepreneur.

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful, consistent icons
- **Google Fonts** - Poppins (headings) + Inter (body)

## Pages

- `index.html` - Landing page with hero, about preview, journey, services, videos, resources, CTA
- `about.html` - Full story, skills, mission
- `services.html` - Cloud, property, and career coaching services
- `portfolio.html` - Cloud projects and architecture patterns
- `resources.html` - Free templates, guides, and downloads
- `contact.html` - Contact form and quick info

## Setup

1. Enable GitHub Pages in repository settings
2. Set source to main branch
3. Your site will be live at `https://lifewithindraa.github.io`

## Customization

### Add Your Photo
Replace placeholder in `index.html` and `about.html`:
```html
<img src="assets/images/your-photo.jpg" alt="Indra Saputra" class="...">
```

### Update Contact Info
- WhatsApp: Change `6281234567890` in contact links
- Email: Update `indra@lifewithindraa.com`
- LinkedIn: Update profile URL
- YouTube: Update channel URL

### Colors
Edit Tailwind config in each HTML file:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: '#0B1220',
                azure: '#2563EB',
                success: '#22C55E'
            }
        }
    }
}
```

## Structure

```
github-pages/
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── resources.html
├── contact.html
└── assets/
    ├── images/
    ├── css/
    │   └── custom.css
    └── js/
```

## License

© 2024 Life With Indraa. All rights reserved.
