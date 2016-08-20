import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';

import Routes from './config/routes';

const sentryKey = '42e9691ddb0c4e3399b51369ee5001ee';
const sentryApp = '93318';
const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

Raven.config(sentryUrl, {
  release: '1.0.0',
}).install();

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);
