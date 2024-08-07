"use client";

import Link from "next/link";

export default function PersonalProjects() {
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
        <h1>Personal Projects</h1>
        <p>Discover innovative object detection and Pokémon card valuation.</p>
      </main>
      <footer>
        <p>&copy; 2023 Prashant Umrekar. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
