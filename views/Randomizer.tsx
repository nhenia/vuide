
import React, { useState, useEffect } from 'react';
import { TAROT_DECK } from '../constants';
import { TarotCard } from '../types';
import { TarotCardIcon, PixelAlligatorIcon } from '../components/CustomIcons';

export const Randomizer: React.FC = () => {
  const [hand, setHand] = useState<TarotCard[]>([]);
  const [isDealing, setIsDealing] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const lastReading = localStorage.getItem('mardiGrasLimit');
    const today = new Date().toDateString();
    if (lastReading === today) {
      setIsLocked(true);
      // If locked, maybe load previous hand from local storage if we wanted,
      // but the prompt says one spread per 24h.
    }
  }, []);

  const dealCards = () => {
    if (isLocked || isDealing) return;

    setIsDealing(true);
    const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
    const newHand = shuffled.slice(0, 3);
    setHand(newHand);

    // Sequential Reveal Logic
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setRevealedCount(count);
      if (count >= 3) {
        clearInterval(interval);
        setIsDealing(false);
        localStorage.setItem('mardiGrasLimit', new Date().toDateString());
      }
    }, 800);
  };

  return (
    <div className="py-8 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="font-impact text-6xl text-[var(--neon-purple)] text-stroke neon-shadow-purple uppercase">THE SPREAD</h2>
        <p className="text-[var(--emerald-green)] text-[12px] font-mono uppercase tracking-[0.2em] font-bold italic">Three cards reveal your spectral coordinates</p>
      </div>

      {!hand.length && !isLocked && (
        <div className="flex flex-col items-center justify-center py-20 space-y-8">
          <button
            onClick={dealCards}
            className="group relative p-8 transition-transform hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 bg-[var(--neon-purple)]/20 blur-3xl animate-pulse group-hover:bg-[var(--neon-purple)]/40"></div>
            <PixelAlligatorIcon size={120} className="text-[var(--emerald-green)] drop-shadow-[0_0_15px_var(--emerald-green)]" />
            <p className="mt-4 font-impact text-2xl text-[var(--parade-gold)] text-stroke text-center">WAKE THE GATOR</p>
          </button>
        </div>
      )}

      {isLocked && (
        <div className="text-center py-20 border border-dashed border-[var(--neon-purple)]/30 bg-black/40">
           <p className="font-impact text-3xl text-[var(--parade-gold)] text-stroke uppercase">THE SPIRITS REST</p>
           <p className="font-mono text-[11px] text-[var(--muted-text)] mt-2">RETURN IN 24 HOURS FOR A NEW DESTINY</p>
        </div>
      )}

      <div className="space-y-20">
        {hand.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className={`transition-all duration-1000 transform ${idx < revealedCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          >
            <div className="text-center mb-6">
              <span className="text-[14px] font-impact text-[var(--parade-gold)] text-stroke uppercase tracking-widest border-x border-[var(--emerald-green)] px-6">
                Position {idx + 1}
              </span>
            </div>

            {/* Tarot Card Display */}
            <div className="relative w-full aspect-[2/3] max-w-[300px] mx-auto bg-black border-4 border-[var(--parade-gold)] shadow-[0_0_20px_var(--neon-purple)] overflow-hidden">
                <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover contrast-150 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                        className="font-impact text-4xl leading-tight text-white text-stroke uppercase neon-shadow-purple"
                        style={{ color: card.vibeColor }}
                    >
                        {card.name}
                    </h3>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
