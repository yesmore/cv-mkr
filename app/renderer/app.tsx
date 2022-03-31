import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Router from '@src/router';
import './assets/styles/normalize.less';

function App() {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById('root'));
