import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeToggle } from '../components/ThemeToggle';
import React from 'react';

describe('ThemeToggle', () => {
  it('toggles theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });
});
