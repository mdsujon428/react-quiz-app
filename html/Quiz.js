import React from "react";
import Answers from "../src/Components/Answers";
import ManiPlayer from "../src/Components/ManiPlayer";
import ProgressBar from "../src/Components/ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers/>
      <ProgressBar/>
      <ManiPlayer/>
    </>
  );
};

export default Quiz;
