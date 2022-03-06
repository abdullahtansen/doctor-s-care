import { Switch } from 'react-router-dom';
import { BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact to="/home">
          <Home></Home>
          </Route>
          <Route to="/doctor">
            <Home></Home>
          </Route>
          <Route to="/login">
            <Login></Login>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
            </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
