import cvItems from './cvItems.json';
import '../../styles/timeline.scss';

export default function CvPortfolioPage() {
  return (
    <div className="portFolioPage cvPortfolioPage">
      <h1>Curriculum Vitae</h1>

      <div className="timeline">
        {cvItems.map((item, index) => {
          const className = index % 2 === 0 ? 'container left' : 'container right';
          return (
            <div className={className}>
              <div className="date">{item.date}</div>
              <i className="icon fa fa-home"></i>
              <div className="content">
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}