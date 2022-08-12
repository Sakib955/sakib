import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

function TypeWriter ({ title, className }) {
  const textRef = useRef();

  useEffect(() => {
    // Typewriter instance
    new Typewriter(textRef.current, {
      loop: true,
      delay: 75,
      strings: title,
      autoStart: true,
    });
  }, [textRef, title]);

  return <span className={`text-[#42e2ff] font-[700] ${className}`} ref={textRef}></span>;
};

export default TypeWriter;
