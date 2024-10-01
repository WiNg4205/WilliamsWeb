"use client"

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="flex flex-row justify-center items-center bg-gray-400">
        <Link href="/" className="p-2 hover:bg-white">
          <Image src="/favicon.ico" alt="HomeIcon" width={24} height={24} />
        </Link>
        <Link href="/projects" className={`p-2 ${pathname === '/projects' ? 'bg-white' : ''}`}>Projects</Link>
        <Link href="/reviews" className={`p-2 ${pathname === '/reviews' ? 'bg-white' : ''}`}>Reviews</Link>
        <Link href="/studio" className={`p-2 ${pathname === '/studio' ? 'bg-white' : ''}`}>Studio</Link>
      </div>
    </>
  );
}
