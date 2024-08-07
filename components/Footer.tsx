"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-transparent text-center">
      <p>&copy; 2023 Prashant Umrekar. All Rights Reserved.</p>
      <div className="social-icons flex justify-center space-x-4">
        <Link href="https://www.instagram.com/prashu_/" target="_blank">
          <Image src="/assets/icons/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="#" target="_blank">
          <Image src="/assets/icons/twitter.png" alt="Twitter" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/prashant-umrekar/" target="_blank">
          <Image src="/assets/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://github.com/username" target="_blank">
          <Image src="/assets/icons/github.png" alt="GitHub" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
}
