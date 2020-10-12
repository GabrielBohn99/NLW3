import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanageMaps from "./pages/OrphanageMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanageMaps} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
