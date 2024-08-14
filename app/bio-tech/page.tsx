"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import { getBackgroundStyle } from "../../utils/BackgroundStyles";

export default function BioTech() {
  return (
    <main
      className="flex flex-col min-h-screen items-center justify-between p-6 sm:p-12 lg:p-24"
      style={getBackgroundStyle('#f7f7f7')}
    >
      <header className="w-full mb-8">
        <nav className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
          <ul className="flex justify-center space-x-6 text-gray-800 text-lg font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bio-tech">Bio-Tech Projects</Link></li>
            <li><Link href="/personal-projects">Personal Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Bio-Tech Projects</h1>
        <p className="mb-12 text-lg text-gray-700">Explore the latest in EEG visualization and gene profiling.</p>
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">EEG Visualization</h3>
            <p className="text-gray-700">A detailed look into brainwave activities using EEG data.</p>
            <Link href="/bio-tech/test" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Video Object Detection</h3>
            <p className="text-gray-700">Real-time detection of objects using advanced AI algorithms.</p>
            <Link href="/bio-tech/object-detection" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pokémon Card Scanner</h3>
            <p className="text-gray-700">Scan and evaluate your Pokémon card collection with our advanced valuation tool.</p>
            <Link href="/pages/pokemon" className="text-blue-600 mt-4 block">Scan Cards</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Virtual Lab Simulator</h3>
            <p className="text-gray-700">Simulate different laboratory techniques in an interactive web-based environment.</p>
            <Link href="/pages/virtual-lab" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Drug Interaction Predictor</h3>
            <p className="text-gray-700">Predict potential adverse drug interactions based on user-inputted medication lists.</p>
            <Link href="/pages/drug-interaction" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Disease Outbreak Prediction Model</h3>
            <p className="text-gray-700">Predict potential outbreaks of diseases using historical data and machine learning.</p>
            <Link href="/pages/disease-outbreak" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3D Tissue Engineering Visualization</h3>
            <p className="text-gray-700">Explore different aspects of tissue engineering with a 3D visualization tool.</p>
            <Link href="/pages/3d-tissue" className="text-blue-600 mt-4 block">Learn More</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
