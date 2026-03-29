import { describe, it, expect, mock, spyOn } from 'bun:test';

// Set environment variable BEFORE ANY IMPORTS that might use it
process.env.GEMINI_API_KEY = 'test-api-key';

// Mocking before import
mock.module('@google/genai', () => {
  return {
    GoogleGenAI: class {
      constructor() {
        process.stdout.write('GoogleGenAI constructor called\n');
      }
      get models() {
        return {
          generateContent: async () => {
            process.stdout.write('generateContent called\n');
            const err = new Error('Some error message');
            (err as any).stack = 'Error: Some error\n at sensitiveFunction (/path/to/secret/file.ts:123:45)\n SecretKey: 12345';
            (err as any).config = {
              headers: {
                Authorization: 'Bearer 12345'
              }
            };
            throw err;
          }
        };
      }
    }
  };
});

import { getLocationProphecy } from './gemini';

describe('getLocationProphecy Security Fix', () => {
  it('should not leak sensitive information in console.error', async () => {
    const consoleSpy = spyOn(console, 'error').mockImplementation(() => {});

    process.stdout.write('Calling getLocationProphecy\n');
    const result = await getLocationProphecy('Jackson Square', 'The Star');
    process.stdout.write(`Result: ${result}\n`);

    expect(consoleSpy).toHaveBeenCalled();

    const firstCallArgs = consoleSpy.mock.calls[0];
    const combinedArgs = firstCallArgs.map(arg =>
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');

    const hasSecret = combinedArgs.includes('SecretKey') || combinedArgs.includes('Bearer');

    if (hasSecret) {
        process.stdout.write('Verification: Sensitive information found in logs as expected (VULNERABLE)\n');
    } else {
        process.stdout.write('Verification: Sensitive information NOT found in logs\n');
    }

    // It should contain the error message but not the full object/stack
    expect(combinedArgs).toContain('Some error message');
    expect(combinedArgs).not.toContain('SecretKey');
    expect(combinedArgs).not.toContain('Bearer');

    consoleSpy.mockRestore();
  });
});
