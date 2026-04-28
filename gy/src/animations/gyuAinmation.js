import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gyuAnimation = (gyuRef) => {
  const ctx = gsap.context(() => {
    gsap.from(".gyu-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gyu-title",
        start: "top 80%",
      },
    });
  }, gyuRef);

  return () => ctx.revert();
};
