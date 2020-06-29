import React from 'react';

/**
 * Singular photo component
 * @param {React.Props} props
 * @param {URL} props.url
 * @param {Boolean} props.show
 * @returns {React.ElementType} 
 */
const Photo = function (props) {
  let style = {};
  style.width = '100vw';
  style.height = '50vw';
  if (!props.show) {
    style.display = 'none';
  }
  return <img src={props.url} style={style}/>;
};

export default Photo;