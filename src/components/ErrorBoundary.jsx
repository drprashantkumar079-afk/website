import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'Sora, system-ui, sans-serif',
        }}>
          <h1 style={{ fontSize: '1.5rem', color: '#0b1f33', marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#5b6b7c', marginBottom: '1.5rem', maxWidth: '400px' }}>
            We're sorry for the inconvenience. Please refresh the page or contact the clinic directly.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #0c4a6e, #0f766e)',
                color: '#fff',
                border: 'none',
                fontWeight: 650,
                cursor: 'pointer',
              }}
            >
              Refresh Page
            </button>
            <a
              href="tel:+919353636227"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                background: '#fff',
                color: '#0b1f33',
                border: '1px solid #dce5ee',
                fontWeight: 650,
                textDecoration: 'none',
              }}
            >
              Call Clinic
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
