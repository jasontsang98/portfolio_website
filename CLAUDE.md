# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flask-based portfolio website project that uses Tailwind CSS for styling and is designed for deployment on Vercel. The project follows a phased development approach with content managed via YAML files, with future plans to migrate to an SQL database.

## Technology Stack

- **Backend**: Flask (Python 3.9+)
- **Frontend**: HTML templates with Tailwind CSS
- **Content Management**: YAML files (`config/content.yaml`)
- **Deployment**: Vercel with serverless functions
- **Development**: Node.js for Tailwind CSS build process

## Development Commands

### Environment Setup
```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js dependencies for Tailwind
npm install
```

### Development Workflow
```bash
# Build Tailwind CSS (watch mode for development)
npm run build-css

# Run Flask development server
python app.py
```

### Testing and Validation
```bash
# Test all routes locally
python app.py
# Navigate to http://localhost:5000 to test

# Verify PDF download functionality
# Check /download-resume endpoint works

# Test responsive design on different screen sizes
```

## Project Structure

```
portfolio_website/
├── app.py                    # Main Flask application
├── requirements.txt          # Python dependencies
├── package.json             # Node.js dependencies and scripts
├── vercel.json              # Vercel deployment configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── config/
│   └── content.yaml         # Site content and configuration
├── static/
│   ├── css/
│   │   ├── input.css        # Tailwind input file
│   │   └── styles.css       # Generated Tailwind output
│   ├── js/                  # JavaScript files
│   └── files/
│       └── resume.pdf       # Downloadable resume
└── templates/
    ├── base.html            # Base template with navigation
    ├── intro.html           # Homepage/intro page
    └── resume.html          # Resume display page
```

## Key Architecture Patterns

### Content Management
- All site content is stored in `config/content.yaml` for easy updates
- Content includes personal info, skills, experience, and education
- YAML structure supports nested data for skills categorization and experience details

### Template Inheritance
- `base.html` provides common layout, navigation, and styling
- Page-specific templates extend base template for consistent design
- Navigation dynamically highlights current page

### Styling System
- Custom Tailwind theme with developer-focused color palette
- Dark theme with accent colors (`dev-dark`, `dev-gray`, `dev-accent`)
- Responsive design using Tailwind's grid and flexbox utilities

### Route Structure
- `/` and `/intro` - Homepage with skills and contact information
- `/resume` - Detailed resume page with experience and education
- `/download-resume` - PDF download endpoint

## Development Guidelines

### Content Updates
- Modify `config/content.yaml` to update site content
- Restart Flask development server after YAML changes
- Ensure YAML syntax is valid to prevent loading errors

### Styling Changes
- Edit `static/css/input.css` for custom CSS additions
- Run `npm run build-css` after Tailwind configuration changes
- Use existing color scheme variables for consistency

### Template Modifications
- Follow existing Jinja2 template patterns
- Maintain responsive design principles
- Use Font Awesome icons consistently

## Deployment Configuration

### Vercel Setup
- Configured for Python 3.9 runtime
- Single route directing all traffic to `app.py`
- Build command: `npm run build-css`
- No specific output directory required

### Environment Considerations
- Flask runs in production mode on Vercel
- Static files served directly by Vercel
- YAML configuration loaded at runtime

## Future Development Plans

### Phase 1 Complete
- Basic Flask application with intro and resume pages
- Tailwind CSS integration and responsive design
- Vercel deployment configuration

### Planned Features
- Open Source projects tab with GitHub integration
- Migration from YAML to SQL database for content management
- Admin interface for content updates
- Enhanced project showcase functionality