import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NewCategory from './components/NewCategory';
import EditCategory from './components/EditCategory';
import NewVideo from './components/NewVideo';
import EditVideo from './components/EditVideo';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new-category" component={NewCategory} />
          <Route path="/edit-category/:id" component={EditCategory} />
          <Route path="/new-video" component={NewVideo} />
          <Route path="/edit-video/:id" component={EditVideo} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;

