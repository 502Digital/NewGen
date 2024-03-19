// import Header from '../../components/Header'
// import HeaderImage from '../../images/car1.jpeg'
import './services.css'
import SectionHead from '../../components/SectionHead';
import { IoIosBuild } from "react-icons/io";
import Image1 from '../../images/solar_image04.jpg';
import Image2 from '../../images/turbine_image03.jpg';
import Image3 from '../../images/heatpump_image02.jpg';
import Image4 from '../../images/biomass_image02.jpg';
import Service_cards from '../../components/Service_cards';
const data = [
  {
  img: Image1,
  heading: "Solar PV & Thermal",
  para: "Solar PV offers one of the simplest approaches for clean and green energy generation. At New Generation Energy we offer roof or ground mount systems, standard grid tied systems and we also specialise in off-grid systems.We have nine years of installation experience enabling us to ensure that your system is installed and commissioned to a very high standard. Each system is designed for the particular roof with attention to appropriate roof fixings, wind and snow loading and reducing the potential for shading.",
  show: "Solar thermal can supply up to 60% of your homes hot water needs. The flat plate panels or evacuated tubes are mounted to either a roof or a simple ground mount frame. Insulated solar pipes take the heat from the modules to a solar pump set where it is pumped to your hot water cylinder.The solar flat plate collector and evacuated tubes that we fit are reliable and have long warranties to ensure that you can lower your water heating bills and reduce your Co2 footprint for years to come.",
  },

  {
    img: Image2,
    heading: "Wind Turbines",
    para: "A correctly sited turbine on a good wind site will produce clean and green energy generation that will continue to produce all year round. We have been installing wind turbines for nearly a decade and are experts in our field. We offer a full turn-key solution from an initial site assessment to the switch on of the turbine for your peace of mind. For commercial buildings we would suggest the fitting of a 6 Kw or larger turbine.",
    show: "Our service includes an initial visit to your site to enable us to assess it for potential planning issues and positioning of turbine. High users of power such as dairy farmers who use most of the generated power can achieve good return on investments from their turbines. We specialise in designing systems to integrate with your wind turbine to enable you to utilise excess power which could for example be used to heat wash-down tanks or power heat pumps for hot water production. We offer a free consultation so please contact us to see what New Generation Energy can do for your business..",
  },

  {
    img: Image3,
    heading: "Heat Pumps",
    para: "Heat pumps are a reliable and efficient technology with low running costs and low maintenance.  Heat pumps use heat from the air (air-source) or heat from fluid pumped through pipes in the ground (ground source). Our specialist heat pump design knowledge is supported by 9 years of installation and maintenance experience. We take care to ensure the system is fully designed, installed and commissioned to a high standard to meet all MCS criteria. We install ground and air source heat pumps ranging from small single bed properties sized to cascade systems suitable for commercial buildings.",
    show: "We offer a range of top quality domestic size heat pumps, all of which are eligible for Domestic Renewable Heat Incentive (RHI).  All of our heat pumps come with comprehensive warranty cover. Our service would include a full site assessment enabling us to undertake a heat loss analysis of your home so that we can fully understand your heating and hot water needs.",
  },
  {
    img: Image4,
    heading: "Biomass",
    para: "Domestic biomass systems can be used to provide space heating and hot water for your property. Biomass is a clean and sustainable fuel source and produces less carbon than fossil fuels. It has economic as well as ecological benefits, due to reduced fuel bills, as well as the support of the Renewable Heat Incentive (RHI). Biomass boilers can be simple self fill systems or have fully automated fuel supply and intelligent controls and they can be a great solution for those who are currently using oil or LPG (Liquid Petroleum Gas) for their heating.",
    show: "Biomass fuel, used to power biomass stoves and boilers, comes in three main forms: logs, wood chip and wood pellets. Your location, size of system and personal requirements will dictate which fuel is best for you. Our domestic range of boilers includes a range of small to large systems from Okofen, Hargassner, MCZ and Klover.",
  },
]

const Services = () => {
  return (
    <>
    {/* <Header title='Our Services' image={HeaderImage}>
    </Header> */}
    <div className="services__header">
    <SectionHead icon={<IoIosBuild/>} title="NGE Services"/>
    </div>
    <div className="services__body">
    <div className='container services__container'>
    {
      data.map((item, index) => {
        return <Service_cards key={index} item={item} />;
      })
    }      
    </div>
    </div>
    </> 
  );
}

export default Services
