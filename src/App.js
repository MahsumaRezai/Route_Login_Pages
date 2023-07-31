import { Fragment } from "react";
import Allmeetup from './Pages/Allmeetup';
import Newmeetup from './Pages/Newmeetups';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Switch>

        <Route path='/all' exact>
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
