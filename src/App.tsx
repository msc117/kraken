import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AlbumCarousel from './components/AlbumCarousel';
import FileExplorer from './components/FileExplorer';
import {withAuthenticator} from '@aws-amplify/ui-react'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <nav>
            navbar!
          </nav>
          <AlbumCarousel />
          <FileExplorer />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App, {
  
});
