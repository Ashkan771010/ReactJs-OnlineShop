import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = () => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={`https://picsum.photos/id/${i + 1}/1300/700/`} alt={`slide-${i}`} />
      </SwiperSlide>
    );
  }

  
  return (
    <Swiper id="main" navigation pagination slidesPerView={1} loop={true} autoplay={({delay: 3000, disableOnInteraction: false})}>
      {slides}
    </Swiper>
  );
};

export default Slider;
