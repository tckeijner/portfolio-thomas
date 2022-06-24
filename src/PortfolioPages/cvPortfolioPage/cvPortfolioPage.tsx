import { motion } from 'framer-motion';
import cvItems from './cvItems.json';
import CvPortfolioItem from "./cvPortfolioItem";

export default function CvPortfolioPage() {
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
        <div className="cvItems">
          { cvItems.map((item, index) => {
            const isLeft = index % 2 === 0
            const motionProps = getMotionProps(isLeft);
            return (
              <motion.div
                className={ isLeft ? 'cvItemLeftContainer' : 'cvItemRightContainer' }
                key={ index }
                initial={ motionProps.initial }
                whileInView={ motionProps.whileInView }
                transition={ motionProps.transition }>
                <CvPortfolioItem content={ item } itemKey={ index } isLeft={ isLeft }/>
              </motion.div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}