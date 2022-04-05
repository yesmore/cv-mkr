import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@src/router';
import store from '@src/store';
import { Provider } from 'react-redux';

import './common/styles/normalize.less';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
