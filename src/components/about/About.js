import React from 'react'
import './About.css'
import Foto_perfil from '../../media/Foto_perfil.jpg'
//import Foto_perfil2 from '../../media/Foto_perfil2.jpeg'


function About() {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Te contare algo sobre mi...</h3>
            <p>Soy una persona que constantemente busca el crecimiento profesional y personal, y gracias a mi profesión como administrador de empresas, puedo enfocar cada estrategia, conocimiento y aptitud hacia el trabajo en equipo. Sin embargo, viendo la dificultad laboral que presenta mi región, decidí reinventarme profesionalmente e inicié la formación en el bootcamp de Henry, en un área que me ha apasionado, la programación y el desarrollo web.</p>
            <p>Como parte de mi formación en desarrollo web fullstack he adquirido competencias en: 
HTML, CSS, JavaScript, Git, NodeJS, Express, React, Redux, SQL, Sequelize, Scrum. Stripe entre otras.<br/><a href='https://www.soyhenry.com/' target="_blank"rel="noopener noreferrer">Soy_Henry</a> </p>
        </div>
        <div className='about-img'>
            <img src={Foto_perfil} alt='foto de perfil'/>
        </div>

    </div>
  )
}

export default About