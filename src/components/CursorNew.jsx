import gsap from 'gsap';
import React, { useEffect } from 'react'

function CursorNew() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor", {
        x: clientX - 10,
        y: clientY - 10,
        duration: 1,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="h-[20px] w-[20px] bg-white rounded-full fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
};


export default CursorNew