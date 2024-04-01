import {Link} from 'react-router-dom'
// import Image from '../images/mclaren-orange.png'
import Image from '../images/wind_turbine_image01.jpg'
import { motion } from "framer-motion";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>Installing Bespoke Renewable Systems For Over 15 Years</h1>
          <p>
          Designing, supplying, installing and maintaining bespoke renewable energy systems for the past nine years with an emphasis on customer satisfaction
          and an ethos of ongoing support and maintenance for our current and future client base.
          </p>
          <Link to="/services" className='btn lg'>See Our Services</Link>
        </div>
        <div>
          <motion.div
            className="main__header-right"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
              duration: 3,
              ease: [0, 0.71, 0.2, 1.01]
            },
              scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          {/* <div className="main__header-circle"></div> */}
          <div className="main__header-image">
            <img src={Image} alt="Orange Mclaren" />
          </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader

// updated