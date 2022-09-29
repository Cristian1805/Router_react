import React from 'react';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Outlet>
        <Route path ="/inicio">
          Estas en el inicio
        </Route>
        <Route path="/">
          Esta es la url Base

        </Route>
      </Outlet>
    </Router>
  );
}

export default App;
