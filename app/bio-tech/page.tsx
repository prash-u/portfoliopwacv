"use client";

import Link from "next/link";
import Footer from "../../components/Footer";  // Import the Footer component

export default function BioTech() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        <h1>Bio-Tech Projects</h1>
        <p>Explore the latest in EEG visualization and gene profiling.</p>
      </main>
      <Footer /> {/* Include the Footer component */}
    </main>
  );
}
