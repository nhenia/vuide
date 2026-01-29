import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NorthStar } from '../components/NorthStar';
import React from 'react';

describe('NorthStar', () => {
  it('shows alert if sanctuary is not bound', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<NorthStar />);
    fireEvent.click(screen.getByRole('button'));
    expect(alertMock).toHaveBeenCalledWith("Consult the Altar (Settings) to bind your sanctuary's location.");
  });

  it('opens google maps if sanctuary is bound', () => {
    const openMock = vi.spyOn(window, 'open').mockImplementation(() => null);
    localStorage.setItem('neon_occult_settings', JSON.stringify({ hotelAddress: '123 Royal St' }));
    render(<NorthStar />);
    fireEvent.click(screen.getByRole('button'));
    expect(openMock).toHaveBeenCalledWith(expect.stringContaining('123%20Royal%20St'), '_blank');
  });
});
