import React from 'react';
import ReactDOM from 'react-dom';

import App from './parts/App.jsx';

let id = new URLSearchParams(window.location.search).get('id') || 1;

fetch('/api/photos/' + id)
    .then(x => x.json())
    .then(function(data) {
        ReactDOM.render(<App data={data}/>, document.getElementById('photos-react'));
    });