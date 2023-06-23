import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/icon.svg";
import Navigation from "@/app/components/navigation";
import { getAllCategory } from "@/app/libs/posts";

export default async function Header() {
  const { contents: categories } = await getAllCategory();
  return (
    <header className="border-b">
      <div className="container mx-auto flex flex-wrap p-5 justify-between md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center">
          <Image
            className="w-12 h-12 rounded-full"
            src={Logo}
            width={60}
            height={60}
            alt="HW"
          />
          <span className="ml-3 text-xl">Sample Blog</span>
        </Link>
        <Navigation categories={categories} />
      </div>
    </header>
  );
}
