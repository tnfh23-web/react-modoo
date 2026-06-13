import "../style/Hero.css";
import logo from "../assets/img/footer_img/logo.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const lodingImages = Object.entries(
  import.meta.glob("../assets/img/loding/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
)
  .sort(([prevPath], [nextPath]) => {
    const prevNum = Number(prevPath.match(/_(\d+)/)?.[1] || 0);
    const nextNum = Number(nextPath.match(/_(\d+)/)?.[1] || 0);
    return prevNum - nextNum;
  })
  .map(([, src]) => src);

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoding, setIsLoding] = useState(true);
  const [isIntroDone, setIsIntroDone] = useState(false);
  const sectionRef = useRef(null);
  const lodingBoxRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    const lodingTimer = setTimeout(() => {
      const target = heroImgRef.current?.getBoundingClientRect();

      if (!target || !lodingBoxRef.current) {
        setIsLoding(false);
        setIsIntroDone(true);
        return;
      }

      gsap.to(lodingBoxRef.current, {
        top: target.top,
        left: target.left,
        width: target.width,
        height: target.height,
        duration: 1.15,
        ease: "power3.inOut",
        onComplete: () => {
          setIsLoding(false);
          setIsIntroDone(true);
        },
      });
    }, 2600);

    const imageTimer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % lodingImages.length);
    }, 400);

    return () => {
      clearTimeout(lodingTimer);
      clearInterval(imageTimer);
    };
  }, []);

  useEffect(() => {
    const preventScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
    };

    const preventScrollKey = (event) => {
      const scrollKeys = [" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"];

      if (scrollKeys.includes(event.key)) {
        preventScroll(event);
      }
    };

    document.documentElement.style.overflow = isLoding ? "hidden" : "";
    document.documentElement.style.overscrollBehavior = isLoding ? "none" : "";
    document.body.style.overflow = isLoding ? "hidden" : "";
    document.body.style.overscrollBehavior = isLoding ? "none" : "";
    document.body.style.touchAction = isLoding ? "none" : "";

    if (isLoding) {
      window.scrollTo(0, 0);
      window.addEventListener("wheel", preventScroll, {
        passive: false,
        capture: true,
      });
      window.addEventListener("touchmove", preventScroll, {
        passive: false,
        capture: true,
      });
      window.addEventListener("keydown", preventScrollKey, {
        passive: false,
        capture: true,
      });
    }

    return () => {
      window.removeEventListener("wheel", preventScroll, { capture: true });
      window.removeEventListener("touchmove", preventScroll, { capture: true });
      window.removeEventListener("keydown", preventScrollKey, { capture: true });
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.touchAction = "";
    };
  }, [isLoding]);

  useEffect(() => {
    if (!isIntroDone) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-motion",
        { y: 4.8 * 10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.18,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isIntroDone]);

  return (
    <>
      {isLoding && (
        <div className="loding-section">
          <div className="loding-img-box" ref={lodingBoxRef}>
            <img src={lodingImages[activeIndex]} alt="" />
          </div>
        </div>
      )}

      <section className="hero-section" ref={sectionRef}>
        <div className="hero-grid flex flex-between">
          <div className="left-box">
            <h1 className="hero-logo hero-motion">
              <img src={logo} alt="MODOO" />
            </h1>

            <div className="hero-text-box">
              <p className="kr hero-motion">
                기획부터 개발, 마케팅까지
                <br />
                비즈니스 성과로 연결되는 웹을 만듭니다.
              </p>
              <div className="en hero-motion">
                <p>RESULT-DRIVEN</p>
                <p>DIGITAL SOLUTION</p>
              </div>
            </div>
          </div>

          <div className="right-box">
            <div
              className={`hero-loding-img ${isIntroDone ? "active" : ""}`}
              ref={heroImgRef}
            >
              <img src={lodingImages[activeIndex]} alt="MODOO visual" />
            </div>
          </div>
        </div>

        <div className="hero-marquee-box hero-motion">
          <div className="hero-marquee-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="hero-marquee-group" key={`fill-${index}`}>
                <span className="red">What Drives Your Business?</span>
                <span className="white">We Drives your business.</span>
              </div>
            ))}
          </div>
          <div className="hero-marquee-track outline">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="hero-marquee-group" key={`outline-${index}`}>
                <span className="red">What Drives Your Business?</span>
                <span className="white">We Drives your business.</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
