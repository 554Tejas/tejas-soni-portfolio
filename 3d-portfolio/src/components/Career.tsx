import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — CSE</h4>
                <h5>KIIT, Bhubaneswar</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science & Engineering.
              CGPA: 7.87. Specialized in Machine Learning, NLP, and
              full-stack software development across Agile SDLC environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning</h4>
                <h5>Internshala</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Certified in supervised and unsupervised learning, model
              evaluation, and deployment pipelines using Python and
              Scikit-learn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics</h4>
                <h5>Deloitte Australia</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Data analytics certification covering business intelligence,
              insight generation, and Tableau-driven decision support for
              enterprise use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science & ML</h4>
                <h5>Udemy</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Comprehensive course covering end-to-end data science workflows —
              EDA, feature engineering, deep learning with TensorFlow, and
              model deployment via REST APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
