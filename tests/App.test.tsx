import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
import React from 'react';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
  });

  it('renders the app', () => {
    render(<App />);
    // Initial state might show Splash Screen
    expect(screen.getByText(/NEON OCCULT/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3200);
    });

    expect(screen.getByText(/SET YOUR NORTH STAR/i)).toBeInTheDocument();
  });
});
