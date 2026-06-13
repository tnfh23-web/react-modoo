import "../style/Marquee.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Marquee() {
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    track.innerHTML += track.innerHTML;

    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(tweenRef.current, {
      timeScale: 0.35,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(tweenRef.current, {
      timeScale: 1,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  return (
    <div className="divider">
      <div
        className="text-marquee-box"
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-marquee-track" ref={trackRef}>
          <a href="#">
            <span>WEB</span>
          </a>
          <a href="#">
            <span>•</span>
          </a>
          <a href="#">
            <span>BRAND</span>
          </a>
          <a href="#">
            <span>•</span>
          </a>
          <a href="#">
            <span>MARKETING</span>
          </a>
          <a href="#">
            <span>•</span>
          </a>
          <a href="#">
            <span>SOLUTION</span>
          </a>
          <a href="#">
            <span>•</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
