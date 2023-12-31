import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-purple-900 flex justify-between items-center p-6 w-full text-purple-100 font-serif">
      <Link href="/" className=" font-bold text-3xl">
        <h1>Home</h1>
      </Link>
      <div className=" flex justify-between gap-5">
      <Link href="/about" className=" font-bold">
        <h3>About</h3>
      </Link>
      <Link href="/new" className=" font-bold">
        <h3>Nueva tarea</h3>
      </Link>
      </div>
    </div>
  );
}
