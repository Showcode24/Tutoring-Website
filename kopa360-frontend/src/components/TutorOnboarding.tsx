import { User, ClipboardList, CalendarCheck } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-header text-center">
        <span className="how-it-works-span">FOR TUTORS</span>
        <h2 className="how-it-works-title text-center">
          Get started as a tutor <br />
          and manage your sessions
        </h2>
      </div>

      <div className="container">
        <div className="row">
          {/* For Tutors */}
          <div className="col-12 col-md-4 text-left mb-4">
            <div className="subsection">
              <h1>1</h1>
              <div className="d-flex">
                <User size={15} className="icon" />
                <h5 className="subsection-title">Sign Up</h5>
              </div>
              <p>
                Register as a tutor and build a profile highlighting your
                expertise.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-left mb-4">
            <div className="subsection">
              <h1>2</h1>
              <div className="d-flex">
                <ClipboardList size={15} className="icon" />
                <h5 className="subsection-title">Apply for Jobs</h5>
              </div>
              <p>Browse job posts that match your skills and apply.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-left mb-4">
            <div className="subsection">
              <h1>3</h1>
              <div className="d-flex">
                <CalendarCheck size={15} className="icon" />
                <h5 className="subsection-title">Track Appointments</h5>
              </div>
              <p>Manage your appointments and earnings from one place.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
