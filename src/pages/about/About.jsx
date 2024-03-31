// import Header from '../../components/Header'
// import HeaderImage from '../../images/car1.jpeg'
import './about.css'
import StoryImage from '../../images/nge_about_world.jpg'
import {drivers} from '../../data'
// import {BsInstagram} from 'react-icons/bs'
// import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Driver from '../../components/Driver'
import SectionHead from '../../components/SectionHead'
import { FcBusinessContact } from "react-icons/fc";
import {FiUsers, FiSmile} from 'react-icons/fi'
import { IoIosBusiness, IoIosBuild } from "react-icons/io";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    {/* <Header title='About Us' image={HeaderImage}>
    </Header> */}
    <div className="about__header">
    <SectionHead icon={<IoIosBusiness/>} title="About NGE"/>
    </div>
    <section className="about__story">
      <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Pic" />
            <div className="services_link">
            <Link to="/services" className='btn lg'>See Our Services</Link>
            </div>
          </div>
          <div className="about__section-content">
            <h1>A Little About New Generation Energy</h1>
            <p>
            Established in 2007 by Andrew Metcalf and based in the South West we have installed hundreds of renewable systems, from small photovoltaic arrays to large commercial biomass boilers.
            </p>
            <div className="about__cards">
                <article className="about__card">
                  <span className="about__icon">
                  {<IoIosBuild/>}
                  </span>
                  <h4>750+</h4>
                  <p>Installations</p>
                </article>


                <article className="about__card">
                  <span className="about__icon">
                  {<FiSmile/>}
                  </span>
                  <h4>50+</h4>
                  <p>Happy Clients</p>
                </article>


                <article className="about__card">
                  <span className="about__icon">
                    {<FiUsers/>}
                  </span>
                  <h4>5+</h4>
                  <p>Employees</p>
                </article>

            </div>
          </div>
      </div>
    </section>

    <section className="drivers">
    <div className="about__head">
    <SectionHead icon={<FcBusinessContact/>} title="Meet The Team"/>
    </div>
      <div className="container drivers__container">
        {
          drivers.map(({id, image, name, job, socials}) => {
            return <Driver key={id} image={image} name={name} job={job}
            socials={
                [
                  // {icon: <BsInstagram/>, link: socials[0]},
                  // {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <BsFacebook/>, link: socials[0]},
                  {icon: <BsLinkedin/>, link: socials[1]},
                  {icon: <MdEmail/>, link: socials[2]},
                ]
            }/>
          })
        }  
      </div>  
    </section>
    </>
  )
}

export default About