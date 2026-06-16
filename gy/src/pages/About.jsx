import "../style/About.css";
import arrowBig from "../assets/img/about_img/play_arrow_filled_2.svg";
import arrowSmall from "../assets/img/about_img/play_arrow_filled.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutTextList = [
  [
    { text: "MODOO", type: "bold" },
    { text: "는 수원에 위치한 ", type: "light" },
    { text: "웹에이전시", type: "bold" },
    { text: "로", type: "light" },
  ],
  [
    {
      text: "기획, 디자인, 개발부터 마케팅까지 원스톱으로 제공하며,",
      type: "light",
    },
  ],
  [
    { text: "고객님의 비즈니스 성공을 위한 ", type: "light" },
    { text: "최적의 디지털 경험", type: "bold" },
    { text: "을 만듭니다.", type: "light" },
  ],
];

function AboutTextLine({ line }) {
  return (
    <p className="about-text-line">
      <span className="about-text-base">
        {line.map((part) => (
          <span className={`about-word ${part.type}`} key={`base-${part.text}`}>
            {part.text}
          </span>
        ))}
      </span>
      <span className="about-text-fill" aria-hidden="true">
        {line.map((part) => (
          <span className={`about-word ${part.type}`} key={`fill-${part.text}`}>
            {part.text}
          </span>
        ))}
      </span>
    </p>
  );
}

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-text-fill", {
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.set(".about-bar-fill", { scaleY: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3200",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(
          ".about-text-fill",
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            stagger: 0.75,
            ease: "none",
          },
          0,
        )
        .to(
          ".about-bar-fill",
          {
            scaleY: 1,
            duration: 2.5,
            ease: "none",
          },
          0,
        );

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-text-box kr">
          {aboutTextList.map((line, index) => (
            <AboutTextLine line={line} key={`about-line-${index}`} />
          ))}
        </div>

        <div className="about-portfolio-box">
          <div className="about-bar">
            <span className="about-bar-fill"></span>
          </div>
          <div className="about-link-box">
            <span className="en">Portfolio</span>
            <div className="arrow-box">
              <img src={arrowBig} alt="" className="arrow-big" />
              <img src={arrowSmall} alt="" className="arrow-small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
