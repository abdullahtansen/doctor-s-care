import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Doctors from "./Pages/Home/Doctors/Doctors";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Patients from "./Pages/Patients/Patients";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/our">
              <Doctors></Doctors>
            </Route>
            <Route path="/patient">
              <Patients></Patients>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
