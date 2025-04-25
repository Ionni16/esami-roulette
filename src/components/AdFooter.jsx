"use client";

import { useEffect } from "react";

export default function AdFooter() {
  useEffect(() => {
    const ad = document.querySelector(".adsbygoogle.footer");
    if (ad && ad.offsetWidth > 0) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="my-8 w-full flex justify-center">
      <ins
        className="adsbygoogle footer"
        style={{
          display: "block",
          minWidth: "320px",
          minHeight: "100px",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-3402722098398750"
        data-ad-slot="8722581634"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
