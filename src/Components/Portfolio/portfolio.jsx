import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="container_left">
        <h1>Maximiliano Sánchez</h1>
        <h2>Desarrollador Front-End Junior</h2>
        <p> 
          Formándome actualmente en la carrera de Ingeniería en Informática en la Universidad 
          Columbia del Paraguay. Mi enfoque principal se centra en el área del Front End, 
          donde estoy capacitándome y adquiriendo habilidades en HTML5, CSS, JavaScript y React para el desarrollo de aplicaciones web.
        </p>
        <p>
          Mi pasión por la tecnología, el deseo de seguir aprendiendo y el poder resolver los desafíos que se 
          presenten me impulsan a seguir creciendo tanto en lo personal como en lo profesional.
        </p>
        <div className="links">
          <img src="https://media.licdn.com/dms/image/D4D03AQFQtXfGyaeJcw/profile-displayphoto-shrink_200_200/0/1678213701342?e=1706140800&v=beta&t=mnbdSgEnY5Ra5oETKu52DRBYPVySmv3bPx13aFnYvhg" alt="" className="fotico" />
          
          <img src={require('./Assets/icons8-linkedin-50(1).png')} className='linkedinImg' />
          <a href="https://www.linkedin.com/in/maxisanchezp/" target='blank' className="linkedin">LinkedIn</a>

          <img src={require('./Assets/icons8-twitter-30.png')} className='twtImg' />
          <a href="https://twitter.com/maxisanchezp" target='blank' className="twitter">Twitter</a>
        </div>
        <div className="menus">
          <ol className="items">
            <li><a href = '' target='_blank'>Acerca de mi</a></li>
            <li><a href = '' target='_blank'>Experiencia</a></li>
            <li><a href = '' target='_blank'>Proyectos</a></li>
            <li><a href = '' target='_blank'>Contacto</a></li>
          </ol>
        </div>
      </div>
      <div className="container_right">
        <div className="aboutMe">
          <ul className="education">
          <h1 className='heducacion'>Educación</h1>
            <li>
              <h2>Ingenieria Informática</h2>
              <h3>Universidad Columbia del Paraguay (2020-2024)</h3>
              <p>Diferentes metodologias de investigación, introducción al desarrollo web con lenguajes o herramientas como HTML, CSS, JavaScript, React, etc.</p>
              <p>Diseño y manejo básico de Bases de Datos, SQL y PL/SQL.</p>
            </li>

            <li>
              <h2>Bachiller Técnico en Informática</h2>
              <h3>Colegio y Escuela Técnica Sagrado Corazón de Jesús - Salesianito (2017-2019)</h3>
              <p>Conocimientos básicos e introducción a conceptos como Hardware y Software</p>
            </li>
          </ul>
          <ul className="certificados">
            <h1 className='hcertificados'>Certificados</h1>
            <li>
              <h2>Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero (Udemy)</h2>
              <p>Habilidades aprendidas en el curso:
                HTML, CSS, JavaScript, NodeJS.</p>
              <a href="https://www.udemy.com/certificate/UC-f7e31bff-3e0f-4741-b7b3-3ba86fcb753b/" target='_blank'>Mostrar credencial</a>
            </li>

            <li>
              <h2>C2 English Certificate (EF SET)</h2>
              <p>Certificado de Inglés nivel C2 según escala EF Standard English Test.</p>
              <a href="https://www.efset.org/cert/J1rSZz" target='_blank'>Mostrar credencial</a>
            </li>
          </ul>
        </div>
        <div className="experience">
          <ul>
            <li>
              <h1>Soporte TIC - Corporacion Siegfried Paraguay</h1>
                <h2>Julio, 2023 - Actualmente</h2>
                <p>Trabajo de Soporte Técnico para todas las herramientas de la corporación, manejo de sistemas operativos como Windows y Linux, participación en proyectos, etc.
                </p>
            </li>
            <li>
              <h1>Auxiliar Informatico - Walton Capital S.A.</h1>
              <h2>Febrero, 2020 - Junio</h2>
              <p>Conceptos basicos de manejos de Bases de Datos y reportes utilizando SQL.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
