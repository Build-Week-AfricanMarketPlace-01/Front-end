import Login from "./components/Login";
import AddItems from "./components/AddItems";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <Homepage />
      <AddItems />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
