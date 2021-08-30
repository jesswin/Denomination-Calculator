import { Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Calculator from "./components/pages/Calculator";
import Deposited from "./components/pages/Deposited";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          Welcome
        </Route>
        <Route path="/Calculator">
          <Calculator />
        </Route>
        <Route path="/Deposited">
          <Deposited />
        </Route>
        <Route path="*">
          <p>Error 404</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
