import React from "react";
import Answers from "../Answers";
import ManiPlayer from "../ManiPlayer";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers/>
      <Answers/>
      <Answers/>
      <Answers/>
      <Answers/>
      <Answers/>
      <Answers/>
      <Answers/>
      <ManiPlayer/>
      <ProgressBar/>
    </>
  );
};

export default Quiz;
