import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SqlRules from './SqlRules';
import JavaBase from './JavaBase';
import JavaServer from './JavaServer';
import RestApi from './RestApi';
import GitCommit from './GitCommit';
import GitLab from './GitLab';
import Counter from './Counter';
import '../../style/style.scss'

export default class DocComponent extends Component {
  render() {
    return (
      // <div>
      //   <h1>文档</h1>
      // </div>
      <Router>
        <div>
          <ul className="nav">
            <li><Link to="/">SQL规范</Link></li>
            <li><Link to="/doc/JavaBase">Java基础开发规范</Link></li>
            <li><Link to="/doc/JavaServer">Java后端服务开发规范</Link></li>
            <li><Link to="/doc/RestApi">Rest api规范</Link></li>
            <li><Link to="/doc/GitCommit">Git提交规范</Link></li>
            <li><Link to="/doc/GitLab">Gitlab CI规范</Link></li>
            <li><Link to="/doc/counter">计数器</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={SqlRules} />
            <Route path="/doc/JavaBase" component={JavaBase} />
            <Route path="/doc/JavaServer" component={JavaServer} />
            <Route path="/doc/RestApi" component={RestApi} />
            <Route path="/doc/GitCommit" component={GitCommit} />
            <Route path="/doc/GitLab" component={GitLab} />
            <Route path="/doc/counter" component={Counter} />
          </Switch>
        </div>
      </Router>
    )
  }
}
  