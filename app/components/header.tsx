import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/icon.svg";

export default function header() {
  return (
    <header className="text-gray-600 border-b">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            className="w-12 h-12 rounded-full"
            src={Logo}
            width={60}
            height={60}
            alt="HW"
          />
          <span className="ml-3 text-xl">Sample Site</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
