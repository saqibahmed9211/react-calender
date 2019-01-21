import * as  React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { allReducers } from "./reducers/index"
import App from "./components/app"
import { BrowserRouter as Router, Route,Link, withRouter } from 'react-router-dom';
import Header from './components/header_component';
import AddNewEvent from "./container/add-event"
import UpdateEvent from "./container/update-event"

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route path="/addEvent" component={AddNewEvent}></Route>
            <Route path="/update" component={UpdateEvent}></Route>
        </div>
    </Router>
    </Provider>,
    document.getElementById("root")

)