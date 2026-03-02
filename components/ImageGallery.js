"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageGallery() {
  const images = [
    { src: "/assets/image1.jpg", alt: "Gallery image 1" },
    { src: "/assets/image2.jpg", alt: "Gallery image 2" },
    { src: "/assets/image3.jpg", alt: "Gallery image 3" },
    { src: "/assets/image4.jpg", alt: "Gallery image 4" },
    { src: "/assets/image5.jpg", alt: "Gallery image 5" },
    { src: "/assets/image6.jpg", alt: "Gallery image 6" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getFlexValue = (index, hoveredIndex) => {
    if (hoveredIndex === null) {
      // Default state: [6, 2.2, 1.3, 1, 0.7, 0.5]
      const defaultValues = [6, 2.2, 1.3, 1, 0.7, 0.5];
      return defaultValues[index];
    }

    if (hoveredIndex === 0) {
      // Hovering first image - keep default
      const defaultValues = [6, 2.2, 1.3, 1, 0.7, 0.5];
      return defaultValues[index];
    }

    // Pattern: hovered gets 10, then reverse order for remaining
    const pattern = [0.5, 1, 2, 3, 5, 10];

    if (index === hoveredIndex) {
      return 10; // Hovered image gets 10
    } else if (index < hoveredIndex) {
      return pattern[index]; // Images before hovered get early pattern values
    } else {
      // Images after hovered get reverse order
      const remainingPattern = [5, 3, 2, 1, 0.5];
      const positionInRemaining = index - hoveredIndex - 1;
      return remainingPattern[positionInRemaining] || 0.5;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
      <div className="hidden md:flex flex-row gap-2 h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out"
            style={{
              flex: getFlexValue(index, hoveredIndex),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 20vw"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-accent-500 text-white">
                      <span class="text-2xl font-bold">${index + 1}</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-accent-500 text-white">
                      <span class="text-2xl font-bold">${index + 1}</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
