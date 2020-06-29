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
  style.width = '100vw';
  style.height =  '50vw';
  if (props.show) {
    return <iframe className={style} src={props.url} style={style}></iframe>
  } else {
    return <div></div>
  }
};

export default Video;
