import { heroData, trustedCompanies} from '../data';

const HeroSection = () => {
  return (
    <div className="min-vh-100 bg-white">
      <main className="container px-4 py-5 position-relative">
        {/* Left side images */}
        {/* <div className="position-absolute start-0 top-50 translate-middle-y d-none d-lg-block">
          <div className="position-relative" style={{ width: '300px', height: '500px' }}>
            {sideImages.left.map((image, index) => (
              <div key={index} className={`position-absolute ${image.position}`}>
                <div className="rounded-5 overflow-hidden image-float" style={{ width: '192px', height: '192px' }}>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I4QQAF4XyXlXPK8UfRFxvj2J2R2xEs.png"
                    alt={image.alt}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Right side images */}
        {/* <div className="position-absolute end-0 top-50 translate-middle-y d-none d-lg-block">
          <div className="position-relative" style={{ width: '300px', height: '500px' }}>
            {sideImages.right.map((image, index) => (
              <div key={index} className={`position-absolute ${image.position}`}>
                <div className="rounded-5 overflow-hidden image-float" style={{ width: '192px', height: '192px' }}>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I4QQAF4XyXlXPK8UfRFxvj2J2R2xEs.png"
                    alt={image.alt}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Center content */}
        <div className="mx-auto text-center pt-5" style={{ maxWidth: '768px' }}>
          <h1 className="display-4 fw-bold mb-4">
            {heroData.title}
          </h1>
          <p className="fs-4 text-muted mb-5">
            {heroData.subtitle}
          </p>

          {/* Search bar */}
          <div className="position-relative mx-auto mb-5" style={{ maxWidth: '576px' }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg rounded-pill ps-4"
                placeholder={heroData.searchPlaceholder}
                style={{ height: '56px' }}
              />
              <button
                className="btn btn-primary rounded-circle position-absolute end-0 top-50 translate-middle-y me-2"
                style={{ width: '40px', height: '40px', zIndex: 5 }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="text-center">
            <p className="text-uppercase text-muted small mb-4">
              {trustedCompanies.title}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-5 opacity-60">
              {trustedCompanies.companies.map((company, index) => (
                <div key={index} className="h-8" dangerouslySetInnerHTML={{ __html: company.logo }} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

