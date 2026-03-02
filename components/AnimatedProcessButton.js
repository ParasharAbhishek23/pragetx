"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnimatedProcessButton() {
  const steps = ["Design", "Develop", "Test"];
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-72 w-full mx-auto mt-10">
      <div className="relative h-14 rounded-md overflow-hidden border border-gray-500 bg-[#dcdcdc]">
        {/* Moving Gradient */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: `
            linear-gradient(
              90deg,
              #d9d9d9 0%,
              #bfbfbf 10%,
              #4a4a4a 50%,
              #bfbfbf 90%,
              #d9d9d9 100%
            )
          `,
            backgroundSize: "200% 100%",
            backgroundPosition: `${(currentStep / (totalSteps - 1)) * 100}% center`,
            transition: "background-position 0.4s ease",
          }}
        />

        {/* TEXTS (fixed positions) */}
        <div className="relative z-10 flex items-center justify-between h-full px-6 text-sm font-semibold">
          {steps.map((step, index) => (
            <span
              key={step}
              className={`transition-all duration-500 ${
                currentStep === index
                  ? "text-white"
                  : "text-gray-400 opacity-20"
              }`}
            >
              {step}
            </span>
          ))}
        </div>

        {/* CAR */}
        <div className="absolute -bottom-1 left-0 right-0 px-6 pb-1">
          <div className="relative w-full h-4">
            <div
              className="absolute transition-all duration-1000 ease-in-out -translate-x-1/2"
              style={{
                left: `${currentStep * 50}%`,
              }}
            >
              <Image
                src="/assets/vector.png"
                alt="Car"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function AnimatedProcessButton() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = ['Design', 'Develop', 'Test'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStep((prev) => (prev + 1) % steps.length);
//     }, 2000); // Change step every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const getCarPosition = () => {
//     switch (currentStep) {
//       case 0: return '0%';
//       case 1: return '50%';
//       case 2: return '100%';
//       default: return '0%';
//     }
//   };

//   const getTextOpacity = (index) => {
//     return currentStep === index ? 'opacity-100' : 'opacity-30';
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <div className="relative bg-linear-to-r from-gray-200 via-gray-100 to-white rounded-lg border border-gray-300 dark:border-gray-500 shadow-lg h-24 overflow-hidden">
//         {/* Text Labels */}
//         <div className="absolute inset-0 flex items-center justify-between px-8">
//           <span className={`text-gray-900 font-semibold text-lg transition-opacity duration-500 ${getTextOpacity(0)}`}>
//             Design
//           </span>
//           <span className={`text-gray-900 font-semibold text-lg transition-opacity duration-500 ${getTextOpacity(1)}`}>
//             Develop
//           </span>
//           <span className={`text-gray-900 font-semibold text-lg transition-opacity duration-500 ${getTextOpacity(2)}`}>
//             Test
//           </span>
//         </div>

//         {/* Car Icon */}
//         <div className="absolute bottom-3 left-0 right-0 px-8">
//           <div className="relative w-full h-8">
//             <div
//               className="absolute transition-all duration-1000 ease-in-out transform -translate-x-1/2"
//               style={{
//                 left: getCarPosition(),
//               }}
//             >
//               <Image
//                 src="/assets/vector.png"
//                 alt="Car icon"
//                 width={32}
//                 height={32}
//                 className="object-contain drop-shadow-md"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.parentElement.innerHTML = `
//                     <div class="w-8 h-8 flex items-center justify-center">
//                       <span class="text-2xl">🚗</span>
//                     </div>
//                   `;
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
