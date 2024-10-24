import  './home.css'
import React from 'react'


function Home() {
  return (
    <div className="home">
<header className="header">
<h1 className="logo">Roshni Gupta</h1>
<img   style={{ borderRadius: '15px' }} src="./src/roshni image/roshniphoto.jpeg"/> </header>

<section className="hero">
<h2>Welcome to My Portfolio</h2>
<p>Your tagline goes here!</p>
<a className="cta-button" href="#projects">View My Work</a>
</section>

<section id="about" className="about">
<h2>About Me</h2>
<p>Aspiring Frontend Developer | MCA Student | Language Enthusiast...</p>
<h3>Skills</h3>
<ul className="skills">
<li style={{ listStyleType: 'none'}} >JavaScript</li>
<li style={{ listStyleType: 'none'}}>React</li>
<li style={{ listStyleType: 'none'}}>CSS</li>
<li style={{ listStyleType: 'none'}}>HTML</li>
</ul>
</section>

<section id="projects" className="projects">
<h2>My Projects</h2>
<div className="project-grid">
<div className="project-card">
<h3>Project 1</h3>

<a href="https://github.com/roshnigupta9718/bootstrap-site">View Project</a>
</div>
<div className="project-card">
<h3>Project 2</h3>
<p>Short description of project 2.</p>
<a href="#">View Project</a>
</div>
{/* Add more project cards as needed */}
</div>
</section>

<section id="contact" className="contact">
<h2>Contact Me</h2>
<form>
<input type="text" placeholder="Your Name" required />
<input type="email" placeholder="Your Email" required />
<textarea placeholder="Your Message" required></textarea>
<button type="submit">Send</button>
</form>
</section>

<footer className="footer">
<p>© 2024 Your Name. All rights reserved.</p>
<div className="social-links">
<a href="#">LinkedIn</a>
<a href="#">GitHub</a>
</div>
</footer>
</div>
  )
}

export default Home