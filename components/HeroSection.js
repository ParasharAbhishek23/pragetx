"use client";

import AnimatedProcessButton from "./AnimatedProcessButton";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-8 py-0">
      <div className="text-center space-y-5 flex flex-col items-center justify-center min-h-[40vh] md:min-h-[60vh]">
        <span
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground text-center mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          VISUALS THAT CONVERT
          <br />
          VISITORS INTO CUSTOMERS
        </span>

        <AnimatedProcessButton />
      </div>
    </section>
  );
}
