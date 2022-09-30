import React from 'react';
import Inicio from './components/Inicio'
import Base from './components/Base'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
        <Route path ="/inicio">
          <Inicio></Inicio>
        </Route>
        <Route path="/">
          <Base></Base>
        </Route>
    </Router>
  );
}

export default App;
