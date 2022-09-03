import React from 'react';
import Provider from './context/provider';

import Router from './router/router';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
