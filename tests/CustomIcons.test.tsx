import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TarotCardIcon, IsolatedStarIcon, PixelPinIcon, PixelAlligatorIcon } from '../components/CustomIcons';
import React from 'react';

describe('CustomIcons', () => {
  it('renders TarotCardIcon', () => {
    const { container } = render(<TarotCardIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders IsolatedStarIcon', () => {
    const { container } = render(<IsolatedStarIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders PixelPinIcon', () => {
    const { container } = render(<PixelPinIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders PixelAlligatorIcon', () => {
    const { container } = render(<PixelAlligatorIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
