import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import MapPage from "./MapPage/MapPage";
import Login from "./Login/Login";
import Form from "./Form/Form";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OrdnancePage from "./OrdnancePage/OrdnancePage";
import AdminPage from "./AdminPage/AdminPage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MapPage}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/form" component={Form}></Route>
            <Route exact path="/error" component={ErrorPage}></Route>
            <Route exact path="/ordnance" component={OrdnancePage}></Route>
            <Route exact path="/admin" component={AdminPage}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
