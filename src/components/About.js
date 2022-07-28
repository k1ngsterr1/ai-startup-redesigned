import React from "react";
import "../styles/about_styles/about_us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="second-screen">
      <h2 className="about-project-header">About Project</h2>
      <figure className="separator-2"></figure>
      <p className="about-us-paragraph">
        This Project Was Created In Order To Show the basics of the neural
        networks and machine learning, through the chatting way. To put it more
        simply, you can create <span className="blue-txt">your own AI</span> and
        train it just with chatting
      </p>
      <button className="read-more">READ MORE</button>
      <section className="cards-container">
        <article className="card-one">
          <h3 className="card-one-header">
            <FontAwesomeIcon className="icon-1" icon={faBrain} /> STEP 1
          </h3>
          <figure className="separator-c-1"></figure>
          <p className="card-one-text">
            first of all, you should create and name your aI and then make only
            then make a chat
          </p>
        </article>
        <article className="card-two">
          <h3 className="card-two-header">
            <FontAwesomeIcon className="icon-2" icon={faRobot} /> STEP 2
          </h3>
          <figure className="separator-c-2"></figure>
          <p className="card-two-text">
            Now you can train Your AI, Just chatting with it. the more you
            chatting - the smarter aI Is
          </p>
        </article>
        <article className="card-three">
          <h3 className="card-three-header">
            <FontAwesomeIcon className="icon-3" icon={faUsers} /> STEP 3
          </h3>
          <figure className="separator-c-3"></figure>
          <p className="card-three-text">
            Share your own neural network with friends and other users, have fun
            and enjoy it!
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutUs;
