import React from "react";
import obinnaResume from "../pdf/obinnaResume.pdf";
import piccc from "../pdf/piccc.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={piccc}
            alt="Profile Pic"
            width="500"
            height="500"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Hi there! I am Emmanuel, a Full-Stack developer. I have a great ton
            of experience working with JavaScript and it's frameworks and
            libraries including REACT, REACT-REDUX, REACT CONTEXT API, NODE.JS,
            EXPRESS.JS, NEXT.JS. I also have a good understanding of some other
            frameworks and tools like MONGO DB, FIREBASE, FIREBASE-FIRESTORE,
            SWAGGER, POSTMAN. I'm very passionate and determined developer and I
            have showcased it in the amount of devotion I put in developing my
            projects because i believe that's the best way to express myself. I
            like solving problems, taking on new challenges, and creating useful
            products. From intuitive UI that users can pick up instinctively,
            data analysis deep dives that provide meaningful and actionable
            insight, to simple and useful tools that improve productivities, I
            enjoy bringing value to my surroundings.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>No. 5</span>
                <br />
                <span>
                  Mbanefo Street
                  <br />
                  Enugu State
                </span>
                <br />
                <span>07065477408</span>
                <br />
                <span>ekwealorobinna@yahoo.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={obinnaResume} className="button" download>
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
