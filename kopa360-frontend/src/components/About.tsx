
import { Edit, Shield, UserCheck } from 'react-feather';

const SignupPage = () => {

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        {/* Left Section - Image */}
        <div className="col-md-4 position-relative px-4">
          <div className="rounded-4 overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Students learning"
              className="h-100 w-100 object-fit-cover"
              style={{ minHeight: '90vh' }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <div className="p-4 p-xl-5">
            <h1 className="display-5 fw-bold mb-5">
              Boost Your Learning Game, Effortlessly
            </h1>

            <div className="benefits-list">
              <div className="d-flex gap-4 mb-4">
                <div className="benefit-icon text-primary">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="h5 fw-bold">No fees to get started</h3>
                  <p className="text-muted">
                    Sign up, browse tutor profiles, explore available courses, or schedule a consultation at your convenience.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 mb-4">
                <div className="benefit-icon text-primary">
                  <Edit size={24} />
                </div>
                <div>
                  <h3 className="h5 fw-bold">Post a tutoring request and connect with top educators</h3>
                  <p className="text-muted">
                    Finding the right tutor doesn't have to be complicated. Post a request or let us help you find the perfect match!
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 mb-5">
                <div className="benefit-icon text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="h5 fw-bold">Work with the best—without overspending</h3>
                  <p className="text-muted">
                    Kopa 360 ensures quality tutoring at affordable rates, with low service fees so you can focus on learning.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <button className="btn btn-success px-4 py-2 fw-semibold">
                  Sign up for free
                </button>
                <button className="btn btn-outline-success px-4 py-2 fw-semibold">
                  Learn how to hire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;