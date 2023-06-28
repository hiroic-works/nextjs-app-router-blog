"use client";
import Script from "next/script";

export default function googleAnalytics() {
  const ID = "G-H6JTGDQY0G";
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="gtm-script"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtm-init" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${ID}');
      `}</Script>
    </>
  );
}
