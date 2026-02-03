
import React, { useState, useEffect } from 'react';
import { X, Send, Ghost, Zap, Sparkles, MessageSquare } from 'lucide-react';
import { NolaLocation, Offering, OfferingType } from '../types';
import { portalService } from '../services/portals';

interface PortalOverlayProps {
  location: NolaLocation;
  onClose: () => void;
}

const OFFERING_DATA: { type: OfferingType, label: string, icon: string }[] = [
  { type: 'NEON_CANDLE', label: 'NEON CANDLE', icon: '🕯️' },
  { type: 'CYBER_ROSE', label: 'CYBER ROSE', icon: '🌹' },
  { type: 'CRYSTAL_CHIP', label: 'CRYSTAL CHIP', icon: '💎' },
  { type: 'VOID_COIN', label: 'VOID COIN', icon: '🪙' },
  { type: 'SPECTRAL_SAGE', label: 'SPECTRAL SAGE', icon: '🌿' },
];

export const PortalOverlay: React.FC<PortalOverlayProps> = ({ location, onClose }) => {
  const [offerings, setOfferings] = useState<Offering[]>([]);
  const [message, setMessage] = useState('');
  const [selectedType, setSelectedType] = useState<OfferingType>('NEON_CANDLE');
  const [checkInCount, setCheckInCount] = useState(0);
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  useEffect(() => {
    setOfferings(portalService.getOfferings(location.id));
    setCheckInCount(portalService.getCheckInCount(location.id));
  }, [location.id]);

  const handleOffer = () => {
    if (!message.trim()) return;

    // Attempt to get username from local storage, fallback to default
    const settingsRaw = localStorage.getItem('nhen_user_settings');
    let userName = 'MODERN_MYSTIC';
    if (settingsRaw) {
      try {
        const settings = JSON.parse(settingsRaw);
        if (settings.userName) userName = settings.userName;
      } catch (e) {
        console.error('Failed to parse user settings', e);
      }
    }

    const newOff = portalService.addOffering({
      locationId: location.id,
      type: selectedType,
      message: message.trim(),
      userName: userName
    });
    setOfferings([newOff, ...offerings]);
    setMessage('');
  };

  const handleCheckIn = () => {
    setIsCheckingIn(true);
    setTimeout(() => {
      portalService.checkIn(location.id);
      setCheckInCount(portalService.getCheckInCount(location.id));
      setIsCheckingIn(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-lg bg-[var(--bg-teal)]/20 border border-[var(--accent-c)]/30 flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(45,212,191,0.1)]">

        {/* Header */}
        <div className="p-6 border-b border-[var(--accent-c)]/30 flex justify-between items-center bg-black/40">
          <div>
            <h2 className="font-glitch text-2xl text-white uppercase tracking-widest leading-none mb-1">
              PORTAL: <span className="text-[var(--accent-c)]">{location.name}</span>
            </h2>
            <p className="font-mono text-[10px] text-[var(--accent-p)] uppercase tracking-[0.2em]">
              {checkInCount} SPECTRES DETECTED IN THIS RADIUS
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar">

          {/* Check-In Section */}
          <div className="text-center space-y-4">
             <button
                onClick={handleCheckIn}
                disabled={isCheckingIn}
                className={`w-full py-4 border-2 border-[var(--accent-c)] font-glitch text-xl uppercase tracking-[0.3em] transition-all relative overflow-hidden group ${isCheckingIn ? 'bg-[var(--accent-c)] text-black' : 'text-[var(--accent-c)] hover:bg-[var(--accent-c)] hover:text-black'}`}
             >
                {isCheckingIn ? (
                  <span className="animate-pulse">SYNCHRONIZING...</span>
                ) : (
                  <>
                    <Zap className="inline-block mr-2 mb-1 pixel-icon" size={20} />
                    PULSE CHECK-IN
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
             </button>
          </div>

          {/* Offerings List */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
              <Ghost size={14} /> SPECTRAL OFFERINGS
            </h3>

            <div className="space-y-3">
              {offerings.map(offering => (
                <div key={offering.id} className="bg-black/40 border-l-2 border-[var(--accent-p)] p-4 animate-in slide-in-from-left-4 duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lg" title={offering.type}>
                      {OFFERING_DATA.find(d => d.type === offering.type)?.icon}
                    </span>
                    <span className="font-mono text-[9px] text-white/30 uppercase">
                      {new Date(offering.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-[13px] font-mono text-white/90 italic mb-2">"{offering.message}"</p>
                  <p className="text-[10px] font-mono text-[var(--accent-c)] uppercase tracking-widest">— {offering.userName}</p>
                </div>
              ))}
              {offerings.length === 0 && (
                <p className="text-center py-8 font-mono text-[10px] text-white/20 uppercase">No offerings left in this dimension yet.</p>
              )}
            </div>
          </div>

        </div>

        {/* Footer / Add Offering */}
        <div className="p-6 bg-black/60 border-t border-[var(--accent-c)]/30 space-y-4">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {OFFERING_DATA.map(d => (
              <button
                key={d.type}
                onClick={() => setSelectedType(d.type)}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 border font-mono text-[10px] transition-all ${selectedType === d.type ? 'bg-[var(--accent-p)] border-[var(--accent-p)] text-white' : 'border-white/10 text-white/40 hover:border-white/30'}`}
              >
                <span>{d.icon}</span>
                <span className="whitespace-nowrap">{d.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleOffer()}
              placeholder="LEAVE A MESSAGE FOR THE VOID..."
              className="w-full bg-black/50 border border-white/10 focus:border-[var(--accent-c)] p-4 pr-12 font-mono text-xs text-white placeholder:text-white/20 focus:outline-none transition-all"
            />
            <button
              onClick={handleOffer}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent-c)] hover:text-white transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
