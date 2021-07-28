
import './App.css';
import Login from './components/Login'
import AddItems from './components/AddItems'
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import List from './components/List';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/additems' component={AddItems}/>
          <PrivateRoute exact path='/list' component={List}/>
          <Route exact path="/" component={Login}/> 
          <Route exact path="/login" component={Login}/> 
          <Route exact path ='/register' component={Signup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
