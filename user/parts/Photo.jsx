import React from 'react';

/**
 * Singular photo component
 * @param {React.Props} props react props
 * @param {URL} props.url must be a url of a photo (png, jpeg, netpbm)
 * @param {Boolean} props.show this is default undefined and therefore hidden
 * @returns {React.ElementType} 
 */
const Photo = function (props) {
  let style = {};
  style.width = '100%';
  if (!props.show) {
    style.display = 'none';
  }
  return <img src={props.url} style={style}/>;
};

export default Photo;