
import React, { useState } from 'react';
import { Menu, Mail, Facebook, Phone, Calendar, Info, ChevronRight, Home, Music2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { RADIO_NAME, RADIO_SLOGAN, EMAIL, SCHEDULE, FACEBOOK_URL, TIKTOK_URL, PHONE_NUMBER } from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'programmes':
        return (
          <div className="flex flex-col h-full space-y-6 pb-20 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2 pt-4">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                Grille des <span className="text-amber-500">Programmes</span>
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />
            </div>

            <div className="grid gap-4">
              {SCHEDULE.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02] ${
                    item.highlight 
                    ? 'bg-gradient-to-r from-red-600/20 to-amber-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)]' 
                    : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className={`font-bold text-xl ${item.highlight ? 'text-amber-400' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-300 font-medium">{item.time}</p>
                    </div>
                    {item.highlight && (
                      <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase animate-pulse">
                        ⭐ Vedette
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl mt-4 flex items-center space-x-4">
               <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" alt="Aristide Amani" className="w-full h-full object-cover" />
               </div>
               <div>
                 <h4 className="text-white font-bold">Flash Info</h4>
                 <p className="text-sm text-slate-400">Retrouvez Aristide Amani pour le point complet de l'actualité.</p>
               </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="w-32 h-32 bg-white/5 rounded-3xl flex items-center justify-center border border-amber-500/30 rotate-3">
               <Info className="text-amber-500" size={60} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-white italic tracking-tighter">À propos de <span className="text-amber-500">NOUS</span></h2>
              <p className="text-slate-300 leading-relaxed text-lg max-w-lg">
                HAMANIEH FLASH est votre fenêtre ouverte sur l'actualité, vue sous un autre angle. 
                Une radio dynamique qui pulse au rythme de la Côte d'Ivoire et du monde.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('home')}
              className="px-10 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-black rounded-full shadow-xl hover:shadow-red-600/20 transition-all uppercase tracking-widest text-sm"
            >
              Retour au Direct
            </button>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Official Logo Integration Layout */}
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
              
              <div className="relative flex flex-col items-center">
                 <div className="flex items-center space-x-0">
                    <div className="bg-gradient-to-b from-red-700 to-red-900 border-2 border-white/20 px-4 py-2 rounded-l-md shadow-2xl">
                       <span className="text-white font-black text-3xl tracking-tighter">HAMANIEH</span>
                    </div>
                    <div className="relative">
                       <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 text-slate-300">
                         <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.03v2.01c-1.28.35-2.29 1.36-2.64 2.64h-2.01c.39-2.39 2.26-4.26 4.65-4.65zm4.65 4.65h-2.01c-.35-1.28-1.36-2.29-2.64-2.64V7.97c2.39.39 4.26 2.26 4.65 4.65z"/></svg>
                       </div>
                       <div className="bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-white/20 px-4 py-2 rounded-r-md shadow-2xl">
                          <span className="text-white font-black text-3xl tracking-tighter italic">FLASH<span className="text-sm font-normal not-italic opacity-80">.net</span></span>
                       </div>
                    </div>
                 </div>
                 <div className="mt-4 bg-[#001a33]/80 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                   <p className="text-amber-500 text-sm font-bold italic tracking-wide">{RADIO_SLOGAN}</p>
                 </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('programmes')}
              className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors"
            >
              <Calendar size={16} className="text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Voir la grille</span>
              <ChevronRight size={14} className="text-slate-500" />
            </button>

            <Player />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#001a33] text-white flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-30 bg-[#001a33]/90 backdrop-blur-lg border-b border-white/5">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <Menu className="text-amber-500" size={28} />
        </button>
        
        <div className="flex items-center space-x-2">
           <div className="w-6 h-6 rounded-full bg-red-600 animate-pulse flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.6)]">
             <div className="w-2 h-2 bg-white rounded-full" />
           </div>
           <span className="font-black text-lg tracking-tighter uppercase italic text-white">LIVE</span>
        </div>

        <button 
          onClick={() => window.location.href = `mailto:${EMAIL}`}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <Mail className="text-amber-500" size={24} />
        </button>
      </header>

      <main className="flex-grow pt-24 pb-20 px-6">
        {renderContent()}
      </main>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={setCurrentPage} 
      />

      <footer className="fixed bottom-0 left-0 w-full h-16 flex items-center justify-around bg-[#001a33]/95 backdrop-blur-xl border-t border-white/10 px-2 z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`relative flex flex-col items-center space-y-1 px-3 py-2 transition-all ${currentPage === 'home' ? 'text-amber-500 scale-110' : 'text-slate-500'}`}
        >
          {currentPage === 'home' && <div className="absolute -top-1 w-8 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#fbbf24]" />}
          <Home size={20} />
          <span className="text-[9px] uppercase font-black tracking-widest">Direct</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('programmes')}
          className={`relative flex flex-col items-center space-y-1 px-3 py-2 transition-all ${currentPage === 'programmes' ? 'text-amber-500 scale-110' : 'text-slate-500'}`}
        >
          {currentPage === 'programmes' && <div className="absolute -top-1 w-8 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#fbbf24]" />}
          <Calendar size={20} />
          <span className="text-[9px] uppercase font-black tracking-widest">Grille</span>
        </button>

        <button 
          onClick={() => window.open(FACEBOOK_URL, "_blank")}
          className="flex flex-col items-center space-y-1 text-slate-500 hover:text-blue-500 transition-colors"
        >
          <Facebook size={20} />
          <span className="text-[9px] uppercase font-black tracking-widest">Facebook</span>
        </button>

        <button 
          onClick={() => window.open(TIKTOK_URL, "_blank")}
          className="flex flex-col items-center space-y-1 text-slate-500 hover:text-pink-500 transition-colors"
        >
          <Music2 size={20} />
          <span className="text-[9px] uppercase font-black tracking-widest">TikTok</span>
        </button>

        <button 
          onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center space-y-1 text-slate-500 hover:text-green-500 transition-colors"
        >
          <Phone size={20} />
          <span className="text-[9px] uppercase font-black tracking-widest">Contact</span>
        </button>
      </footer>
    </div>
  );
};

export default App;
