import React from 'react';

import Video from './Video.jsx';
import Photo from './Photo.jsx';

/**
 * Slide component that shows a single video or photo
 * Also contains the logic for switching between photo or video
 * @param {React.Props} props react props
 * @param {Object} props.data a photo or video
 * @param {URL} props.data.url the url of the photo or video, must match the type
 * @param {'video' | 'photo'} props.data.type is it a photo or video
 * @param {Boolean} props.show is it going to be rendered
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