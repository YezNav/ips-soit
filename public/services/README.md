# Service Images Directory

Add your generated service images here with the following filenames:

## Image Files Required

```
public/services/
├── seguridad.jpg          (1200x800px - Industrial Safety)
├── medicina.jpg           (1200x800px - General Medicine)
├── rehabilitacion.jpg     (1200x800px - Rehabilitation Therapy)
├── diagnosticos.jpg       (1200x800px - Diagnostics)
└── odontologia.jpg        (1200x800px - Dentistry)
```

## Image Specifications

- **Format**: JPG or PNG
- **Recommended Size**: 1200x800px (3:2 aspect ratio)
- **Max File Size**: 150KB each (compressed for web)
- **Color Mode**: RGB

## Naming Convention

The component expects these exact filenames with lowercase letters:
- `seguridad.jpg` - For "Seguridad Industrial" section
- `medicina.jpg` - For "Medicina General" section
- `rehabilitacion.jpg` - For "Rehabilitación" section
- `diagnosticos.jpg` - For "Diagnósticos" section
- `odontologia.jpg` - For "Odontología" section

## How to Add Images

1. Generate your images using the provided AI prompts (Midjourney, DALL-E, etc.)
2. Download and optimize images (resize to 1200x800px if needed)
3. Rename files to match the required names above
4. Place them in this directory: `public/services/`
5. The website will automatically load and display them!

## Image Optimization Tools

- **Resize**: ImageMagick, Online-Convert, or similar
- **Compress**: TinyPNG, ImageOptim, or similar
- **Format**: Convert to JPG for smaller file sizes

## Notes

- Images are lazy-loaded for performance
- Images have a hover zoom effect (slight scale up)
- Images are responsive (h-48 on mobile, h-80 on desktop)
- Fallback: If an image doesn't load, it will show a border with the background color
