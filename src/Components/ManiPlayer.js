import React from "react";
import image from '../assets/images/3.jpg';
import classes from '../styles/ManiPlayer.module.css';


const ManiPlayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${classes.close}`}> close </span>
      <img src={image} alt="Alt tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default ManiPlayer;
