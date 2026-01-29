import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SettingsAltar } from '../views/SettingsAltar';
import React from 'react';

describe('SettingsAltar', () => {
  it('saves hotel address', async () => {
    vi.useFakeTimers();
    render(<SettingsAltar />);
    const input = screen.getByPlaceholderText(/e.g. 123 Royal St/i);
    fireEvent.change(input, { target: { value: '456 Bourbon St' } });

    const button = screen.getByText(/BIND TO ALTAR/i);
    fireEvent.click(button);

    expect(screen.getByText(/COORDINATES BINDED/i)).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('neon_occult_settings')!)).toEqual({ hotelAddress: '456 Bourbon St' });

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.queryByText(/COORDINATES BINDED/i)).not.toBeInTheDocument();
  });
});
