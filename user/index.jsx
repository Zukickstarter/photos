import React from 'react';
import ReactDOM from 'react-dom';

import App from './parts/App.jsx';

fetch('/api/photos')
    .then(x => x.json())
    .then(function(data) {
        ReactDOM.render(<App data={data}/>, document.getElementById('react'));
    });
