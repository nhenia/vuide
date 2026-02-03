
export enum Arcana {
  FOOL = "The Fool",
  MAGICIAN = "The Magician",
  EMPRESS = "The Empress",
  EMPEROR = "The Emperor",
  HIEROPHANT = "The Hierophant",
  CHARIOT = "The Chariot",
  HERMIT = "The Hermit",
  WHEEL = "Wheel of Fortune",
  HANGED_MAN = "The Hanged Man",
  DEATH = "The Death",
  DEVIL = "The Devil",
  TOWER = "The Tower",
  MOON = "The Moon",
  JUDGEMENT = "Judgement",
}

export interface NolaLocation {
  id: string;
  name: string;
  arcana: Arcana;
  description: string;
  address: string;
  vibe: string;
  image: string;
  isSecretPortal?: boolean;
}

export type OfferingType = 'NEON_CANDLE' | 'CYBER_ROSE' | 'CRYSTAL_CHIP' | 'VOID_COIN' | 'SPECTRAL_SAGE';

export interface Offering {
  id: string;
  locationId: string;
  type: OfferingType;
  message: string;
  userName: string;
  timestamp: number;
}

export interface CheckIn {
  locationId: string;
  timestamp: number;
}

export interface UserSettings {
  hotelAddress: string;
  userName: string;
}
