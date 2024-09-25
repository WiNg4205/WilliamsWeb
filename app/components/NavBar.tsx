import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-gray-400">
        <Link href="/" className="p-2 hover:bg-white">
          <Image src="/favicon.ico" alt="HomeIcon" width={24} height={24} />
        </Link>
        <Link href="/projects" className="p-2 hover:bg-white">Projects</Link>
        <Link href="/reviews" className="p-2 hover:bg-white">Reviews</Link>
        <Link href="/studio" className="p-2 hover:bg-white">Studio</Link>
      </div>
    </>
  );
}
