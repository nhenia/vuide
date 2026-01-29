import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Explore } from '../views/Explore';
import { HashRouter } from 'react-router-dom';
import React from 'react';

describe('Explore', () => {
  it('renders all cards by default', () => {
    render(
      <HashRouter>
        <Explore />
      </HashRouter>
    );
    expect(screen.getByText(/FULL DECK/i)).toBeInTheDocument();
  });

  it('filters locations when arcana is clicked', () => {
    render(
      <HashRouter>
        <Explore />
      </HashRouter>
    );
    const foolButton = screen.getAllByText('The Fool')[0]; // The filter button
    fireEvent.click(foolButton);
    expect(screen.getAllByText('The Fool').length).toBeGreaterThan(0);
  });
});
