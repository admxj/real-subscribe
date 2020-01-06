import React from 'react';
import 'antd/dist/antd.css';
import User from './components/user/index'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                {/*<Login></Login>*/}
                <Router>
                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/user">
                                <User/>
                            </Route>
                            <Route path="/users">
                                <span>users</span>
                            </Route>
                            <Route path="/">
                                <span>root</span>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
