import { useEffect, useRef } from "react";
import "../styles/GYU.css";
import { gyuAnimation } from "../animations/GyuAnimation";

function Gyu() {
  const gyuRef = useRef(null);

  useEffect(() => {
    const cleanup = gyuAnimation(gyuRef);
    return cleanup;
  }, []);

  return (
    <section className="gyu" ref={gyuRef}>
      <h1 className="gyu-title">GYU SECTION</h1>
    </section>
  );
}

export default Gyu;
