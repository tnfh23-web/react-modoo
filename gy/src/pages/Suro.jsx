import { useEffect, useRef } from "react";
import "../styles/SURO.css";
import { suroAnimation } from "../animations/SuroAnimation";

function Suro() {
  const suroRef = useRef(null);

  useEffect(() => {
    const cleanup = suroAnimation(suroRef);
    return cleanup;
  }, []);

  return (
    <section className="suro" ref={suroRef}>
      <h1 className="suro-title">SURO SECTION</h1>
    </section>
  );
}

export default Suro;
