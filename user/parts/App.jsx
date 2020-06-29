import React from 'react';

import Slides from './Slides.jsx';

/**
 * Component that renders to the page using
 * ReactDOM.render, only after fetching data
 * This element is a thin wrapper for {@link Slides}
 * @param {React.Props} props
 * @param {Array<Object>} props.data
 * @param {Object} props.data.N
 * @param {URL} props.data.N.url
 * @param {'video' | 'photo'} props.data.N.type
 * @returns {React.ElementType} 
 * */
const App = class extends React.Component {

 constructor(props) {
    super(props);

    this.state = {
      data: this.props.data ?? [],
    };
  }

  render() {
    return <Slides data={this.state.data} />;
  }
};

export default App;