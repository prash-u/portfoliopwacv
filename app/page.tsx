"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { getBackgroundStyle } from "../utils/BackgroundStyles";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      backgroundImage: "url('/assets/images/banner1.jpg')",
      title: "Discover Cutting-Edge Bio-Tech Projects",
      description: "Explore the latest in EEG visualization and gene profiling.",
    },
    {
      backgroundImage: "url('/assets/images/banner2.jpg')",
      title: "Innovative Object Detection",
      description: "Experience real-time video analysis with advanced AI.",
    },
    {
      backgroundImage: "url('/assets/images/banner3.jpg')",
      title: "Pokémon Card Valuation",
      description: "Discover the value of your Pokémon card collection.",
    },
    // Add more slides as needed
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={getBackgroundStyle('#ffffff')}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: slides[currentIndex].backgroundImage,
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
            <h1 className="text-2xl md:text-4xl font-bold">
              {slides[currentIndex].title}
            </h1>
            <p className="mt-4 text-sm md:text-lg">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#8592;
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#8594;
        </button>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/bio-tech"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Bio-Tech Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore the latest in EEG visualization and gene profiling.
          </p>
        </a>

        <a
          href="/personal-projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Personal Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Discover innovative object detection and Pokémon card valuation.
          </p>
        </a>

        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about Prashant Umrekar, a senior scientist with a passion for innovation.
          </p>
        </a>
      </div>

      <Footer />
    </main>
  );
}
