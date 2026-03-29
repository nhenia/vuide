import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getLocationProphecy } from './gemini';
import { GoogleGenAI } from '@google/genai';

vi.mock('@google/genai', () => {
  const generateContent = vi.fn();
  return {
    GoogleGenAI: vi.fn().mockImplementation(() => ({
      models: {
        generateContent,
      },
    })),
  };
});

describe('getLocationProphecy', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv };
  });

  it('returns a prophecy on success', async () => {
    process.env.GEMINI_API_KEY = 'test-api-key';
    const mockResponse = { text: 'The neon fog lifts, revealing a path of gold.' };

    // Get the mocked class and instance
    const MockGoogleGenAI = vi.mocked(GoogleGenAI);
    const mockAI = new MockGoogleGenAI({ apiKey: 'test' });
    vi.mocked(mockAI.models.generateContent).mockResolvedValue(mockResponse as any);

    const result = await getLocationProphecy('Jackson Square', 'The Star');

    expect(result).toBe('The neon fog lifts, revealing a path of gold.');
    expect(MockGoogleGenAI).toHaveBeenCalledWith({ apiKey: 'test-api-key' });
  });

  it('returns fallback string when response has no text', async () => {
    process.env.GEMINI_API_KEY = 'test-api-key';
    const MockGoogleGenAI = vi.mocked(GoogleGenAI);
    const mockAI = new MockGoogleGenAI({ apiKey: 'test' });
    vi.mocked(mockAI.models.generateContent).mockResolvedValue({ text: '' } as any);

    const result = await getLocationProphecy('Jackson Square', 'The Star');

    expect(result).toBe('The spirits are silent, but the neon hums your name.');
  });

  it('returns error fallback when generateContent throws', async () => {
    process.env.GEMINI_API_KEY = 'test-api-key';
    const MockGoogleGenAI = vi.mocked(GoogleGenAI);
    const mockAI = new MockGoogleGenAI({ apiKey: 'test' });
    vi.mocked(mockAI.models.generateContent).mockRejectedValue(new Error('API Error'));

    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await getLocationProphecy('Jackson Square', 'The Star');

    expect(result).toBe('The veil is thin; seek the truth within the shadows.');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('returns silent fallback when API key is missing', async () => {
    delete process.env.GEMINI_API_KEY;
    const result = await getLocationProphecy('Jackson Square', 'The Star');
    expect(result).toBe('The spirits are silent, but the neon hums your name.');
  });
});
