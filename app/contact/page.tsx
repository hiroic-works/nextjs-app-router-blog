import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/app/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "当ブログのお問い合わせページです。",
  openGraph: {
    title: "Contact",
    description: "当ブログのお問い合わせページです。",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <section className="text-gray-700">
      <div className="hidden sm:block h-80 overflow-hidden">
        <Image
          className="w-full object-cover object-center"
          src="/contact-header.jpg"
          width={2048}
          height={1360}
          alt=""
        />
      </div>
      <div className="container px-5 py-12 sm:py-16 mx-auto flex flex-col">
        <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
          お問い合わせ
        </h1>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
