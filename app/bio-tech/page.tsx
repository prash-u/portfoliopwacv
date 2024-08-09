"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import { getBackgroundStyle } from "../../utils/BackgroundStyles";

export default function BioTech() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={getBackgroundStyle('red')}
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
      <main className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Bio-Tech Projects</h1>
        <p className="mb-8 text-lg">Explore the latest in EEG visualization and gene profiling.</p>
        <section id="projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">EEG Visualization</h3>
              <p>A detailed look into brainwave activities using EEG data.</p>
              <Link href="/pages/eeg" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Live Video Object Detection</h3>
              <p>Real-time detection of objects using advanced AI algorithms.</p>
              <Link href="/pages/object-detection" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pokémon Card Scanner</h3>
              <p>Scan and evaluate your Pokémon card collection with our advanced valuation tool.</p>
              <Link href="/pages/pokemon" className="text-blue-500 mt-4 block">Scan Cards</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Virtual Lab Simulator</h3>
              <p>Simulate different laboratory techniques in an interactive web-based environment.</p>
              <Link href="/pages/virtual-lab" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Drug Interaction Predictor</h3>
              <p>Predict potential adverse drug interactions based on user-inputted medication lists.</p>
              <Link href="/pages/drug-interaction" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Disease Outbreak Prediction Model</h3>
              <p>Predict potential outbreaks of diseases using historical data and machine learning.</p>
              <Link href="/pages/disease-outbreak" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
            <div className="project bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3D Tissue Engineering Visualization</h3>
              <p>Explore different aspects of tissue engineering with a 3D visualization tool.</p>
              <Link href="/pages/3d-tissue" className="text-blue-500 mt-4 block">Learn More</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
