import "../style/Contact.css";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: -80,
      anchorPlacement: "top-bottom",
    });

    requestAnimationFrame(() => AOS.refreshHard());

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".contact-count").forEach((count) => {
        const target = Number(count.dataset.target);
        const suffix = count.dataset.suffix || "";
        const number = { value: 0 };

        gsap.to(number, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".left-bottom-box",
            start: "top 78%",
            once: true,
          },
          onUpdate: () => {
            count.textContent = `${Math.floor(number.value).toLocaleString()}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-grid flex">
        <div className=" left-box flex flex-between flex-col">
          <div className="left-top-box">
            <div className="title-box" data-aos="fade-up" data-aos-delay="0" data-aos-anchor=".contact-section">
              <h2 className="en title">Contact</h2>
            </div>
            <div className="text-box" data-aos="fade-up" data-aos-delay="80" data-aos-anchor=".contact-section">
              <p>제작 견적문의</p>
              <p>결과로 증명하는 디지털 경험을 함께 만듭니다.</p>
            </div>
          </div>
          <div className="left-bottom-box flex flex-col">
            <div className="text-box-1">
              <p className="text-1 contact-count" data-target="17">
                0
              </p>
              <p className="en text-2">Years Experience</p>
            </div>
            <div className="text-box-2">
              <p className="text-1 contact-count" data-target="3236" data-suffix="+">
                0
              </p>
              <p className="en text-2">Projects</p>
            </div>
            <div className="text-box-3">
              <p className="text-1 contact-count" data-target="382">
                0
              </p>
              <p className="en text-2">Partners</p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <form action="">
            <div className="form-top-box flex" data-aos="fade-up" data-aos-delay="0" data-aos-anchor=".contact-section">
              <label className="category-list flex-center">
                <input id="HO" type="radio" name="category" />
                <span className="en">Homepage</span>
              </label>
              <label className="flex-center category-list">
                <input id="LO" type="radio" name="category" />
                <span className="en">Logo</span>
              </label>
              <label className="flex-center category-list">
                <input id="VI" type="radio" name="category" />
                <span className="en">Video</span>
              </label>
              <label className="flex-center category-list">
                <input id="SO" type="radio" name="category" />
                <span className="en">Solution</span>
              </label>
            </div>
            <div className="form-cen-box" data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".contact-section">
              <div className="cen-list-box cen-list-box-1 flex">
                <div className="cen-list cen-list-1">
                  <div className="text-box">
                    <p>회사명 / 성명</p>
                  </div>
                  <input className="input-text input-text-1" type="text" placeholder="회사명 / 성명" />
                </div>
                <div className="cen-list cen-list-2">
                  <div className="text-box">
                    <p>업종</p>
                  </div>
                  <input className="input-text input-text-2" type="text" placeholder="업종" />
                </div>
              </div>
              <div className="cen-list-box cen-list-box-2 flex">
                <div className="cen-list cen-list-1">
                  <div className="text-box">
                    <p>연락처</p>
                  </div>
                  <input className="input-text input-text-1" type="text" placeholder="연락처" />
                </div>
                <div className="cen-list cen-list-2">
                  <div className="text-box">
                    <p>이메일</p>
                  </div>
                  <input className="input-text input-text-2" type="text" placeholder="이메일" />
                </div>
              </div>
              <div className="cen-list-box cen-list-box-3 flex">
                <div className="cen-list cen-list-1">
                  <div className="text-box">
                    <p>예산</p>
                  </div>
                  <input className="input-text input-text-1" type="text" placeholder="예산" />
                </div>
                <div className="cen-list cen-list-2">
                  <div className="text-box">
                    <p>운영중인 사이트</p>
                  </div>
                  <input className="input-text input-text-2" type="text" placeholder="운영중인 사이트" />
                </div>
              </div>
            </div>
            <div className="form-last-box" data-aos="fade-up" data-aos-delay="500" data-aos-anchor=".contact-section">
              <div className="last-list flex flex-col">
                <div className="text-box">
                  <p>문의 내용</p>
                </div>
                <input className="last-input-1" type="text" placeholder="제목" />
                <textarea className="textarea-1" placeholder="내용을 입력해주세요."></textarea>
                <div className="button-box">
                  <a href="#" className="button flex-center">
                    <span>문의하기</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
