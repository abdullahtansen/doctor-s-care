import { Switch } from 'react-router-dom';
import { BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home';
import PatientServices from './Pages/Home/PatientServices/PatientServices';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route path="/our">
            <Doctors></Doctors>
          </Route>
          <Route path=
          "/patient">
            <PatientServices></PatientServices>
          </Route>
          <Route path="/about">
           <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
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
