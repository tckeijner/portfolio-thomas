import bio from "./bio.json"
import { motion } from 'framer-motion';

export default function BioPortfolioPage() {
  function getMotionProps(isLeft: boolean) {
    return {
      initial: { x: isLeft ? -100 : 100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { bounce: 0, duration: 1 }
    }
  }

  return (
    <div className="portFolioPageContainer">
      <div className="portFolioPage">
        { bio.map((bioElement, index) => {
          const motionProps = getMotionProps(index % 2 === 0)
          return (
            <div key={ index } className="bioPageContent">
              <img src={ bioElement.src } alt={ "" } className="bioPagePhoto"/>
              <motion.div className="bioPageTextCard" key={ index }
                          initial={ motionProps.initial }
                          whileInView={ motionProps.whileInView }
                          transition={ motionProps.transition }>
                { bioElement.bioText }</motion.div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}