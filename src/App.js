import { Fragment } from "react";
import Allmeetup from './Pages/Allmeetup';
import Newmeetup from './Pages/Newmeetups';
import All from './Pages/All'
import { Route, Switch } from 'react-router-dom';
import MainNav from "./Pages/MainNav";

function App() {
  return (
    <Fragment>
      <MainNav/>
      <Switch>
      <Route path='/' exact>
          <All />
        </Route>
        <Route path='/all' >
          <Allmeetup />
        </Route>
        <Route>
          <Newmeetup path='/new' />
        </Route>
      </Switch>

    </Fragment>

  );
}

export default App;
