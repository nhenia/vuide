import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LocationCard } from '../components/LocationCard';
import { Arcana } from '../types';
import React from 'react';

const mockLocation = {
  id: 'test-1',
  name: 'Test Bar',
  arcana: Arcana.FOOL,
  description: 'A test description',
  address: '123 Test St',
  vibe: 'Test Vibe',
  image: 'test.jpg'
};

describe('LocationCard', () => {
  it('renders location details', () => {
    render(<LocationCard location={mockLocation} />);
    expect(screen.getByText('Test Bar')).toBeInTheDocument();
    expect(screen.getByText('>> Test Vibe')).toBeInTheDocument();
    expect(screen.getByText('A test description')).toBeInTheDocument();
  });

  it('fetches prophecy when button is clicked', async () => {
    render(<LocationCard location={mockLocation} />);
    const button = screen.getByText(/CONSULT VEIL/i);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/> The neon hums a cryptic truth./i)).toBeInTheDocument();
    });
  });
});
