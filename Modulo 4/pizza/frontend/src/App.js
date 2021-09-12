import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import contactoPage from './pages/contactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import MenuPage from './pages/MenuPage';
import UbicacionPage from './pages/UbicacionPage'

function App() {
  return (
      <Router>
        <Header/>
        <Nav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/nosotros" exact component={NosotrosPage}/>
          <Route path="/menu" exact component={MenuPage}/>
          <Route path="/ubicacion" exact component={UbicacionPage}/>
          <Route path="/contacto" exact component={contactoPage}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
