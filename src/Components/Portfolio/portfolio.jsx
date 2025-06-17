import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="container_left">
        <h1 className="name">Maximiliano Sánchez</h1>
        <h2 className="subtitle">
          Python Back-End Developer & WordPress Specialist{" "}
        </h2>
        <p>
          I'm a Software Engineer focused on Back-End development with Python,
          with hands-on experience gained through continuous learning and
          personal projects. I also have solid knowledge of relational databases
          and intermediate-level SQL skills, allowing me to design, query, and
          optimize data structures effectively.
        </p>
        <p>
          In addition, I have experience building modern, responsive websites
          using WordPress and Elementor, combining aesthetics and functionality
          to enhance user experience.
        </p>
        <p>
          I'm passionate about technology and lifelong learning. I enjoy solving
          technical challenges, collaborating on innovative projects, and
          growing both professionally and personally while creating meaningful
          digital solutions.
        </p>
        <div className="links">
          <img
            src={require("../Assets/ola.png")}
            alt="Maximiliano Sánchez"
            className="fotico"
          />
          <img
            src={require("../Assets/icons8-linkedin-50(1).png")}
            alt="LinkedIn icon"
            className="linkedinImg"
          />
          <a
            href="https://www.linkedin.com/in/maxisanchezp/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            LinkedIn
          </a>
          <img
            src={require("../Assets/icons8-github-30.png")}
            alt="Github icon"
            className="twtImg"
          />
          <a
            href="https://github.com/maxisanchezp"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="container_right">
        <div className="aboutMe">
          <section className="education">
            <h2 className="section-title">Education</h2>
            <ul>
              <li>
                <h3>Software Engineering</h3>
                <h4>Columbia University of Paraguay (2020-2024)</h4>
                <p>Introduction to software development and research methods</p>
                <p>Fundamental database design and SQL skills</p>
              </li>
            </ul>
          </section>

          <section className="certificates">
            <h2 className="section-title">Certificates</h2>
            <ul>
              <li>
                <h3 className="ola2">
                  Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero (Udemy)
                </h3>
                <p>
                  Skills learned in the Course: HTML, CSS, JavaScript, NodeJS.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-f7e31bff-3e0f-4741-b7b3-3ba86fcb753b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </li>

              <li>
                <h3 className="ola">
                  The Complete Python Bootcamp From Zero to Hero in Python
                  (Udemy)
                </h3>
                <p>
                  Basic Python concepts such as data types (lists, dictionaries,
                  tuples, etc.), control structures, and more advanced topics
                  like OOP, file analysis (PDFs, CSVs), email handling (sending
                  and receiving), and web scraping.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-0d521c32-13c7-4f60-b63d-fc5bb9836b10/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </li>

              <li>
                <h3>C2 English Certificate (EF SET)</h3>
                <p>
                  English C2 Level Certificate according to the EF Standard
                  English Test scale.
                </p>
                <a
                  href="https://www.efset.org/cert/J1rSZz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show Credential
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section className="experience">
          <h2 className="section-title">Experience</h2>
          <ul>
            <li>
              <h3>Website Content Editor – Nestlé</h3>
              <h4>July 2024 – Present</h4>
              <p>
                Actively contributed to large-scale web projects for brands like
                Purina LATAM and Baby & Me (currently FamilyNes), serving
                multiple countries and markets across the region. Responsible
                for the development and maintenance of landing pages, product
                pages, articles, modules, forms, and other key components of
                Nestlé’s digital platforms. Collaborated closely with
                cross-functional teams to ensure scalability, consistency, and
                high performance of web content.
              </p>
            </li>

            <li>
              <h3>IT Support – Corporación Siegfried Paraguay</h3>
              <h4>July 2022 – July 2024</h4>
              <p>
                Provided technical support for all corporate tools, managing
                operating systems such as Windows and Linux. Participated in
                various internal projects and gained experience with automation
                tools like Power Automate.
              </p>
            </li>

            <li>
              <h3>IT Assistant – Walton Capital S.A.</h3>
              <h4>February 2020 – June 2022</h4>
              <p>
                Learned fundamental concepts of database management and report
                generation using SQL.
              </p>
            </li>
          </ul>
        </section>

        <section className="projects">
          <h2 className="section-title">Projects</h2>
          <ul className="project-list">
            <li>
              <h3 className="project-name">
                <a
                  href="https://maxisanchezp.github.io/weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather App
                </a>
              </h3>
              <p>
                A web application built with React that allows users to check
                the weather in any city worldwide by entering its name. Uses the
                OpenWeatherMap API to retrieve real-time weather data.
              </p>
            </li>

            <li>
              <h3 className="project-name">
                <a
                  href="https://maxisanchezp.github.io/ToDoList_msanchez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ToDo List
                </a>
              </h3>
              <p>
                A task management app developed with React that enables users to
                create, list, and delete one or all tasks. A simple and
                effective way to organize daily activities.
              </p>
            </li>

            <li>
              <h3 className="project-name">
                <a
                  href="https://maxisanchezp.github.io/rpgGame/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RPG Game
                </a>
              </h3>
              <p>
                A basic RPG-style game developed using plain JavaScript as part
                of a logic challenge on FreeCodeCamp. Demonstrates control flow,
                game mechanics, and interactivity without frameworks.
              </p>
            </li>
          </ul>
        </section>

        <section className="contacto">
          <h2 className="section-title">Contact Me</h2>
          <ul className="contactos">
            <li>
              Email:{" "}
              <a href="mailto:maxisanchez2001py@gmail.com">
                maxisanchez2001py@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
