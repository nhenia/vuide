import React, { Component, ErrorInfo, ReactNode } from 'react';
import { reportRuntimeError } from '../services/errorReporting';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component to catch and handle runtime errors in the React tree.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportRuntimeError(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-8 text-center">
          <h1 className="font-glitch text-4xl text-[#ef4444] mb-4">THE VEIL HAS TORN</h1>
          <p className="font-mono text-[#2dd4bf] mb-8">
            A critical glitch has occurred in the spectral matrix.
          </p>
          <div className="bg-black/50 border border-[#ef4444] p-4 font-mono text-xs text-left overflow-auto max-w-full max-h-40 mb-8">
            <pre className="text-[#ef4444]">{this.state.error?.message}</pre>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#2dd4bf] text-black font-bold font-mono hover:bg-[#ef4444] hover:text-white transition-all"
          >
            REBOOT MATRIX
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
