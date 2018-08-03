import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SqlRules from '../doccomponent/sql_rules/sql_rules';
import JavaBase from '../doccomponent/java_base/java_base';
import JavaServer from '../doccomponent/java_server/java_server';
import RestApi from '../doccomponent/rest_api/rest_api';
import GitCommit from '../doccomponent/git_commit/git_commit';
import GitLab from '../doccomponent/gitlab/gitlab';
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
          </ul>
          <Switch>
            <Route exact path="/" component={SqlRules} />
            <Route path="/doc/JavaBase" component={JavaBase} />
            <Route path="/doc/JavaServer" component={JavaServer} />
            <Route path="/doc/RestApi" component={RestApi} />
            <Route path="/doc/GitCommit" component={GitCommit} />
            <Route path="/doc/GitLab" component={GitLab} />
          </Switch>
        </div>
      </Router>
    )
  }
}
  