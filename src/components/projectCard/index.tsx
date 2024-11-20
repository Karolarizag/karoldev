import "./projectCard.css"

interface projectProps {
  image: string, 
  title: string, 
  finished: boolean, 
  repository: string, 
  link: string
}

export const ProjectCard = ({project}: {project: projectProps}) => {
  return <div className="project-card">
    <img src={project.image} alt={project.image} />
    <div className="title">
      <h3>{project.title}</h3>
      <div className={project.finished ? "green" : "red"}>{project.finished ? "Finished" : "In progress"}</div>
    </div>
    <div className="icons">
      <img src="/github-findme.png" alt="github" onClick={() => window.open(project.repository, "_blank")} />
      <img src="/link-findme.png" alt="link" onClick={() => window.open(project.link, "_blank")} />
    </div>
  </div>
}