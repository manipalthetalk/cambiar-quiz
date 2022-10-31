import React, { useEffect, useState } from "react";

import "./Card.css";

const Card = (props) => {
  useEffect(() => {
    if (props.questionIndex !== undefined) {
      if (props.progressValue <= 100) {
        const interval = setInterval(() => {
          props.setProgressValue((value) => value + (1/15));
        }, 10)

        return () => clearInterval(interval);
      } else {
        if (props.questionIndex === 9) {
          props.setShowQuestionsPage(false);
          props.setShowFinalPage(true);
        } else {
          props.setQuestionIndex((value) => value + 1);
          props.setProgressValue(0);
        }
      }
    }
  }, [props.progressValue]);

  function getCountdownValue(value) {
    return 15 - (props.progressValue / 100 * 15).toFixed(0);
  }

  return (
    <div className="card-outer">
      <div className="card">

          {props.progressValue !== undefined
            ? <div className="progress-div">
                <progress max="100" value={props.progressValue}></progress>
                <span className="countdown">{getCountdownValue()}</span>
              </div>
            : <></>
          }
          <div className="card-contents">
            {props.children}
          </div>
      </div>;
    </div>
  );
};

export default Card;
