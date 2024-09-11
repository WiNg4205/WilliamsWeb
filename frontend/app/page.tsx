import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Welcome to <span className="text-blue-500">William's Web</span></div>
      <div className="flex flex-col bg-gray-400">
        <Link href="/factory" className="p-2 hover:bg-white">Factory</Link>
        <Link href="/reviews" className="p-2 hover:bg-white">Reviews</Link>
        <Link href="/studio" className="p-2 hover:bg-white">Studio</Link>        
      </div>
    </>
  );
}
