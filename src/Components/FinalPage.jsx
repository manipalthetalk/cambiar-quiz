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
      <h1 className="heading">You reached the end of the game, {username}!</h1>

      <h3 className="primary_text">Your final score is: {score}</h3>
      
      <img src={gif} className="recruit" alt="loading..." width="100px"/>
      
      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
      <SocialFollow/>
    </Card>
  );
};

export default FinalPage;
