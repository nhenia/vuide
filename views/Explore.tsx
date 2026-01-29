
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import { Arcana } from '../types';
import { LocationCard } from '../components/LocationCard';

/**
 * View for exploring locations by Arcana.
 * Supports filtering by specific Arcana cards or viewing the full deck.
 */
export const Explore: React.FC = () => {
  const { arcana } = useParams<{ arcana: string }>();
  const [selectedArcana, setSelectedArcana] = useState<Arcana | 'ALL'>('ALL');

  useEffect(() => {
    if (arcana) {
      // Decode URL component to match Enum value
      const decoded = decodeURIComponent(arcana) as Arcana;
      if (Object.values(Arcana).includes(decoded)) {
        setSelectedArcana(decoded);
      } else {
        setSelectedArcana('ALL');
      }
    } else {
        setSelectedArcana('ALL');
    }
  }, [arcana]);

  const filteredLocations = selectedArcana === 'ALL' 
    ? LOCATIONS 
    : LOCATIONS.filter(l => l.arcana === selectedArcana);

  return (
    <div className="py-8 space-y-12 animate-in fade-in duration-700">
      <div className="sticky top-0 bg-[var(--bg-color)]/95 backdrop-blur-md z-30 py-6 -mx-4 px-4 border-b border-[var(--accent-c)]/30 transition-colors landscape:static landscape:border-none landscape:bg-transparent landscape:p-0">
        <h2 className="font-glitch text-2xl text-[var(--accent-c)] mb-4 uppercase tracking-widest text-center landscape:text-left">
            {selectedArcana === 'ALL' ? 'FULL DECK' : selectedArcana}
        </h2>
        
        {/* Scrollable Filter Bar - still useful even if deep linked */}
        <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar landscape:flex-wrap">
          <button 
            onClick={() => setSelectedArcana('ALL')}
            className={`whitespace-nowrap px-4 py-2 text-[12px] font-mono uppercase border transition-all ${selectedArcana === 'ALL' ? 'bg-[var(--accent-c)] text-black border-[var(--accent-c)] font-bold' : 'border-white/20 text-white/60 hover:text-white'}`}
          >
            All Cards
          </button>
          {Object.values(Arcana).map((a) => (
            <button 
              key={a}
              onClick={() => setSelectedArcana(a)}
              className={`whitespace-nowrap px-4 py-2 text-[12px] font-mono uppercase border transition-all ${selectedArcana === a ? 'bg-[var(--accent-p)] text-white border-[var(--accent-p)] font-bold' : 'border-white/20 text-white/60 hover:text-white'}`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-20 landscape:grid-cols-2 lg:grid-cols-3 landscape:gap-8">
        {filteredLocations.length > 0 ? (
            filteredLocations.map(location => (
            <div key={location.id} className="space-y-4">
                <LocationCard location={location} />
            </div>
            ))
        ) : (
            <div className="col-span-full text-center py-20">
                <p className="font-mono text-[var(--accent-p)]">NO CARDS DRAWN IN THIS SUIT.</p>
            </div>
        )}
      </div>
    </div>
  );
};
