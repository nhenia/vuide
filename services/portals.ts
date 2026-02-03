
import { Offering, OfferingType } from '../types';

const SPECTRAL_OFFERINGS: Offering[] = [
  {
    id: 's1',
    locationId: 'dive-1',
    type: 'NEON_CANDLE',
    message: 'The hum of the dryer is a mantra.',
    userName: 'User_0xDE4D',
    timestamp: Date.now() - 3600000
  },
  {
    id: 's2',
    locationId: 'dive-1',
    type: 'VOID_COIN',
    message: 'Left a piece of my soul in the laundry pile.',
    userName: 'spectre_nola',
    timestamp: Date.now() - 7200000
  },
  {
    id: 's3',
    locationId: 'shop-1',
    type: 'CRYSTAL_CHIP',
    message: 'Found clarity in the damp sock.',
    userName: 'GlitchWitch',
    timestamp: Date.now() - 86400000
  },
  {
    id: 's4',
    locationId: 'dame-1',
    type: 'SPECTRAL_SAGE',
    message: 'Purifying the labyrinth.',
    userName: 'creole_ghost',
    timestamp: Date.now() - 10000000
  }
];

export const portalService = {
  getOfferings(locationId: string): Offering[] {
    const local = JSON.parse(localStorage.getItem(`offerings_${locationId}`) || '[]');
    const spectral = SPECTRAL_OFFERINGS.filter(o => o.locationId === locationId);
    return [...spectral, ...local].sort((a, b) => b.timestamp - a.timestamp);
  },

  addOffering(offering: Omit<Offering, 'id' | 'timestamp'>): Offering {
    const newOffering: Offering = {
      ...offering,
      id: `local_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    };
    const local = JSON.parse(localStorage.getItem(`offerings_${offering.locationId}`) || '[]');
    localStorage.setItem(`offerings_${offering.locationId}`, JSON.stringify([...local, newOffering]));
    return newOffering;
  },

  checkIn(locationId: string): void {
    const checkIns = JSON.parse(localStorage.getItem('checkins') || '[]');
    checkIns.push({ locationId, timestamp: Date.now() });
    localStorage.setItem('checkins', JSON.stringify(checkIns));
  },

  getCheckInCount(locationId: string): number {
    const checkIns = JSON.parse(localStorage.getItem('checkins') || '[]');
    const localCount = checkIns.filter((c: any) => c.locationId === locationId).length;
    // Add some "spectral" checkins
    const spectralBoost = locationId.length % 5 + 2;
    return localCount + spectralBoost;
  }
};
