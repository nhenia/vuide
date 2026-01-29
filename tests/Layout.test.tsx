import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Layout } from '../components/Layout';
import { HashRouter } from 'react-router-dom';
import React from 'react';

describe('Layout', () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.useFakeTimers();
  });

  it('renders splash screen first', () => {
    render(
      <HashRouter>
        <Layout><div>Content</div></Layout>
      </HashRouter>
    );
    // Intro first
    expect(screen.getByText(/NEON OCCULT/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3200);
    });

    expect(screen.getByText(/SET YOUR NORTH STAR/i)).toBeInTheDocument();
  });

  it('renders children after splash screen is dismissed', () => {
    sessionStorage.setItem('seen_splash', 'true');
    render(
      <HashRouter>
        <Layout><div>Main Content</div></Layout>
      </HashRouter>
    );
    expect(screen.getByText(/Main Content/i)).toBeInTheDocument();
    expect(screen.getByText(/NEON OCCULT/i)).toBeInTheDocument();
  });
});
