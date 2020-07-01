import React from 'react';

import Slide from './Slide.jsx';

const arrowStyleLeft = {
  'fontSize': '400%',
  'backgroundColor': 'rgba(255, 255, 255)',
};

const arrowStyleRight = {
  'float': 'right',
  'right': '0%',
  'fontSize': '400%',
  'backgroundColor': 'rgba(255, 255, 255)',
};

const divInnerStyle = {
  'float': 'none',
};

const divStyle = {
  'float': 'left',
  'width': '80%',
};

/**
 * Holds multiple slide components, each of them holding a photo or video
 * @param {React.Props} props react props
 * @param {Array<Object>} props.data the photos or videos (possibly mixed)
 * @param {Object} props.data.N props.data[N] where 0 <= n < props.data.length
 * @param {URL} props.data.N.url the url of the photo or video 
 * @param {'video' | 'photo'} props.data.N.type is it a photo or video
 * @returns {React.ElementType} 
 */
const Slides = class extends React.Component {
  /** @constructor */
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    }
  }

  /**
   * moves the photo carousel forward or backwards;
   * implements wrapping behavior
   * @memberof Slides
   * @param {Integer} n 
   * @returns {void}
   */
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
    return <div style={divStyle}>
      {
        this.props.data.map(
          (data, n) => {
            if (n === this.state.current) {
              return <Slide key={n} data={data} show={this.state.current === n} />;
            } else {
              return <div></div>;
            }
          }
        )
      }
      <a onClick={() => this.forward(1)} style={arrowStyleLeft}>&lt;</a>
      <a onClick={() => this.forward(-1)} style={arrowStyleRight}>&gt;</a >
    </div >;
  }
};

export default Slides;