import { Metadata } from "next";
import ContactForm from "@/app/components/contact-form";
import BaseContainer from "@/app/components/base-container";
import Breadclumb from "@/app/components/breadcrumb";

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
  const breadclumbs = [
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <BaseContainer>
      <div className="mb-4">
        <Breadclumb lists={breadclumbs} />
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
          お問い合わせ
        </h1>
        <ContactForm />
      </div>
    </BaseContainer>
  );
}
