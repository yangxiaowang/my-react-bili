import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Login from './components/login';
import Info from './components/info';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render (){
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Login}  path='/login' />
            <Route component={Info}  path='/info' />
          </Switch>
        </HashRouter>

      </div>
    )
  }
}

export default App;
