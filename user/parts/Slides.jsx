import React from 'react';

import Slide from './Slide.jsx';

const arrowStyleLeft = {
  'position': 'absolute',
  'top': '48%',
  'fontSize': '400%',
  'backgroundColor': 'rgba(255, 255, 255)',
};

const arrowStyleRight = {
  'position': 'absolute',
  'top': '48%',
  'right': '0%',
  'fontSize': '400%',
  'backgroundColor': 'rgba(255, 255, 255)',
};

/**
 * Holds multiple slide components, each of them holding a video or photo
 * @param {React.Props} props
 * @param {Array<Object>} props.data
 * @param {Object} props.data.N
 * @param {URL} props.data.N.url
 * @param {'video' | 'photo'} props.data.N.type
 * @returns {React.ElementType} 
 */
const Slides = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  forward(n) {
    let newn = (this.state.current + n) % this.props.data.length;
    if (newn < 0) {
      newn += this.props.data.length;
    }
    this.setState({
      current: newn,
    });
  };

  render() {
    return <div className="slideshow-container" style={{ position: 'relative' }}>
      <a className={"next"} onClick={() => this.forward(1)} style={arrowStyleLeft}>&lt;</a>
      <a className={"prev"} onClick={() => this.forward(-1)} style={arrowStyleRight}>&gt;</a >
      {
        this.props.data.map((data, n) =>
          <div key={n} className="slide">
            <Slide data={data} show={this.state.current === n} />
          </div>)
      }
    </div >;
  }
};

export default Slides;