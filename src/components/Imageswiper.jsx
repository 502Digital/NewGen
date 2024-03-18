import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade' 
import { motion } from "framer-motion";

import SectionHead from "./SectionHead"
import {AiFillCar} from 'react-icons/ai'

const Imageswiper = () => {

  return (
    <section>
        <motion.div
                className="imageswiper"
                transition={{ duration: 0.8 }}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
        >
        <div className="container imageswiper__container">
            <SectionHead icon={<AiFillCar/>} title="Swipe To See More" className="imageswiper__head"/>
            <Swiper
                modules={[Navigation, EffectFade, Pagination]}
                navigation
                pagination={{ clickable: true }}
                effect
                speed={800}
                slidesPerView={1}
                loop
                className="myswiper"
            >
                <SwiperSlide className='swiperslide'>
                    <img src={require("../images/car1.jpg")} alt={"Car 1 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car2.jpg")} alt={"Car 2 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car3.jpg")} alt={"Car 3 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car4.jpg")} alt={"Car 4 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car5.jpg")} alt={"Car 5 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car6.jpg")} alt={"Car 6 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car7.jpg")} alt={"Car 7 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car8.jpg")} alt={"Car 9 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car9.jpg")} alt={"Car 9 Pic"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../images/car10.jpg")} alt={"Car 10 Pic"}/>
                </SwiperSlide>
            </Swiper>
        </div>
        </motion.div>
    </section>
  )
}

export default Imageswiper;

// updated