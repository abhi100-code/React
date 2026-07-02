import React from 'react';
import { useCurrentTime } from '../hooks/useCurrentTime';

/**
 * Clock component that displays the current time using the useCurrentTime hook
 */
const Clock = () => {
  const currentTime = useCurrentTime();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="card shadow-lg border-0" style={{ borderRadius: '20px', width: '100%', maxWidth: '500px', margin: '0 20px' }}>
        <div className="card-body text-center p-5">
          <h1 className="card-title display-4 fw-bold text-primary mb-4">
            {currentTime}
          </h1>
          <p className="lead text-secondary mb-4">
            Live Clock
          </p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" disabled>
              ⏱️ Real-time Updates
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              Refresh Every Second
            </button>
          </div>
        </div>
        <div className="card-footer bg-light text-center py-3">
          <small className="text-muted">
            Powered by React Hooks & Bootstrap
          </small>
        </div>
      </div>
    </div>
  );
};

export default Clock;
