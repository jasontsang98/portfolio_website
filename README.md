# Portfolio Website

A modern, responsive portfolio website built with Flask and Tailwind CSS, designed for easy deployment on Vercel.

## Features

- 🎨 Clean, developer-focused design with dark theme
- 📱 Fully responsive layout
- 🚀 Fast deployment on Vercel
- 📄 Downloadable PDF resume
- ⚡ Easy content management via YAML configuration
- 🎯 SEO-friendly structure

## Quick Start

### Prerequisites

- Python 3.9+
- Node.js and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_website
   ```

2. **Set up Python environment**
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate virtual environment
   source venv/bin/activate  # Linux/Mac
   # venv\Scripts\activate   # Windows
   
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Set up Node.js dependencies**
   ```bash
   npm install
   ```

4. **Build CSS**
   ```bash
   npm run build-css
   ```

5. **Run the development server**
   ```bash
   python app.py
   ```

6. **Visit your site**
   Open http://localhost:5000 in your browser

For active CSS development, run the watcher in a separate terminal:
```bash
npm run build-css:watch
```

## Updating Your Portfolio Content

All content is managed through the `config/content.yaml` file. Here's how to update each section:

### Personal Information

Edit the `personal` section in `config/content.yaml`:

```yaml
personal:
  name: "Your Full Name"
  title: "Your Professional Title"
  tagline: "Your professional tagline or motto"
  email: "your.email@example.com"
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  location: "Your City, Country"
```

### Skills

Update the `skills` section with your technical abilities:

```yaml
skills:
  languages:
    - name: "Python"
      level: "Advanced"  # Beginner, Intermediate, Advanced
      icon: "🐍"
    # Add more languages...
  
  frameworks:
    - name: "Flask"
      level: "Advanced"
    # Add more frameworks...
```

### Work Experience

Modify the `experience` section:

```yaml
experience:
  - title: "Your Job Title"
    company: "Company Name"
    duration: "Start Date - End Date"
    location: "City, Country"
    description: "Brief description of your role and achievements"
    technologies: ["Python", "Flask", "PostgreSQL"]
  # Add more positions...
```

### Education

Update the `education` section:

```yaml
education:
  - degree: "Your Degree"
    institution: "University Name"
    graduation: "Graduation Year"
    gpa: "X.X/4.0"  # Optional
  # Add more education entries...
```

### Resume PDF

1. Place your resume PDF file in `static/files/resume.pdf`
2. The download link will automatically work on the resume page

**Important**: After updating `content.yaml`, restart the Flask development server to see changes.

## Customizing the Design

### Colors and Themes

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'dev-dark': '#0d1117',    // Background color
  'dev-gray': '#21262d',    // Card/section backgrounds
  'dev-accent': '#58a6ff'   // Accent color for links and highlights
}
```

### Adding Custom Styles

1. Add custom CSS to `static/css/input.css`
2. Run `npm run build-css` to compile changes
3. Restart the development server

### Modifying Layout

- Edit `templates/base.html` for site-wide changes (navigation, footer)
- Edit `templates/intro.html` for the homepage
- Edit `templates/resume.html` for the resume page

## Architecture

The Flask application loads portfolio content from `config/content.yaml` and passes it to Jinja templates. `templates/base.html` provides the shared navigation and layout, while page templates extend it. Tailwind reads the templates and `static/css/input.css`, then writes the generated stylesheet to `static/css/styles.css`.

### Routes

| Route | Purpose |
| --- | --- |
| `/` and `/intro` | Portfolio introduction |
| `/resume` | Resume and experience |
| `/blog` | Blog page |
| `/download-resume` | Download the resume PDF |

## Deployment

### Deploy to Vercel

1. **Prepare for deployment**
   ```bash
   # Ensure CSS is built
   npm run build-css
   
   # Commit your changes
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Configure deployment settings:
     - Framework Preset: Other
     - Build Command: `npm run build-css`
     - Output Directory: (leave empty)
   - Deploy!

## Development Workflow

### Making Changes

1. **Update content**: Edit `config/content.yaml`
2. **Modify styles**: Edit CSS files and run `npm run build-css`
3. **Test locally**: Run `python app.py` and check http://localhost:5000
4. **Deploy**: Push to GitHub and Vercel will auto-deploy

### Adding New Features

The project structure supports easy expansion:

- **New pages**: Add routes in `app.py` and templates in `templates/`
- **New content types**: Extend the YAML structure in `config/content.yaml`
- **New styles**: Add components to `static/css/input.css`

## Project Structure

```
portfolio_website/
├── app.py                    # Main Flask application
├── requirements.txt          # Python dependencies
├── package.json             # Node.js dependencies
├── vercel.json              # Vercel deployment config
├── tailwind.config.js       # Tailwind CSS configuration
├── config/
│   └── content.yaml         # Your portfolio content
├── static/
│   ├── css/
│   │   ├── input.css        # Tailwind input
│   │   └── styles.css       # Generated CSS
│   └── files/
│       ├── profile.png      # Profile image
│       └── resume.pdf       # Resume PDF
└── templates/
    ├── base.html            # Base template
    ├── blog.html            # Blog page
    ├── intro.html           # Homepage
    └── resume.html          # Resume page
```

## Troubleshooting

### Common Issues

1. **CSS not updating**: Run `npm run build-css` after making style changes
2. **Content not updating**: Restart Flask server after editing YAML
3. **PDF download not working**: Ensure `resume.pdf` exists in `static/files/`
4. **Deployment issues**: Check Vercel logs and ensure all dependencies are listed

### Getting Help

- Review the detailed implementation plan in `project_plan.md`
- Ensure all dependencies are installed correctly
- Confirm both Python and Node.js dependencies are installed
