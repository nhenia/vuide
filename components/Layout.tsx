
import React, { ReactNode, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Settings } from 'lucide-react';
import { NorthStar } from './NorthStar';
import { IsolatedStarIcon, TarotCardIcon } from './CustomIcons';
import { SplashScreen } from './SplashScreen';

interface LayoutProps { children: ReactNode; }

/**
 * Main layout component that wraps the application content.
 * Handles the splash screen visibility and provides navigation.
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('seen_splash');
    if (hasSeen) setShowSplash(false);
  }, []);

  const finishSplash = () => {
    setShowSplash(false);
    sessionStorage.setItem('seen_splash', 'true');
  };

  if (showSplash) return <SplashScreen onComplete={finishSplash} />;

  return (
    <div className="min-h-screen relative flex flex-col items-center landscape:flex-row landscape:items-start">
      {/* Background is handled by body to ensure coverage */}

      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center z-10 landscape:w-auto landscape:fixed landscape:top-0 landscape:left-0 landscape:h-16 landscape:z-50 landscape:bg-black/50 backdrop-blur-sm">
        <h1 className="font-glitch text-4xl tracking-widest text-[var(--accent-c)] glitch-text uppercase landscape:text-3xl">NEON OCCULT</h1>
        <div className="flex items-center gap-3 landscape:hidden">
          <NavLink to="/settings" className="p-2 text-[var(--accent-p)] hover:text-white transition-colors">
            <Settings size={22} className="pixel-icon" strokeWidth={2} />
          </NavLink>
        </div>
      </header>
      
      {/* Landscape Settings */}
      <div className="hidden landscape:flex fixed top-4 right-4 z-50 gap-3">
        <NavLink to="/settings" className="p-2 bg-black/50 border border-[var(--accent-p)] rounded-none text-[var(--accent-p)] hover:text-white transition-colors">
            <Settings size={22} className="pixel-icon" strokeWidth={2} />
        </NavLink>
      </div>

      <main className="w-full max-w-md px-4 flex-grow z-10 pb-36 landscape:max-w-full landscape:w-full landscape:pl-24 landscape:pr-8 landscape:pt-20 landscape:pb-8">
        {children}
      </main>

      <NorthStar />

      {/* Navigation & Footer */}
      <nav className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-[var(--accent-c)]/50 px-6 py-4 flex justify-between items-end z-50 
                      landscape:top-0 landscape:left-0 landscape:w-20 landscape:h-full landscape:flex-col landscape:justify-center landscape:border-t-0 landscape:border-r landscape:gap-12 landscape:py-0 landscape:items-center">
        
        <div className="flex w-full justify-around items-center landscape:flex-col landscape:gap-10 landscape:w-auto">
            <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-2 transition-all ${isActive ? 'text-[var(--accent-c)] scale-110 drop-shadow-[0_0_5px_var(--accent-c)]' : 'text-white/60'}`}>
            <IsolatedStarIcon size={24} className="pixel-icon" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold landscape:hidden">Deck</span>
            </NavLink>
            <NavLink to="/explore" className={({ isActive }) => `flex flex-col items-center gap-2 transition-all ${isActive ? 'text-[var(--accent-c)] scale-110 drop-shadow-[0_0_5px_var(--accent-c)]' : 'text-white/60'}`}>
            <Compass size={24} className="pixel-icon" strokeWidth={2} />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold landscape:hidden">Arcana</span>
            </NavLink>
            <NavLink to="/random" className={({ isActive }) => `flex flex-col items-center gap-2 transition-all ${isActive ? 'text-[var(--accent-c)] scale-110 drop-shadow-[0_0_5px_var(--accent-c)]' : 'text-white/60'}`}>
            <TarotCardIcon size={24} className="pixel-icon" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold landscape:hidden">Deal</span>
            </NavLink>
        </div>

        {/* Glitch Footer Link */}
        <div className="absolute bottom-16 right-0 left-0 flex flex-col items-center justify-center pointer-events-none landscape:bottom-6 landscape:left-1/2 landscape:-translate-x-1/2 landscape:pointer-events-auto">
           <span className="text-[10px] font-mono text-[var(--accent-p)] opacity-70 mb-1 pointer-events-auto">•´¯`•» ηℍ𝐞𝓷 𝔫Ⓗᵉ几 ή𝐇𝐞η «•´¯`•</span>
           <a href="https://instagram.com/_nh_en" target="_blank" rel="noopener noreferrer" className="text-[12px] font-mono text-[var(--accent-c)] hover:text-white transition-colors pointer-events-auto">
              @_nh_en
           </a>
        </div>

      </nav>
    </div>
  );
};
