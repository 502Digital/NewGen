import SectionHead from './SectionHead'
// import {FaSolarPanel} from 'react-icons/fa'
import { MdOutlineSolarPower } from "react-icons/md";
import {values} from '../data'
import Card from '../UI/Card'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {slideImages} from '../data' 
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'


const Values = () => {
  return (
    <section>
        <div className='values'>
            <div className="container values__container">
                <div>
                <motion.div
                className="values__left"
                transition={{ duration: 1 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              >
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide-effect" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))} 
                </Slide>
                </motion.div>
                <Link to="/services" className='btn lg'>See Our Services</Link>
                </div>
                <div className="values__right">
                    <SectionHead icon={<MdOutlineSolarPower/>} title="Services"/>
                    {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet vero debitis 
                    </p> */}
                    <div>
                    <motion.div
                        className="values__wrapper"
                        transition={{ duration: 2 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    >
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>    
                                </Card>
                            })
                        }
                        </motion.div>
                    </div> 
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Values

// updated