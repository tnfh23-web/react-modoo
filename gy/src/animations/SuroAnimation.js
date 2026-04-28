import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const suroAnimation = (suroRef) => {
  const ctx = gsap.context(() => {
    gsap.from(".suro-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".suro-title",
        start: "top 80%",
      },
    });
  }, suroRef);

  return () => ctx.revert();
};