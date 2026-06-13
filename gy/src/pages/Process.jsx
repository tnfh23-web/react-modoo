import "../style/Process.css";
import proimg1 from "../assets/img/process_img/sec_5_img_1.png";
import proimg2 from "../assets/img/process_img/sec_5_img_2.png";
import proimg3 from "../assets/img/process_img/sec_5_img_3.png";
import proimg4 from "../assets/img/process_img/sec_5_img_4.png";
import proimg5 from "../assets/img/process_img/sec_5_img_5.png";
import proimg6 from "../assets/img/process_img/sec_5_img_6.png";
import arrow_left from "../assets/img/process_img/arrow_left.svg";
import arrow_right from "../assets/img/process_img/arrow_right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Process() {
  return (
    <section className="process-section">
      <div className="process-grid flex">
        <div className="left-box">
          <div className="text-box">
            <h2 className="title en">PROCESS</h2>
            <p className="text">MODOO의 프로세스를 소개합니다.</p>
            <div className="button-box">
              <a href="#" className="button flex-center">
                <span>OUR PROCESS</span>
              </a>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="arrow_left">
            <img src={arrow_left} alt="화살표" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={28}
            navigation={{
              prevEl: ".arrow_left",
              nextEl: ".arrow_right",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src={proimg1} alt="프로세스 이미지" />
              <p>
                <span>01</span> 상담 및 전략문의
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src={proimg2} alt="프로세스 이미지" />
              <p>
                <span>02</span> 계약서 작성 및 계약금 결제
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src={proimg3} alt="프로세스 이미지" />
              <p>
                <span>03</span> 메인시안 제작 및 자료 수집 진행
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src={proimg4} alt="프로세스 이미지" />
              <p>
                <span>04</span> 홈페이지 제작
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src={proimg5} alt="프로세스 이미지" />
              <p>
                <span>05</span> 홈페이지 제작 완료 1차 점검 요청
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src={proimg6} alt="프로세스 이미지" />
              <p>
                <span>06</span> 도메인 연결 후 최종 오픈
              </p>
            </SwiperSlide>
          </Swiper>
          <div className="arrow_right">
            <img src={arrow_right} alt="화살표" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Process;
