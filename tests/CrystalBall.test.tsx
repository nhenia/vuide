import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CrystalBall } from '../views/CrystalBall';
import { HashRouter } from 'react-router-dom';
import React from 'react';

describe('CrystalBall', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders oracle and allows gazing', async () => {
    render(
      <HashRouter>
        <CrystalBall />
      </HashRouter>
    );
    expect(screen.getByText(/THE ORACLE/i)).toBeInTheDocument();

    const button = screen.getByText(/GAZE INTO THE BALL/i);
    fireEvent.click(button);

    expect(screen.getByText(/SUMMONING LOCATION/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    expect(screen.queryByText(/SUMMONING LOCATION/i)).not.toBeInTheDocument();
  });
});
