// Non-js dependencies
import 'github-markdown-css/github-markdown.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import HTMLRenderer from './html-renderer';

ReactDOM.render(
  <HTMLRenderer location={location}/>,
  document.getElementById('app')
);
