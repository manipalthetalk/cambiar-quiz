import React from "react";
import Card from "./Card";

import "./FinalPage.css";
import SocialFollow from "./SocialFollow.js";
import gif from './mttngif.gif'

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="heading">Thanks for playing, {username}!</h1>

      <h3 className="primary_text">Your final score is: {score}</h3>
      
      <img src={gif} className="recruit" alt="loading..." width="100px"/>
      
      <div className="buttons">
        <button className="apply_now" onClick={event =>  window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe_2exr2DBH9yKJpqDzlFUgHbO4heM2Ta1D9d66kSUCoJbhRQ/viewform'}>
          Join Us!
        </button>

        <button className="play_again_btn" onClick={handleClick}>
          Play Again
        </button> 
      </div>
      
      <SocialFollow/>
    </Card>
  );
};

export default FinalPage;
