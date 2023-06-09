"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [success, setSuccess] = useState<Boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = name.current?.value;
    const emailVal = email.current?.value;
    const messageVal = message.current?.value;

    if (!nameVal || !emailVal || !messageVal) {
      alert("入力項目は全て必須入力です。");
      return;
    }

    alert(`※ダミー送信です※
          お名前: ${nameVal}
          Eメール: ${emailVal}
          お問い合わせ内容: ${messageVal}`);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center leading-relaxed">
        <p className="mb-4">
          お問い合わせありがとうございます。
          <br />
          送信完了しましたので、
          <br className="sm:hidden" />
          お返事まで今しばらくお待ちください。
        </p>
        <Link className="underline sm:hover:no-underline" href="/">
          トップページへ戻る
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap sm:-m-2">
      <div className="py-2 sm:px-2 w-full sm:w-1/2">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm">
            お名前 <span className="text-red-500">（必須）</span>
          </label>
          <input
            ref={name}
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-3 leading-8"
          />
        </div>
      </div>
      <div className="py-2 sm:px-2 w-full sm:w-1/2">
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm">
            Eメール <span className="text-red-500">（必須）</span>
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-3 leading-8"
          />
        </div>
      </div>
      <div className="py-2 sm:px-2 w-full">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm">
            お問い合わせ内容 <span className="text-red-500">（必須）</span>
          </label>
          <textarea
            ref={message}
            id="message"
            name="message"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-60 text-base outline-none py-1 px-3 resize-none leading-6"
          ></textarea>
        </div>
      </div>
      <div className="py-2 sm:px-2 w-full">
        <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          送信
        </button>
      </div>
    </form>
  );
}
