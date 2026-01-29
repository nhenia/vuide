import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Randomizer } from '../views/Randomizer';
import React from 'react';

describe('Randomizer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('deals cards after loading', async () => {
    render(<Randomizer />);
    expect(screen.getByText(/CONSULTING THE VOID/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1200);
    });

    expect(screen.queryByText(/CONSULTING THE VOID/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Position/i)).toHaveLength(3);
  });
});
