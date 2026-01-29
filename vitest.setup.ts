import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock process.env for tests
process.env.API_KEY = 'test-api-key';
process.env.GEMINI_API_KEY = 'test-api-key';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock sessionStorage and localStorage if needed
const storageMock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: vi.fn((key: string) => storage[key] || null),
    setItem: vi.fn((key: string, value: string) => { storage[key] = value; }),
    removeItem: vi.fn((key: string) => { delete storage[key]; }),
    clear: vi.fn(() => { storage = {}; }),
    length: 0,
    key: vi.fn((index: number) => Object.keys(storage)[index] || null),
  };
};

Object.defineProperty(window, 'sessionStorage', { value: storageMock() });
Object.defineProperty(window, 'localStorage', { value: storageMock() });

// Mock GoogleGenAI
vi.mock('@google/genai', () => {
  return {
    GoogleGenAI: class {
      models = {
        generateContent: vi.fn().mockResolvedValue({
          text: "The neon hums a cryptic truth."
        })
      };
    }
  };
});
