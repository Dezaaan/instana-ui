import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import { Provider } from "react-redux";
import store from "./store";
import ContactDetails from "./components/ContactDetails";

const App = () => (
    <div className="App">
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/contactDetails/:contactId" component={ContactDetails}></Route>
                    <Route path="/contactDetails/" component={ContactDetails}></Route>
                </Switch>
            </Router>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));