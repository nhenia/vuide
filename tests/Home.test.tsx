import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Home } from '../views/Home';
import { HashRouter } from 'react-router-dom';
import React from 'react';

describe('Home', () => {
  it('renders home page with links', () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(screen.getByText(/THE MAJOR/i)).toBeInTheDocument();
    expect(screen.getByText(/SHUFFLE/i)).toBeInTheDocument();
    expect(screen.getByText(/CRYSTAL/i)).toBeInTheDocument();
    expect(screen.getByText(/SELECT YOUR CARD/i)).toBeInTheDocument();
  });
});
