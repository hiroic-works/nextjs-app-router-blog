import { Metadata } from "next";
import ContactForm from "@/app/components/contact-form";
import BaseContainer from "@/app/components/base-container";

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
    <BaseContainer>
      <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
        お問い合わせ
      </h1>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <ContactForm />
      </div>
    </BaseContainer>
  );
}
