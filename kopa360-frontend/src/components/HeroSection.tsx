import { heroData } from '../data';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-vh-100 bg-white">
      <main className="container px-4 py-5 position-relative">
        {/* Center content */}
        <div className="mx-auto text-center pt-5" style={{ maxWidth: '768px' }}>
          <h1 className="display-4 fw-bold mb-4">{heroData.title}</h1>
          <p className="fs-4 text-muted mb-5">{heroData.subtitle}</p>

          {/* Search bar */}
          <div className="position-relative mx-auto mb-0" style={{ maxWidth: '576px' }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg rounded-pill ps-4"
                placeholder={heroData.searchPlaceholder}
                style={{ height: '56px' }}
              />
              <button
                className="btn btn-primary rounded-circle position-absolute end-0 top-50 translate-middle-y me-2 d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', zIndex: 5 }}
              >
                <Search size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
