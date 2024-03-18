import {Link} from 'react-router-dom'
import Logo from '../images/nge-logo.jpg'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
// import Yell from '../images/yell__icon.jpg'
import {SiGooglemaps} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
        <section className="quick__contact">
            <div className="container Qcontact__container">
            {/* <h2>Contact & Review Us</h2> */}
                <div className="Qcontact__wrapper">
                    <a className="social__icons email__icon" href="newgenerationenergy.co.uk" target="_blank" rel="noreferrer noopner"><MdEmail/></a>
                    <a className="social__icons messenger__icon" href="https://www.facebook.com/messages/t/457966877624839" target="_blank" rel="noreferrer noopner"><BsMessenger/></a>
                    <a className="social__icons whatsapp__icon" href="https://wa.me/+447896560654" target="_blank" rel="noreferrer noopner"><IoLogoWhatsapp/></a>
                    <a className="social__icons gmaps__icon" href="https://www.google.com/maps/dir//new+generation+energy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x486c8b7a91d4bb0f:0x141a0595515ea5dd?sa=X&ved=2ahUKEwiYj-briMeEAxUKRkEAHX6pD6YQ9Rd6BAhOEAA" target="_blank" rel="noreferrer noopner"><SiGooglemaps/></a>
                    {/* <a className="social__icons yell__icon" href="https://www.yell.com/biz/mac-field-global-solutions-ltd-poole-10490681/" target="_blank" rel="noreferrer noopner"><img src={Yell} alt="Yell Icon"/></a> */}
                        
                </div>
                </div>
                {/* <div className="container Qcontact__container">
            <h2>View Our Links</h2>
                <div className="Qcontact__wrapper">
                    <a className="social__icons alllinks__icon" href="https://allmylinks.com/mfgs" target="_blank" rel="noreferrer noopner"><img src={Logo} alt="MFGS Logo"/></a>
                    <a className="social__icons gmaps__icon" href="https://www.google.com/maps/place/Mac-FieldGlobalSolutions/@50.7401793,-1.8978069,12z/data=!3m1!4b1!4m6!3m5!1s0x20e39e86915fd691:0xc439504fd901b773!8m2!3d50.7401793!4d-1.8978069!16s/g/11tf9jhnn0?entry=ttu" target="_blank" rel="noreferrer noopner"><SiGooglemaps/></a>
                </div>     
            </div>     */}
        </section>


        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />    
                </Link>
                <p>
                Thank you for visiting the New Generation Energy website, 
                feel free contact us with any queries via the contact links or speak to us on social media. 
                </p>
                {/* <p><a href="https://www.freepik.com/free-vector/towing-concept-illustration_13104656.htm#query=car%20towing&position=7&from_view=search&track=ais">Images by storyset</a> on Freepik
                </p> */}
            </article>
            <article>
                <div className="footer__socials">
                    <a className="social__icons messenger__icon" href="https://www.linkedin.com/company/new-generation-energy-ltd/about/" target="_blank" rel='noreferrer noopener'><BsLinkedin/>
                    </a>
                    <a className="social__icons messenger__icon" href="https://www.facebook.com/p/New-Generation-Energy-100064005752140/" target="_blank" rel='noreferrer noopener'><BsFacebook/>
                    </a>        
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/Casestudies">Case Studies</Link>
                <Link to="/Contact">Contact</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact Us</Link>
                {/* <Link to="/s">Support</Link> */}
            </article>
        </div>
        <div className="footer__copyright">
            <small>2024 502Digital &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer

// updated