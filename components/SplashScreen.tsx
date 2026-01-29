
import React, { useState, useEffect } from 'react';
import { PixelAlligatorIcon } from './CustomIcons';

/**
 * Onboarding splash screen shown to new users.
 * Collects the user's sanctuary address and introduces the app's aesthetic.
 */
export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState<'intro' | 'onboarding'>('intro');
  const [address, setAddress] = useState('');
  const [isDissolving, setIsDissolving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDissolving(true);
      setTimeout(() => setStep('onboarding'), 1200); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = () => {
    if (address.trim()) {
      localStorage.setItem('neon_occult_settings', JSON.stringify({ hotelAddress: address }));
    }
    onComplete();
  };

  if (step === 'intro') {
    return (
      <div className="fixed inset-0 z-[100] bg-[var(--charcoal)] flex items-center justify-center overflow-hidden">
        <div className={`relative w-full h-full flex flex-col items-center justify-center ${isDissolving ? 'animate-dissolve' : ''}`}>
           <div className="relative mb-8">
             <div className="absolute inset-0 bg-[var(--accent-c)] blur-[40px] opacity-20"></div>
             <PixelAlligatorIcon size={120} className="text-[var(--accent-c)] glitch-text relative z-10" />
           </div>
           <h1 className="font-glitch text-6xl text-white glitch-text tracking-widest z-10">NEON OCCULT</h1>
           <span className="font-mono text-[10px] tracking-[0.5em] text-[var(--accent-p)] uppercase mt-4 z-10">Guide to the Glitch</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h2 className="font-glitch text-4xl text-[var(--accent-c)] uppercase tracking-wide">SET YOUR NORTH STAR</h2>
        <p className="font-mono text-sm text-white/80 italic max-w-xs mx-auto">
          Input your sanctuary (hotel) coordinates now. The talisman will guide you back when the night grows too heavy.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <input 
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="ENTER SANCTUARY ADDRESS..."
          className="w-full bg-black/50 border border-[var(--accent-c)] p-4 font-mono text-white focus:outline-none focus:border-[var(--accent-p)] focus:ring-1 focus:ring-[var(--accent-p)] transition-all rounded-none"
        />
        <div className="flex gap-4">
          <button 
            onClick={handleSave}
            className="flex-1 bg-[var(--accent-c)] text-black font-mono font-bold text-lg py-3 hover:bg-[var(--accent-p)] hover:text-white transition-all rounded-none uppercase tracking-wider"
          >
            BIND
          </button>
          <button 
            onClick={onComplete}
            className="flex-1 bg-transparent border border-white/20 text-white/50 font-mono text-xs py-3 hover:text-white hover:border-white transition-all rounded-none uppercase"
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
};
