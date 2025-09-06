# Flask Portfolio Website Development Plan

## Overview
Build a Python-based portfolio website using Flask, Tailwind CSS, and deploy on Vercel. Content managed via YAML files with future migration to SQL database.

## Phase 1: Project Foundation (Steps 1-6)

### Step 1: Environment Setup
- [ ] Create project directory (* only if not in the project directory): `portfolio_website`
- [ ] Initialize Git repository: `git init`
- [ ] Create Python virtual environment: `python -m venv venv`
- [ ] Activate virtual environment: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows)
- [ ] Create `.gitignore` file with Python and Node.js ignores

### Step 2: Project Structure
Create the following directory structure:
```
portfolio_website/
├── app.py
├── requirements.txt
├── vercel.json
├── package.json
├── tailwind.config.js
├── config/
│   └── content.yaml
├── static/
│   ├── css/
│   │   └── input.css
│   │   └── styles.css
│   ├── js/
│   └── files/
│       └── resume.pdf
└── templates/
    ├── base.html
    ├── intro.html
    └── resume.html
```

### Step 3: Core Dependencies
- [ ] Create `requirements.txt`:
```
Flask==2.3.3
PyYAML==6.0.1
gunicorn==21.2.0
```
- [ ] Install Python dependencies: `pip install -r requirements.txt`
- [ ] Create `package.json` for Tailwind:
```json
{
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.10"
  },
  "scripts": {
    "build-css": "tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --watch"
  }
}
```
- [ ] Install Node dependencies: `npm install`

### Step 4: Vercel Configuration
- [ ] Create `vercel.json`:
```json
{
  "functions": {
    "app.py": {
      "runtime": "python3.9"
    }
  },
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/app.py"
    }
  ]
}
```

### Step 5: Tailwind Configuration
- [ ] Create `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        'dev-dark': '#0d1117',
        'dev-gray': '#21262d',
        'dev-accent': '#58a6ff'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```
- [ ] Create `static/css/input.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6: Content Structure
- [ ] Create `config/content.yaml`:
```yaml
personal:
  name: "Your Name"
  title: "Software Developer"
  tagline: "Building solutions with clean code and innovative thinking"
  email: "your.email@example.com"
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  location: "Your City, Country"

skills:
  languages:
    - name: "Python"
      level: "Advanced"
      icon: "🐍"
    - name: "JavaScript"
      level: "Intermediate"
      icon: "📜"
    - name: "SQL"
      level: "Advanced"
      icon: "🗄️"
  
  frameworks:
    - name: "Flask"
      level: "Advanced"
    - name: "React"
      level: "Intermediate"
    - name: "Django"
      level: "Beginner"

experience:
  - title: "Software Developer"
    company: "Company Name"
    duration: "2022 - Present"
    location: "City, Country"
    description: "Your role description and key achievements"
    technologies: ["Python", "Flask", "PostgreSQL"]
    
education:
  - degree: "Your Degree"
    institution: "University Name"
    graduation: "Year"
    gpa: "X.X/4.0"
```

## Phase 2: Core Flask Application (Steps 7-12)

### Step 7: Main Flask Application
- [ ] Create `app.py`:
```python
from flask import Flask, render_template, send_file
import yaml
import os

app = Flask(__name__)

def load_config():
    with open('config/content.yaml', 'r') as file:
        return yaml.safe_load(file)

@app.route('/')
@app.route('/intro')
def intro():
    config = load_config()
    return render_template('intro.html', **config)

@app.route('/resume')
def resume():
    config = load_config()
    return render_template('resume.html', **config)

