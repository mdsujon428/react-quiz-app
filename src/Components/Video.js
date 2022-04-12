import React from 'react';
import classes from '../styles/Video.module.css';

const Video = ({title,noq,id}) => {
    return (
            <div className={classes.video}>
              {/* youtube  API to take image of video.*/}
              <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
              <p>{title}</p>
              <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total points : {noq * 5}</p>
              </div>
            </div>
    );
};

export default Video;