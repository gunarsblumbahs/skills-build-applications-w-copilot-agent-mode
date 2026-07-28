function App() {
  const getApiBaseUrl = () => {
    const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;

    if (configuredBaseUrl) {
      return configuredBaseUrl;
    }

    const hostname = window.location.hostname;

    if (hostname.includes('app.github.dev')) {
      const codespaceName = hostname.replace(/-5173\.app\.github\.dev$/, '');
      return `https://${codespaceName}-8000.app.github.dev`;
    }

    return 'http://localhost:8000';
  };

  const apiBaseUrl = getApiBaseUrl();

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <p className="text-uppercase text-primary fw-semibold mb-3">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">Track workouts, teams, and progress in one place.</h1>
              <p className="lead text-muted mb-4">
                This modern multi-tier app is scaffolded with a React 19 frontend, an Express and TypeScript backend,
                and MongoDB connectivity for the data tier.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary btn-lg" href={`${apiBaseUrl}/api/health`}>
                  Check API Health
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
                  Vite Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
