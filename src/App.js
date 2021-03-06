import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailPackage from "./pages/DetailPackage";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/detail-package" component={DetailPackage} />
        <Route exact path="/payment" component={Payment} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
