"use client";

import React from "react";
import Script from "next/script";

export default function AdBanner() {
  return (
    <div
      className="w-full flex justify-center my-6"
      role="complementary"
      aria-label="advertising"
    >
      {/* Contenitore dove l’ad network inietterà il banner */}
      <div
        id="container-3d104fc908000cabf94df11fbb2ae3c8"
        style={{
          width: "100%",
          maxWidth: 468,    // o 320/300 a seconda dei formati
          minHeight: 250,   // riserva spazio; cambia se sai il formato
          margin: "0 auto",
        }}
      />

      {/* Script del network */}
      <Script
        id="profitableratecpm-banner"
        src="https://pl27179633.profitableratecpm.com/3d104fc908000cabf94df11fbb2ae3c8/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
        onLoad={() => console.log("[AdBanner] Profitablerate script loaded")}
        onError={(e) => console.error("[AdBanner] errore caricando script", e)}
      />
    </div>
  );
}
