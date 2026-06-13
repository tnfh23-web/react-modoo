import "../style/Strength.css";
import video1 from "../assets/video/strength_1.mp4";
import video2 from "../assets/video/strength_2.mp4";
import video3 from "../assets/video/strength_3.mp4";
import video4 from "../assets/video/strength_4.mp4";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Strength() {
  useEffect(() => {
    gsap.utils.toArray(".strength-card").forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section className="strength-section">
      <div className="strength-grid flex flex-col">
        <div className="strength-card left flex ">
          <div className="video-box">
            <video src={video1} autoPlay muted loop playsInline></video>
          </div>
          <div className="text-box">
            <h2 className="title en">Technology</h2>
            <p className="text">
              MODOO는 최첨단 기술을 활용한 웹사이트 개발과 애플리케이션 제작을 통해,
              <br />
              항상 최신 트렌드와 기술을 반영한 솔루션을 제공합니다.
              <br />
              다양한 기술 스택을 이용하여, 빠르고 효율적인 웹사이트를 구축합니다.
            </p>
          </div>
        </div>
        <div className="strength-card right flex ">
          <div className="text-box">
            <h2 className="title en">Detail</h2>
            <p className="text">
              MODOO는 작은 디테일까지 놓치지 않습니다. <br />
              사용자 경험(UX)과 사용자 인터페이스(UI) 디자인에있어 완벽을 추구하며, <br />
              모든 요소가 고객의 브랜드와 일관되게 최적화될 수 있도록세심한 작업을 진행합니다.
            </p>
          </div>
          <div className="video-box">
            <video src={video2} autoPlay muted loop playsInline></video>
          </div>
        </div>
        <div className="strength-card left flex ">
          <div className="video-box">
            <video src={video3} autoPlay muted loop playsInline></video>
          </div>
          <div className="text-box">
            <h2 className="title en">PRECISION</h2>
            <p className="text">
              MODOO는 고객과의 신뢰를 최우선으로 생각합니다. 프로젝트의 초기 단계부터 완료까지 투명한 소통을 통해,
              <br />
              고객의 기대를 초과하는 결과물을 제공하며, 지속적인 지원과 유지 관리로 파트너십을 이어갑니다.
              <br />
              신뢰는 비즈니스의 성공을 위한 가장 중요한 요소임을 잘 알고 있습니다.
            </p>
          </div>
        </div>
        <div className="strength-card right flex ">
          <div className="text-box">
            <h2 className="title en">SPEED</h2>
            <p className="text">
              MODOO는 항상 고객의 시간을 소중히 여기며, 효율적인 제작 과정으로 빠른 결과를 제공합니다.
              <br />
              엄격한 일정 관리와 전문화된 팀워크로, 고객이 원하는 웹사이트를 신속하게 구축하며,
              <br />
              동시에 고품질을 유지합니다. 빠른 제작은 단순한 속도가 아닌, 품질을 희생하지 않는 효율성을 의미합니다.
            </p>
          </div>
          <div className="video-box">
            <video src={video4} autoPlay muted loop playsInline></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strength;
