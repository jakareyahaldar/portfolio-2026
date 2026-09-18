"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function MouseEffect() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const sparksRef = useRef(null);
  const coreRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const sparks = sparksRef.current;
    const core = coreRef.current;

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    // Initial setup
    gsap.set(cursor, {
      x: -100,
      y: -100,
      opacity: 0,
    });

    gsap.set(ring, {
      scale: 1,
      opacity: 0.8,
    });

    gsap.set(sparks, {
      scale: 1,
      opacity: 0,
    });

    // Floating ring animation
    gsap.to(ring, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    gsap.to(ring, {
      scale: 1.2,
      opacity: 0.4,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse movement
    const handleMouseMove = (e) => {
      moveX(e.clientX - 20);
      moveY(e.clientY - 20);

      gsap.to(cursor, {
        opacity: 1,
        duration: 0.2,
      });
    };

    // Click animation
    const handleClick = () => {
      const tl = gsap.timeline();

      // Energy ring expands
      tl.fromTo(
        ring,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 2,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      // Lightning sparks
      tl.fromTo(
        sparks,
        {
          scale: 0.3,
          opacity: 1,
          rotate: 0,
        },
        {
          scale: 1.5,
          opacity: 0,
          rotate: 45,
          duration: 0.45,
          ease: "power2.out",
        },
        "<"
      );

      // Core click pulse
      gsap.fromTo(
        core,
        {
          scale: 1,
        },
        {
          scale: 1.8,
          duration: 0.12,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="
          fixed left-0 top-0
          h-10 w-10
          pointer-events-none
          opacity-0
        "
      >
        {/* Energy Ring */}
        <svg
          ref={ringRef}
          viewBox="0 0 100 100"
          className="
            absolute
            -left-[30px]
            -top-[30px]
            h-[100px]
            w-[100px]
            overflow-visible
          "
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="12 8"
            opacity="0.8"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="3 12"
          />
        </svg>

        {/* Lightning Sparks */}
        <svg
          ref={sparksRef}
          viewBox="0 0 100 100"
          className="
            absolute
            -left-[30px]
            -top-[30px]
            h-[100px]
            w-[100px]
            overflow-visible
          "
        >
          <g
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M50 2 L43 22 L51 18 L45 35" />
            <path d="M98 50 L78 43 L82 51 L65 45" />
            <path d="M50 98 L57 78 L49 82 L55 65" />
            <path d="M2 50 L22 57 L18 49 L35 55" />

            <path d="M15 15 L30 30" />
            <path d="M85 15 L70 30" />
            <path d="M15 85 L30 70" />
            <path d="M85 85 L70 70" />
          </g>
        </svg>

        {/* Cursor Core */}
        <div
          ref={coreRef}
          className="
            absolute
            left-3 top-3
            h-4 w-4
            rounded-full
            border
            border-blue-300
            bg-blue-500/20
            shadow-[0_0_15px_5px_rgba(59,130,246,0.6)]
          "
        />
      </div>
    </div>
  );
}