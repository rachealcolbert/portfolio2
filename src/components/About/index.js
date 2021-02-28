import React from "react";
// import profileImage from "../../assets/profile.png";

function About() {
  return (
    <section className="background-about">
      {/* <img src={profileImage} alt="developer pic" /> */}
      {/* <div style="background:transparent url('assets/profile.png) no re-peat" */}
      <div className="card border-light mb-3">
        <div className="card-body">
          <h1 className="card-title">hello.</h1>
          <p className="card-text">
            Accomplished digital content professional with 5+ years of
            experience developing engaging content for print and digital
            channels. Skilled in writing and editing for blogs, newsletters, and
            social media. Successful in website design, video production, and
            virtual broadcasting. Strong leader with the ability to oversee
            projects and ensure delivery within deadlines and budgets.
            Proficient in many industry technologies including WordPress, Final
            Cut Pro, Google Analytics, and Wirecast.
          </p>
          <a href="/" className="btn btn-dark btn-small">
            see my work
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
