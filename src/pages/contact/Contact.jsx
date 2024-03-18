import './contact.css'
// import Header from '../../components/Header'
// import HeaderImage from '../../images/car1.jpeg'
import ContactForm from '../../components/ContactForm'
import SectionHead from '../../components/SectionHead'
import {BsTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
    {/* <Header title="Get In Touch" image={HeaderImage}>
    </Header> */}
    <div className="contact__head">
    <SectionHead icon={<BsTelephoneFill/>} title="Contact Us"/>
    </div>
    <ContactForm></ContactForm>

    </>
  )
}

export default Contact