import React, { Suspense } from "react";

import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Calculator = React.lazy(() => import("./components/pages/Calculator"));
const Deposited = React.lazy(() => import("./components/pages/Deposited"));
const Welcome = React.lazy(() => import("./components/Welcome/Welcome"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Welcome />
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
      </Suspense>
    </Layout>
  );
}

export default App;
