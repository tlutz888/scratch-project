import React from 'react';
import { render } from 'react-dom';
import store from './store';
import App from './App.jsx';

// render(<div>Hello World</div>, document.getElementById('app'));

render(<App store={store} />, document.getElementById('app'));
