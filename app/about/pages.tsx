"use client";

import Link from "next/link";
import Footer from "../../components/Footer";  
import { getBackgroundStyle } from "../../utils/backgroundStyles";  

export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={getBackgroundStyle('lightblue')}
    >
      <header>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bio-tech">Bio-Tech Projects</Link></li>
            <li><Link href="/personal-projects">Personal Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>About Me</h1>
        <p>
          I am Prashant Umrekar, a Scientist with a profound expertise in biotechnology and a passion for innovation. With over a decade of experience, I have led projects in EEG visualization, gene expression profiling, and AI-driven object detection. My journey in the scientific community is marked by a relentless pursuit of excellence and a commitment to advancing the frontiers of bioinformatics.
        </p>
        <p>
          My professional endeavors are complemented by a keen interest in photography and data science, where I blend artistic vision with analytical rigor. Whether unraveling the complexities of life&#39;s moments through my lens, I thrive on pushing boundaries and embracing new challenges.
        </p>
        <p>
          Connect with me on <Link href="https://www.linkedin.com/in/prashant-umrekar/" target="_blank">LinkedIn</Link> to explore my professional achievements, or follow me on <Link href="https://www.instagram.com/prashu_/" target="_blank">Instagram</Link> to get a glimpse of my creative side. Let&#39;s collaborate and innovate together.
        </p>
      </main>
      <Footer /> 
    </main>
  );
}
