# Kids2Cooks

A cooking website built with 11ty (Eleventy) static site generator.

## Project Structure

```
kids2cooks11ty/
├── src/            # Source files
├── docs/          # Build output (generated)
└── eleventy.config.js # Configure 11ty collections and build/serve configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Lucius-White/kids2cooks.git
cd kids2cooks
```

2. Install dependencies:

```bash
npm install
```

## Development

### To run the site locally in development mode:

```bash
npm run start
```

This will start a local development server, typically at `http://localhost:8080`

### To rebuild styles.css from styles.scss:

```bash
npm run build:css
```

### Updating code

1. Overall site layout is managed in src/\_layouts/default.njk
2. Each page has it's own njk file under src. e.g. about.njk
3. Recipes can be added as md files in src/recipes
4. The recipe page is managed in src/\_layouts/recipe.njk.
5. The recipe URLs are managed by the permalink configuration in src/recipes/recipes.json instead of just by the filename like the about page.
6. Images should be added to the src/assets/images files. Recipe images should be consistent sizes and aspect ratios.
7. The recipe list is rendered by src/\_includes/recipe-list.njk so that it can be reused for both the meal pages (recipes.njk) and the all recipes page (all-recipes.njk)
8. The recipe meal pages like /recipes/breakfast are generated dynamically based on the pagination and permalink settings in /src/recipes.njk following this example: https://www.11ty.dev/docs/pages-from-data/

## Building for Production

To build the site for production:

```bash
npm run build
```

The built files will be in the `docs` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see below for details:

MIT License

Copyright (c) 2025 Kids2Cooks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
