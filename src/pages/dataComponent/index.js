import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JavaData from './JavaData'
import WebData from './WebData'
import MobileData from './MobileData'
import '../../style/style.scss'

export default class DateComponent extends Component {
    render() {
        return (
            // <div>
            //     <h1>日志</h1>
            // </div>
            <Router>
                <div>
                    <ul className="nav">
                        <li><Link to="/date">前端</Link></li>
                        <li><Link to="/date/java">后端</Link></li>
                        <li><Link to="/date/mobile">移动端</Link></li>

                    </ul>
                    <Switch>
                        <Route exact path="/date" component={WebData} />
                        <Route path="/date/java" component={JavaData} />
                        <Route exact path="/date/mobile" component={MobileData} />

                    </Switch>
                </div>
            </Router>
        )
    }
}
