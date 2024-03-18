// import {AiFillCar} from 'react-icons/ai'
import {FaSolarPanel} from 'react-icons/fa';
import { GiWindTurbine } from "react-icons/gi";
import { MdHeatPump } from "react-icons/md";
import { FcBiomass } from "react-icons/fc";





export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Services",
        path: '/services'
    },
    // {
    //     name: "Case Studies",
    //     path: '/casestudies'
    // },
    {
        name: "Contact",
        path: '/contact'
    }
]









// export const programs = [
//     {
//         id: 1,
//         icon: <SiOpenaigym/>,
//         title: "Program One",
//         info: "This is the day that the lord has made. We will rejoice!",
//         path: "/programs/111"
//     },
//     {
//         id: 2,
//         icon: <SiOpenaigym/>,
//         title: "Program Two",
//         info: "This is the day that the lord has made. We will rejoice!",
//         path: "/programs/222"
//     },
//     {
//         id: 3,
//         icon: <SiOpenaigym/>,
//         title: "Program Three",
//         info: "This is the day that the lord has made. We will rejoice!",
//         path: "/programs/333"
//     },
//     {
//         id: 4,
//         icon: <SiOpenaigym/>,
//         title: "Program Four",
//         info: "This is the day that the lord has made. We will rejoice!",
//         path: "/programs/444"
//     }
// ]

const renewable1 = require('./images/biomass_image01.jpg')
const renewable2 = require('./images/heat_pump_image01.jpg')
const renewable3 = require('./images/heat_pump_image02.jpg')
const renewable4 = require('./images/solar_image02.jpg')
const renewable5 = require('./images/solar_image03.jpg')
const renewable6 = require('./images/turbine_image02.jpg')




export const slideImages = [
     {
        url: renewable1,
        caption: 'Slide 1'
      },
      {
        url: renewable2,
        caption: 'Slide 2'
      },
      {
        url: renewable3,
        caption: 'Slide 3'
      },
      {
        url: renewable4,
        caption: 'Slide 4'
      },
      {
        url: renewable5,
        caption: 'Slide 5'
      },
      {
        url: renewable6,
        caption: 'Slide 6'
      },
      
]



export const values = [
    {
        id: 1,
        icon: <FaSolarPanel/>,
        title: "Solar PV & Thermal",
        desc: "Installation of Solar PV & Thermal. Bespoke to the projects requirements"
    },
    {
        id: 2,
        icon: <GiWindTurbine/>,
        title: "Wind Turbines",
        desc: "Installation of wind turbines up to 30Kw in prodcution"
    },
    {
        id: 3,
        icon: <MdHeatPump/>,
        title: "Heat Pumps",
        desc: "Residential and commerical installs, from small to larger projects"
    },
    {
        id: 4,
        icon: <FcBiomass/>,
        title: "Biomass",
        desc: "Biomass boiler installs for small to large home heating"
    }
]





// export const testimonials = [
//     {
//         id: 1,
//         name: "Diana Ayi",
//         quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//         job: "Student",
//         avatar: require("./images/avatar1.jpg")
//     },
//     {
//         id: 2,
//         name: "Daniel Vinyo",
//         quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "Software Egineer",
//         avatar: require("./images/avatar2.jpg")
//     },
//     {
//         id: 3,
//         name: "Edem Quist",
//         quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "University Lecturer",
//         avatar: require("./images/avatar3.jpg")
//     },
//     {
//         id: 4,
//         name: "Grace Lavoe",
//         quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "Talking Parrot",
//         avatar: require("./images/avatar4.jpg")
//     },
//     {
//         id: 5,
//         name: "Nana Yaa Dankwa",
//         quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//         job: "Pharmacist",
//         avatar: require("./images/avatar5.jpg")
//     }
// ]



const Driver1 = require('./images/nge_favicon.jpg')
const Driver2 = require('./images/nge_favicon.jpg')

export const drivers = [
    {
        id: 1,
        image: Driver1,
        name: 'Andrew Metcalf',
        job: 'Director',
        socials: ['https://www.facebook.com/p/New-Generation-Energy-100064005752140/ ', 'https://www.linkedin.com/company/new-generation-energy-ltd/about//', 'mailto:info@newgenerationenergy.co.uk']
    },
    {
        id: 2,
        image: Driver2,
        name: 'Sonja Metcalf',
        job: 'Office Manager',
        socials: ['https://www.facebook.com/p/New-Generation-Energy-100064005752140/ ', 'https://www.linkedin.com/company/new-generation-energy-ltd/about//', 'mailto:info@newgenerationenergy.co.uk']
    },
    // {
    //     id: 3,
    //     image: Driver3,
    //     name: 'Edem Quist',
    //     job: 'Flexibility Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // }
]