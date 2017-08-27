import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { Redirect, Switch } from "react-router-dom";
import { appReducer } from "./js/reducers/reducers";

import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";

import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import Index from "./pages/index";

// Import the components used as pages
import LoginPage from "./js/components/pages/LoginPage.react";

import NotFound from "./js/components/pages/NotFound.react";

registerServiceWorker();
// Create a history of your choosing (we're using a browser history in this case)

//github repo: modify accordingly 
const history = createBrowserHistory({ basename: "/reactdawsons" });

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  appReducer,
  applyMiddleware(middleware)
);

//react-router V4 protected routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  let { loggedIn } = store.getState();

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />}
    />
  );
};

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{ height: "100%", backgroundColor: "#c0ca33" }}>
        <Switch>
          <Route path="/login" component={LoginPage} />

          <PrivateRoute path="/drive/:s" component={Index} />
          <PrivateRoute exact path="/" component={Index} />

          <Route exact path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
