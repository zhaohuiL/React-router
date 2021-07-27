import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DocComponent from 'pages/doccomponent/doc';
import DateComponent from 'pages/datecomponent/date';
import '../style/router.scss'

const getRouter = () => (
  <Router>
    <div>
      <ul className="turn">
        <li><Link to="/">文档</Link></li>
        <li><Link to="/date">日志</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={DocComponent} />
        <Route path="/date" component={DateComponent} />
      </Switch>
    </div>
  </Router>
)

export default getRouter;