import ProjectCard from "./projectCard";
import projects from "./projects.json";

export default function ProjectsPortfolioPage() {
  return (
    <div className="portFolioPageContainer">
      <div className="portFolioPage">
        { projects.map(project => (
          <ProjectCard cardContent={ project }/>
        )) }
      </div>
    </div>
  )
}