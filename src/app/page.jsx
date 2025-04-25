"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { useCallback } from "react";

const categories = {
  prof: [
    "Assente",
    "Incazzato",
    "In ritardo di 40 minuti",
    "Ha mandato l'assistente",
    "In pigiama su Teams",
    "Esiste solo su leggenda orale",
    "Ti ignora con rispetto",
    "Ti fa parlare e poi dice 'non è corretto'"
  ],
  domande: [
    "Solo sugli appunti che non ho",
    "A caso dal libro",
    "Dritte al cuore",
    "Facili ma psicologicamente devastanti",
    "Con trabocchetti",
    "Basate su una slide dimenticata",
    "Orali con sguardo da giudice di XFactor",
    "Scritta con 0 tempo e 120 domande"
  ],
  stato: [
    "Panico calmo",
    "Motivazione finta",
    "Rassegnazione lucida",
    "Overthinking a mille",
    "Modalità sopravvivenza",
    "Sto bene (bugia)",
    "Nervoso ma non so perché",
    "In pace col fallimento"
  ],
  esito: [
    "18 ma firmi col sangue",
    "20 pieno di vergogna",
    "30L e trauma a vita",
    "Rimandato con rispetto",
    "Scappato prima dell'appello",
    "Appello cancellato, ma scopri dopo",
    "Bocciato perché hai respirato",
    "Voto misterioso: 'ne parliamo via mail'"
  ]
};

export default function EsamiRoulette() {
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const resultRef = useRef(null);
  const cleanRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFireworksPreset(engine);
  }, []);

  const giraRoulette = () => {
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setResult(null);
    setShowParticles(false);
    setTimeout(() => {
      setResult({
        prof: getRandom(categories.prof),
        domande: getRandom(categories.domande),
        stato: getRandom(categories.stato),
        esito: getRandom(categories.esito),
      });
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 2000);
    }, 1000);
    setCopied(false);
  };

  const copiaRisultato = () => {
    if (!result) return;
    const testo = `🎓 Esami Roulette 🎰\n👨‍🏫 Prof: ${result.prof}\n📚 Domande: ${result.domande}\n🧠 Stato mentale: ${result.stato}\n📊 Esito finale: ${result.esito}`;
    navigator.clipboard.writeText(testo);
    setCopied(true);
  };

  const condividi = (piattaforma) => {
    if (!result) return;
    const testo = `🎓 Esami Roulette 🎰\nProf: ${result.prof}\nDomande: ${result.domande}\nStato: ${result.stato}\nEsito: ${result.esito}`;
    const encodedText = encodeURIComponent(testo);
    if (piattaforma === "whatsapp") {
      window.open(`https://wa.me/?text=${encodedText}`, "_blank");
    } else if (piattaforma === "instagram") {
      alert("Puoi condividere lo screen generato sulle tue storie IG!");
    }
  };

  const generaScreenshot = async () => {
    if (!cleanRef.current) return;
    const canvas = await html2canvas(cleanRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
    });
    const link = document.createElement("a");
    link.download = "esami-roulette.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{ preset: "fireworks" }}
          className="absolute inset-0 z-0"
        />
      )}

      <h1 className="text-5xl font-extrabold mb-6 text-center animate-pulse tracking-tight z-10">🎓 Esami Roulette 🎰</h1>

      <Card className="w-full max-w-2xl text-lg shadow-xl z-10">
        <CardContent className="space-y-4 py-8">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={JSON.stringify(result)}
                initial={{ opacity: 0, scale: 0.9, y: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.6, y: 30, filter: "blur(8px)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-xl font-medium text-left bg-gradient-to-br from-white to-gray-100 text-black p-6 rounded-xl shadow-lg border space-y-4"
                ref={resultRef}
              >
                <div className="flex flex-col space-y-2">
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    👨‍🏫 <strong>Prof:</strong> {result.prof}
                  </p>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    📚 <strong>Domande:</strong> {result.domande}
                  </p>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    🧠 <strong>Stato:</strong> {result.stato}
                  </p>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    📊 <strong>Esito:</strong> {result.esito}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 text-base"
              >
                Premi il bottone per scoprire il tuo destino universitario 👇
              </motion.p>
            )}
          </AnimatePresence>

          {result && (
            <div
              ref={cleanRef}
              className="absolute left-[-9999px] top-0 bg-white text-black p-6 w-[500px] text-left text-lg"
            >
              <p><strong>👨‍🏫 Prof:</strong> {result.prof}</p>
              <p><strong>📚 Domande:</strong> {result.domande}</p>
              <p><strong>🧠 Stato mentale:</strong> {result.stato}</p>
              <p><strong>📊 Esito finale:</strong> {result.esito}</p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button onClick={giraRoulette} className="text-xl px-6 py-2 animate-bounce font-semibold">🎲 Gira la Roulette</Button>
          </div>

          {result && (
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              <Button onClick={copiaRisultato} variant="outline" className="text-sm px-3">{copied ? "✅ Copiato!" : "📋 Copia risultato"}</Button>
              <Button onClick={() => condividi("whatsapp")} variant="outline" className="text-sm px-3">📲 WhatsApp</Button>
              <Button onClick={() => condividi("instagram")} variant="outline" className="text-sm px-3">📸 Instagram</Button>
              <Button onClick={generaScreenshot} variant="outline" className="text-sm px-3">🖼️ Scarica Screenshot</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}






