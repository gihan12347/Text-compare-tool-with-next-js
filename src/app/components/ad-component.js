import { useEffect } from "react";
import Script from "next/script";

export default function AdBanner() {
  useEffect(() => {
    try {
      const ads = document.querySelectorAll(".adsbygoogle");
      ads.forEach(ad => {
        if (!ad.getAttribute("data-adsbygoogle-status")) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    } catch (err) {
      console.error("Adsense error: ", err);
    }

    // 🔎 Watch for unfilled ads and collapse them
    const observer = new MutationObserver(() => {
      document.querySelectorAll(".adsbygoogle").forEach(ad => {
        if (ad.getAttribute("data-ad-status") === "unfilled") {
          ad.style.display = "none";
          ad.style.height = "0px";
          ad.style.minHeight = "0px";
        }
      });
    });

    document.querySelectorAll(".adsbygoogle").forEach(ad => {
      observer.observe(ad, { attributes: true });
    });

    return () => observer.disconnect();
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