import { describe, it, expect, vi } from 'vitest';
import { getLocationProphecy } from '../services/gemini';

describe('getLocationProphecy', () => {
  it('should return a prophecy string', async () => {
    const prophecy = await getLocationProphecy('Checkpoint Charlie\'s', 'The Fool');
    expect(typeof prophecy).toBe('string');
    expect(prophecy).toBe('The neon hums a cryptic truth.');
  });
});
