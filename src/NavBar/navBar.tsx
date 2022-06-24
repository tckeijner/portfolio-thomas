import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import '../styles/styles.scss'
import '../styles/colors.scss'
import routes from './navBarContent.json';
import { motion, MotionStyle, useViewportScroll, Variants } from 'framer-motion';

export default function NavBar() {
  const location = useLocation()
  let [scrollDown, setScrollDown] = useState<'up' | 'down'>('up');

  const navBarStyles: MotionStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
  }

  const variants: Variants = {
    up: {
      opacity: 1,
      transition: { bounce: 0, duration: 1 }
    },
    down: {
      opacity: 0,
      transition: { bounce: 0, duration: 1.5 }
    },
  }

  const linkVariants: Variants = {
    up: { x: 0, opacity: 1, transition: { duration: 1 } },
    down: { x: 500, opacity: 0, transition: { duration: 1 } }
  }

  const leftLabelVariants: Variants = {
    up: { opacity: 1, x: 0, transition: { duration: 1 } },
    down: { opacity: 0, x: -100, transition: { duration: 1 } }
  }

  const rightLabelVariants: Variants = {
    up: { opacity: 1, x: 0, transition: { duration: 1 } },
    down: { opacity: 0, x: 100, transition: { duration: 1 } }
  }

  useViewportScroll().scrollY.onChange(scroll => {
    setScrollDown(scroll > 60 ? 'down' : 'up');
  })

  return (
    <div>
      <motion.div className='navBar' variants={ variants } animate={ scrollDown } style={ navBarStyles }>
        <motion.div className='leftLabel' variants={ leftLabelVariants } animate={ scrollDown }>
          Thomas
        </motion.div>
        <motion.div className='navLinks' variants={ linkVariants } animate={ scrollDown }>
          { routes.map((route, index) => (
            <div key={ index } className={ location.pathname === route.path ? 'navLink activeLink' : 'navLink' }><Link
              to={ route.path }>{ route.name }</Link></div>
          )) }
        </motion.div>
        <motion.div className="rightLabel" variants={ rightLabelVariants } animate={ scrollDown }>
          Portfolio
        </motion.div>
      </motion.div>
    </div>
  )
}