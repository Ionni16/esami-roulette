export default function PrivacyPolicyPage() {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <div className="max-w-2xl text-gray-700 text-sm leading-relaxed space-y-4">
          <p>Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>
  
          <p>Questa applicazione, Esami Roulette 🎰, non raccoglie dati personali degli utenti. 
          Nessuna informazione sensibile viene salvata, condivisa o venduta a terze parti.</p>
  
          <p>Eventuali statistiche anonime sull'utilizzo potrebbero essere raccolte per migliorare l'esperienza dell'utente.</p>
  
          <p>Utilizziamo servizi di terze parti come Google AdSense per mostrare annunci pubblicitari. 
          Questi partner possono utilizzare cookie o tecnologie simili per raccogliere informazioni non personali.</p>
  
          <p>Per domande o richieste relative alla privacy, puoi contattarci via email all'indirizzo: [iulianap42@gmail.com]</p>
        </div>
      </div>
    );
  }
  