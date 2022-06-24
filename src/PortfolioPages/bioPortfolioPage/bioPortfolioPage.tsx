import bio from "./bio.json"

export default function BioPortfolioPage() {
  return (
    <div className="portFolioPageContainer">
      <div className="portFolioPage">
        <div className="portFolioPageHeader"><h1>About me</h1></div>
        { bio.map((bioElement, index) => (
          <div key={ index } className="bioPageContent">
            <img src={ bioElement.src } alt={ "" } className="bioPagePhoto"/>
            <div className="bioPageTextCard">{ bioElement.bioText }</div>
          </div>
        )) }
      </div>
    </div>
  )
}