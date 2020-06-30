import React from 'react';

/**
 * Singular video component
 * @param {React.Props} props
 * @param {URL} props.url
 * @param {Boolean} props.show
 * @returns {React.ElementType} 
 */

const Video = function (props) {
  let style = {};
  style.width = '100%';
  style.height = '60%';
  if (props.show) {
    return <iframe src={props.url} style={style}></iframe>
  } else {
    return <div></div>
  }
};

export default Video;
