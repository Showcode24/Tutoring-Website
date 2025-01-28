import { User, ClipboardList, MousePointer, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-header">
        <span className="how-it-works-span">FOR PARENTS</span>
        <h2 className="how-it-works-title text-left">
          Learn the simple processes <br></br>and see how it works clearly
        </h2>
      </div>

      <div className="container">
        <div className="row">
          {/* For Parents */}
          <div className="col-12 col-md-3 text-left mb-4">
            <div className="subsection">
              <h1>1</h1>
              <div className="d-flex">
                <User size={15} className="icon" />
                <h5 className="subsection-title">Sign up</h5>
              </div>

              <p>Sign up as a Parent and complete your profile.</p>
            </div>
          </div>
          <div className="col-12 col-md-3 text-left mb-4">
            <div className="subsection">
              <h1>2</h1>
              <div className="d-flex">
                <ClipboardList size={15} className="icon" />
                <h5 className="subsection-title">Post a job</h5>
              </div>
              <p>Post a job with details about the subject and schedule.</p>
            </div>
          </div>
          <div className="col-12 col-md-3 text-left mb-4">
            <div className="subsection">
              <h1>3</h1>
              <div className="d-flex">
                <MousePointer size={15} className="icon" />
                <h5 className="subsection-title">Review applications</h5>
              </div>
              <p>
                Receive applications from tutors nearby and pick the best fit.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 text-left mb-4">
            <div className="subsection">
              <h1>4</h1>
              <div className="d-flex">
                <CalendarCheck size={15} className="icon" />
                <h5 className="subsection-title">Manage appointments</h5>
              </div>
              <p>
                Track appointments, pay securely, and monitor job completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
