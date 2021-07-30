import Login from "./components/Login";
import AddItems from "./components/AddItems";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import ItemList from "./components/List";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Homepage}/>
          <Route exact path = '/homepage' component={Homepage}/>
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/register' component={Signup}/>
          <PrivateRoute exact path = '/additems' component={AddItems}/>
          <PrivateRoute exact path = '/list' component={ItemList}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
