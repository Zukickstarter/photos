import React from 'react';

import Slides from './Slides.jsx';
import Side from './Side.jsx';

/**
 * Component that renders to the page using
 * ReactDOM.render, only after fetching data.
 * @param {React.Props} props react props
 * @param {Array<Object>} props.data an array of photos or videos (possibly mixed)
 * @param {Object} props.data.N props.data[N] where 0 <= n < props.data.length
 * @param {URL} props.data.N.url the url of the photo or video
 * @param {'video' | 'photo'} props.data.N.type is it an photo or 
 * @returns {React.ElementType}
 * @example <App data={data}/>
 * */
const App = class extends React.Component {

  /** @constructor */
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data ?? [],
    };
  }

  render() {
    return <div>
      <Slides data={this.state.data} />
      <Side />
    </div>;
  }
};

export default App;