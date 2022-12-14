import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Map from "./pages/Map";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