@app.route('/download-resume')
def download_resume():
    return send_file('static/files/resume.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
```

### Step 8: Base HTML Template
- [ ] Create `templates/base.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}{{ personal.name }} - {{ personal.title }}{% endblock %}</title>
    <link href="{{ url_for('static', filename='css/styles.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-dev-dark text-white min-h-screen">
    <!-- Navigation -->
    <nav class="bg-dev-gray shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-xl font-bold text-dev-accent">{{ personal.name }}</div>
                <div class="space-x-6">
                    <a href="{{ url_for('intro') }}" class="hover:text-dev-accent transition-colors">Intro</a>
                    <a href="{{ url_for('resume') }}" class="hover:text-dev-accent transition-colors">Resume</a>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Main Content -->
    <main class="flex-1">
        {% block content %}{% endblock %}
    </main>
    
    <!-- Footer -->
    <footer class="bg-dev-gray mt-12 py-8">
        <div class="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 {{ personal.name }}. Built with Flask and Tailwind CSS.</p>
        </div>
    </footer>
</body>
</html>
```

### Step 9: Intro Page Template
- [ ] Create `templates/intro.html`:
```html
{% extends "base.html" %}

{% block content %}
<div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-4">{{ personal.name }}</h1>
        <h2 class="text-2xl text-dev-accent mb-6">{{ personal.title }}</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">{{ personal.tagline }}</p>
    </div>
    
    <!-- Skills Section -->
    <div class="mb-16">
        <h3 class="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
        
        <!-- Languages -->
        <div class="mb-8">
            <h4 class="text-xl font-semibold mb-4 text-dev-accent">Programming Languages</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {% for skill in skills.languages %}
                <div class="bg-dev-gray p-4 rounded-lg">
                    <div class="text-2xl mb-2">{{ skill.icon }}</div>
                    <h5 class="font-semibold">{{ skill.name }}</h5>
                    <p class="text-gray-400">{{ skill.level }}</p>
                </div>
                {% endfor %}
            </div>
        </div>
        
        <!-- Frameworks -->
        <div>
            <h4 class="text-xl font-semibold mb-4 text-dev-accent">Frameworks & Tools</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {% for framework in skills.frameworks %}
                <div class="bg-dev-gray p-4 rounded-lg">
                    <h5 class="font-semibold">{{ framework.name }}</h5>
                    <p class="text-gray-400">{{ framework.level }}</p>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
    
    <!-- Contact Section -->
    <div class="text-center">
        <h3 class="text-3xl font-bold mb-8">Get In Touch</h3>
        <div class="flex justify-center space-x-6">
            <a href="mailto:{{ personal.email }}" class="bg-dev-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                <i class="fas fa-envelope mr-2"></i>Email Me
            </a>
            <a href="{{ personal.github }}" target="_blank" class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
                <i class="fab fa-github mr-2"></i>GitHub
            </a>
            <a href="{{ personal.linkedin }}" target="_blank" class="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                <i class="fab fa-linkedin mr-2"></i>LinkedIn
            </a>
        </div>
    </div>
</div>
{% endblock %}
```

### Step 10: Resume Page Template
- [ ] Create `templates/resume.html`:
```html
{% extends "base.html" %}

