import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Sana Meharin K</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <h1>Hello, I'm Sana Meharin 👋</h1>

        <h2>Computer Science Undergraduate</h2>

        <p>
          Aspiring Full Stack Python Developer passionate about building
          responsive web applications using Python, Django, React and MySQL.
        </p>

        <button>View Projects</button>
      </section>
      <section id="about" className="section">
  <h2>About Me</h2>

  <p>
    I am a Computer Science undergraduate passionate about
    Full Stack Web Development and Python programming.
    I enjoy building responsive web applications,
    learning new technologies, and solving real-world problems.
  </p>

  <p>
    My goal is to become a skilled Software Engineer and
    contribute to innovative projects using modern technologies.
  </p>
</section>
<section id="skills" className="section">
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill-card">Python</div>
    <div className="skill-card">Django</div>
    <div className="skill-card">React</div>
    <div className="skill-card">Java</div>
    <div className="skill-card">HTML5</div>
    <div className="skill-card">CSS3</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">MySQL</div>
    <div className="skill-card">Git</div>
    <div className="skill-card">GitHub</div>
    <div className="skill-card">VS Code</div>
    <div className="skill-card">Problem Solving</div>
  </div>
</section>
<section id="projects" className="section">
  <h2>Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>🌦 Weather Forecast App</h3>
      <p>
        Developed a weather forecasting web application using
        Python, Django, HTML, CSS, and a Weather API.
      </p>
    </div>

    <div className="project-card">
      <h3>⚖ BMI Calculator</h3>
      <p>
        Built a Java-based BMI Calculator with a graphical user
        interface to calculate BMI and display health categories.
      </p>
    </div>

    <div className="project-card">
  <h3>🌐 Personal Portfolio</h3>
  <p>
    Developed a responsive personal portfolio using React and Vite
    to showcase my skills, projects, education, and experience with
    a modern gradient design.
  </p>
</div>

    <div className="project-card">
      <h3>💼 Portfolio Website</h3>
      <p>
        Designed and developed a responsive personal portfolio
        using React and Vite.
      </p>
    </div>

  </div>
</section>
<section id="education" className="section">
  <h2>Education</h2>

  <div className="project-card">
    <h3>B.Tech in Computer Science & Engineering</h3>
    <p>
      MGM College of Engineering and Technology<br />
      2024 – 2028
    </p>
  </div>
</section>

<section id="experience" className="section">
  <h2>Experience</h2>

  <div className="project-card">
    <h3>Full Stack Development Intern</h3>
    <p>
      Stem Robotics | June 2026<br /><br />

      • Developed web applications using Django.<br />
      • Worked in a team environment.<br />
      • Gained hands-on experience in full-stack development.
    </p>
  </div>

  <div className="project-card">
    <h3>Leadership & Activities</h3>
    <p>
      • Women Entrepreneurship Lead – IEDC<br />
      • Student Lead – Etcetera Coding Club<br />
      • NSS Volunteer
    </p>
  </div>
</section>
<section id="contact" className="section">
  <h2>Contact Me</h2>

  <div className="contact-card">
    <p><strong>Email:</strong> sanameharink@gmail.com</p>

    <p>
      <strong>GitHub:</strong>
      <br />
      <a
        href="https://github.com/sanameharink"
        target="_blank"
        rel="noreferrer"
      >
        github.com/sanameharink
      </a>
    </p>

    <p>
      <strong>LinkedIn:</strong>
      <br />
      <a
        href="https://www.linkedin.com/in/sana-meharin-k-436290334"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>
    </p>
  </div>
</section>

<footer className="footer">
  <p>© 2026 Sana Meharin K | Built with React & Vite ❤️</p>
</footer>
    </>
  );
}

export default App;