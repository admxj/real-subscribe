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
                <Router>
                    <div>
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
