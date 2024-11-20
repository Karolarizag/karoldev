import React from 'react';
import "./app.css"
import json from "./i18n/english.json"
import { Header } from './components/header';
import { CareerCard } from './components/careerCard';
import { ProjectCard } from './components/projectCard';

export const App = () => {
  console.log('%cContact me here: https://www.linkedin.com/in/karolarizag/', 'color: #fff; background: #a175ed; padding: 5px 10px; border-radius: 5px;')
  console.log('%cMade with React.', 'color: #295873')

  const renderSkillsImages = () => {
    return json.technologies.skills.map((skill, key) => {
      return <img src={`/${skill}.png`} alt="skill" key={key} />
    })
  }

  return <>
    <Header />

    <img src="/section-1.png" alt="section1" className='section-image'/>
    <section className="aboutme-section">
      <div className="section-1-content">
        <h1>{json.home.title}</h1>
        <h2>{json.home.role}</h2>
        <p>{json.home.text}</p>
      </div>
      <img src="/aboutme.png" alt="aboutme" />
    </section>

    <section className="skills-section">
      <img src="/section-2.png" alt="section1" className="section-image"/>
      <h3>{json.technologies.title}</h3>
      <div className="items-skills-section">
        {renderSkillsImages()}
      </div>
    </section>

    <section className="career-section">
      {
        json.career.map((career, key) => {
          return <CareerCard career={career} key={key} />
        })
      }
    </section>

    <img src="/section-3.png" alt="section1" className='section-image'/>
    <section className="projects-section">
      <h3>{json.projects.title}</h3>
      <div className="items">
        {
          json.projects.items.map((project, key) => {
            return <ProjectCard project={project} key={key} />
          })
        } 
      </div>
    </section>

    <section className="contact-section">
      <img src="/contactme.png" alt="contact" />
      {/* {/* <div className="form">
        {/* <h3>{json.getintouch.title}</h3>
        <p>{json.getintouch.name}</p>
        <input type="Name" />
        <p>{json.getintouch.email}</p>
        <input type="Email" />
        <p>{json.getintouch.message}</p>
        <input type="Message" />
        <button><p>{json.getintouch.cta}</p></button>
        <p className="text">{json.getintouch.text}</p> */}
        <div className="icons">
          <img src="/github.png" alt="github" onClick={() => window.open("https://github.com/Karolarizag", "_blank")} />
          <img src="/linkedin.png" alt="linkedin" onClick={() => window.open("https://www.linkedin.com/in/karolarizag/", "_blank")} />
        </div>
      {/* </div> */}
    <img src="/section-4.png" alt="section1" className="section-image"/>
    </section>
  </>
}

