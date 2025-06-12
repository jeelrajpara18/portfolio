"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function CursorNew() {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 })
    const targets = gsap.utils.toArray(".ball")

    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      })
    })

    // Add click animation
    window.addEventListener("mousedown", () => {
      gsap.to(targets, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out",
      })
    })

    window.addEventListener("mouseup", () => {
      gsap.to(targets, {
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      })
    })
  }, [])

  return (
    <div className="pointer-events-none">
      {/* Main cursor - largest with glow */}
      <div className="ball fixed top-0 left-0 w-6 h-6  rounded-full bg-[#002543] shadow-[0_0_20px_#0477e26a,0_0_40px_#0477e26a,0_0_60px_#0477e26a] opacity-90"></div>

      {/* Trail balls with decreasing opacity and size */}
      <div className="ball fixed top-0 left-0 w-5 h-5 rounded-full bg-[#0477e26a] shadow-[0_0_15px_#0477e26a,0_0_30px_#0477e26a] opacity-70"></div>

      <div className="ball fixed top-0 left-0 w-5 h-5 rounded-full bg-[#0477e26a] shadow-[0_0_12px_#0477e26a,0_0_24px_#0477e26a] opacity-50"></div>

      <div className="ball fixed top-0 left-0 w-5 h-5 rounded-full bg-[#0477e26a] shadow-[0_0_10px_#0477e26a,0_0_20px_#0477e26a] opacity-35"></div>

      <div className="ball fixed top-0 left-0 w-5 h-5 rounded-full bg-[#0477e26a] shadow-[0_0_8px_#0477e26a,0_0_16px_#0477e26a] opacity-20"></div>

      {/* Additional subtle trail */}
      <div className="ball fixed top-0 left-0 w-3 h-3 rounded-full bg-[#0477e26a] shadow-[0_0_6px_#0477e26a] opacity-15"></div>
    </div>
  )
}
