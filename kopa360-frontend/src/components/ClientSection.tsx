
const ClientSection = () => {
  return (
    <div className="client-section">
      <div className="text-overlay">
        <h5>For clients</h5>
        <h1>Find talent<br />your way</h1>
        <p>
          Work with the largest network of independent professionals and get things done—
          from quick turnarounds to big transformations.
        </p>
      </div>
      <div className="cta-buttons">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="card cta-card text-center text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Post a job<br />and hire a pro</h5>
                <p className="card-text">Talent Marketplace™</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card cta-card text-center text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Browse and<br />buy projects</h5>
                <p className="card-text">Project Catalog™</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card cta-card text-center text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Get advice from<br />an industry expert</h5>
                <p className="card-text">Consultations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
