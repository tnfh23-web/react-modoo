import "../style/Portfolio.css";
import portimg1 from "../assets/img/portfolio_img/portfolio_img_1.png";
import portimg2 from "../assets/img/portfolio_img/portfolio_img_2.png";
import portimg3 from "../assets/img/portfolio_img/portfolio_img_3.png";
import portimg4 from "../assets/img/portfolio_img/portfolio_img_4.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src={portimg1} alt="슬라이드 이미지" />
          <div className="con-box">
            <div className="text-box">
              <p>01 / 04</p>
              <p className="en">Construction</p>
              <p># 건축 # 단지안내</p>
            </div>
            <div className="button-box flex-center">
              <a href="#" className="button">
                <span>바로가기</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg2} alt="슬라이드 이미지" />
          <div className="con-box">
            <div className="text-box">
              <p>02 / 04</p>
              <p className="en">Industry</p>
              <p># 자동차모델제작 # 제조업</p>
            </div>
            <div className="button-box flex-center">
              <a href="#" className="button">
                <span>바로가기</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg3} alt="슬라이드 이미지" />
          <div className="con-box">
            <div className="text-box">
              <p>03 / 04</p>
              <p className="en">Bio & Health</p>
              <p># 건강식품 # 기업</p>
            </div>
            <div className="button-box flex-center">
              <a href="#" className="button">
                <span>바로가기</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg4} alt="슬라이드 이미지" />
          <div className="con-box">
            <div className="text-box">
              <p>04 / 04</p>
              <p className="en">Aerospace</p>
              <p># 방산/항공/위성 부품 # 기업</p>
            </div>
            <div className="button-box flex-center">
              <a href="#" className="button">
                <span>바로가기</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
