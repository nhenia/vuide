import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SplashScreen } from '../components/SplashScreen';
import React from 'react';

describe('SplashScreen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('shows intro then onboarding', async () => {
    const onComplete = vi.fn();
    render(<SplashScreen onComplete={onComplete} />);

    expect(screen.getByText(/NEON OCCULT/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3200);
    });

    expect(screen.getByText(/SET YOUR NORTH STAR/i)).toBeInTheDocument();
  });

  it('calls onComplete when skip is clicked', () => {
    const onComplete = vi.fn();
    render(<SplashScreen onComplete={onComplete} />);

    act(() => {
      vi.advanceTimersByTime(3200);
    });

    fireEvent.click(screen.getByText(/SKIP/i));
    expect(onComplete).toHaveBeenCalled();
  });
});
