import React from 'react';
import Image from '../images/contact.svg'
import { motion } from "framer-motion";
import {BsTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsLinkedin} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im';
import { useRef } from 'react'; 
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05hsh4p', 'template_ks9weas', form.current, 'Zumvf7JOnqcA5ObRP')
    
    e.target.reset()
  };

  return (
    <section>
         <motion.div
                className="contact__form"
                transition={{ duration: 1 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              >
      <div className="container contact__container">
      <aside className="contact__aside">
        <div className="aside__image">
          <img src={Image} alt="Contact Pic" />
        </div>
        <h2>Contact Us</h2>
        <p>
          Get in touch by filling in the contact form in relation to your query, we aim to get back to you in around 1-2 working days.
        </p>
        <ul className="contact__details">
          <li>
            <span>{<BsTelephoneFill/>}</span>
            <h5>01822833729</h5>
          </li>
          <li>
            <a href="mailto:info@newgenerationenergy.co.uk">
            <span>{<BsFillEnvelopeFill/>}</span>
            </a>
            <h5>info@newgenerationenergy.co.uk</h5>
          </li>
          <li>
            <a href="https://www.google.com/maps/dir//new+generation+energy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x486c8b7a91d4bb0f:0x141a0595515ea5dd?sa=X&ved=2ahUKEwiYj-briMeEAxUKRkEAHX6pD6YQ9Rd6BAhOEAA">
            <span>{<ImLocation2/>}</span>
            </a>
            <h5>Tavistock, Devon</h5>
          </li>  
        </ul>
        <ul className="contact__socials">
          <li>
            <a href="https://www.facebook.com/p/New-Generation-Energy-100064005752140/ ">
              <span>{<BsFacebook/>}</span>  
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/new-generation-energy-ltd/about/">
              <span>{<BsLinkedin/>}</span>  
            </a>
          </li> 
        </ul>
      </aside>

      <form ref={form} onSubmit={sendEmail}>
          <div className="form__name">
              <input type="text" name="First Name" placeholder="First Name" required></input>
              <input type="text" name="Last Name" placeholder="Last Name" required></input> 
          </div>
          <input type="email" name="Email Address" placeholder="Your Email Address" required></input>
          {/* <div className='form__postcodes'>
          <input type="text" name="Pickup Postcode" placeholder="Pickup Postcode" required></input>
          <input type="text" name="Drop-off Postcode" placeholder="Drop-off Postcode" required></input>
          </div> */}
          <textarea name="Message" rows="7" placeholder="Include any additional information such as your number or leave a short or detailed message regarding your enquiry." required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>
      </motion.div>
    </section>
  )
}

export default ContactForm


// updated