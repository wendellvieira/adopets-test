import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./pages/search";

class Routes extends React.Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={Search} />
            </Switch>
        </Router>
        );
    }
}

export default Routes