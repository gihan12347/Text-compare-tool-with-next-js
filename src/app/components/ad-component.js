import { useEffect } from "react";
import Script from "next/script";

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error: ", err);
    }

    // Watch for unfilled ads
    const adEl = document.querySelector(".adsbygoogle");
    if (adEl) {
      const observer = new MutationObserver(() => {
        if (adEl.getAttribute("data-ad-status") === "unfilled") {
          adEl.style.display = "none";
          adEl.style.height = "0px";
        }
      });
      observer.observe(adEl, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2010341405700903"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2010341405700903"
        data-ad-slot="5470040138"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}