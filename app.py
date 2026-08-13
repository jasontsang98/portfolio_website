from flask import Flask, render_template, send_file
import yaml

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

@app.route('/blog')
def blog():
    config = load_config()
    return render_template('blog.html', **config)

@app.route('/blog/subtrack-web')
def subtrack_blog():
    config = load_config()
    return render_template('blog_subtrack.html', **config)

@app.route('/download-resume')
def download_resume():
    return send_file('static/files/resume.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
