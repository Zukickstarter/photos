import React from 'react';

import Video from './Video.jsx';
import Photo from './Photo.jsx';

/**
 * Slide component that shows a single image or photo
 * @param {React.Props} props
 * @param {Object} props.data
 * @param {URL} props.data.url
 * @param {'video' | 'photo'} props.data.type
 * @param {Boolean} props.show
 * @returns {React.ElementType} 
 */
const Slide = function (props) {
  switch (props.data.type) {
    case 'video':
      return <Video url={props.data.url} show={props.show}/>;
    case 'photo':
      return <Photo url={props.data.url}  show={props.show}/>;
    default:
      throw Error('No such type ' + props.data.type);
  }
};

export default Slide;