{% block content %}
<div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Header with Download -->
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Resume</h1>
        <a href="{{ url_for('download_resume') }}" class="bg-dev-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            <i class="fas fa-download mr-2"></i>Download PDF
        </a>
    </div>
    
    <!-- Experience Section -->
    <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-dev-accent border-b-2 border-dev-accent pb-2">Experience</h2>
        {% for job in experience %}
        <div class="mb-8 bg-dev-gray p-6 rounded-lg">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="text-xl font-semibold">{{ job.title }}</h3>
                    <p class="text-dev-accent">{{ job.company }}</p>
                </div>
                <div class="text-right text-gray-400">
                    <p>{{ job.duration }}</p>
                    <p>{{ job.location }}</p>
                </div>
            </div>
            <p class="text-gray-300 mb-3">{{ job.description }}</p>
            <div class="flex flex-wrap gap-2">
                {% for tech in job.technologies %}
                <span class="bg-dev-dark px-3 py-1 rounded-full text-sm">{{ tech }}</span>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
    
    <!-- Education Section -->
    <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-dev-accent border-b-2 border-dev-accent pb-2">Education</h2>
        {% for edu in education %}
        <div class="bg-dev-gray p-6 rounded-lg">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
                    <p class="text-dev-accent">{{ edu.institution }}</p>
                </div>
                <div class="text-right text-gray-400">
                    <p>{{ edu.graduation }}</p>
                    {% if edu.gpa %}<p>GPA: {{ edu.gpa }}</p>{% endif %}
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
{% endblock %}
```

### Step 11: Build CSS and Test Locally
- [ ] Generate Tailwind CSS: `npm run build-css`
- [ ] Test Flask application: `python app.py`
- [ ] Verify navigation works between Intro and Resume tabs
- [ ] Check responsive design on different screen sizes
- [ ] Validate all YAML data displays correctly

### Step 12: Add Resume PDF
- [ ] Convert your LaTeX resume to PDF
- [ ] Place PDF file in `static/files/resume.pdf`
- [ ] Test download functionality works

## Phase 3: LaTeX to HTML Integration (Steps 13-15)

### Step 13: LaTeX Content Extraction
- [ ] Copy relevant content from LaTeX resume to YAML
- [ ] Ensure all work experience is captured
- [ ] Include education details
- [ ] Add any certifications or additional sections
- [ ] Update `content.yaml` with complete resume data

### Step 14: Enhanced Resume Styling
- [ ] Improve resume template typography
- [ ] Add section for certifications (if applicable)
- [ ] Style skill levels with progress bars or badges
- [ ] Ensure professional appearance matches PDF version

### Step 15: Content Validation
- [ ] Compare web version with PDF resume for completeness
- [ ] Ensure consistent formatting and information
- [ ] Test all links and download functionality
- [ ] Verify responsive design works on mobile

## Phase 4: Deployment (Steps 16-18)

### Step 16: Pre-deployment Setup
- [ ] Create GitHub repository
- [ ] Commit all files: `git add .` then `git commit -m "Initial commit"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Ensure `.gitignore` excludes virtual environment and node_modules

### Step 17: Vercel Deployment
- [ ] Create Vercel account at vercel.com
- [ ] Connect GitHub repository to Vercel
- [ ] Configure deployment settings:
  - Framework Preset: Other
  - Build Command: `npm run build-css`
  - Output Directory: (leave empty)
- [ ] Deploy and test live site

### Step 18: Post-deployment Testing
- [ ] Test all routes work on live site
- [ ] Verify PDF download works
- [ ] Check mobile responsiveness
- [ ] Test loading times and performance
- [ ] Validate all external links work

## Phase 5: Future Preparation (Steps 19-20)

### Step 19: Open Source Tab Structure
- [ ] Plan GitHub integration approach
- [ ] Design project showcase layout
- [ ] Prepare YAML structure for projects:
```yaml
projects:
  - name: "Project Name"
    description: "Brief description"
    tech_stack: ["Python", "Flask", "PostgreSQL"]
    github_url: "https://github.com/username/repo"
    demo_url: "https://project-demo.com"
    use_cases: ["Use case 1", "Use case 2"]
```

### Step 20: Database Migration Preparation
- [ ] Research free SQL database options (PostgreSQL on Railway/Supabase)
- [ ] Plan data model for content management
- [ ] Design migration strategy from YAML to database
- [ ] Consider adding simple admin interface for content updates

## Testing Checklist

After each phase, verify:
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Content displays properly
- [ ] Responsive design functions
- [ ] PDF download works
- [ ] External links open correctly
- [ ] Site performance is acceptable

## Success Criteria

- ✅ Professional portfolio website live on Vercel
- ✅ Clean, developer-focused design with Tailwind CSS
- ✅ Responsive design works on all devices
- ✅ Resume content matches LaTeX version
- ✅ PDF download functionality works
- ✅ Structured for easy content updates via YAML
- ✅ Dockerized for consistent development and deployment
- ✅ Ready for future Open Source tab addition
- ✅ Preparation complete for database migration