import React from "react";
// import profileImage from "../../assets/profile.png";

function About() {
  return (
    <section className="background-about">
      {/* <img src={profileImage} alt="developer pic" /> */}
      {/* <div style="background:transparent url('assets/profile.png) no re-peat" */}
      <div className="card border-light mb-3">
        <div id="about" className="card-body">
          <h1 className="card-title">hello.</h1>
          <p className="card-text">
            My name's Racheal and I'm an accomplished digital content
            professional with 5+ years of experience developing engaging content
            for print and digital channels. I am skilled in full-stack web
            devloper with experience in React, JavaScript, JQuery, Node.js, CSS,
            and HTML.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
