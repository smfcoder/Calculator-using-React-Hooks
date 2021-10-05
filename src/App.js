//import About from "./components/About"
import Profile from "./components/Profile"
import Nav from "./components/Nav"
import Counter from "./components/Counter"
import Incjsx from "./components/Incdec"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from "./components/Calculator"


function App(){
  return(
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact  render={(props) => <Home text="Shreyas" {...props} />} />
        <Route path="/profile" render={(props) => <Profile text="Shreyas" {...props} />} />
        <Route path="/counter" component={Counter} />
        <Route path="/jsxcounter" component={Incjsx} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </div>
    </Router>
  )
}

const Home = (props) => (
  <div>
    <h1>Hello {props.text}</h1>
  </div>
);
export default App