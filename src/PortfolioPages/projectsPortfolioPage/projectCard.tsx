export interface ProjectCardProps {
  cardContent: {
    title: string;
    description: string;
    link: string;
    gitHubLink: string;
  }
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="projectCard">
      <h1>{ props.cardContent.title }</h1>
      <p>{ props.cardContent.description }</p>
      <a href={ props.cardContent.link }>Go to app</a>
      <a href={ props.cardContent.gitHubLink }>View this project on GitHub</a>
    </div>
  )
}