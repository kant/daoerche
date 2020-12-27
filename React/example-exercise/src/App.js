import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UseRefViaTimer from "./components/useRefViaTimer";
import MultipleState from "./components/multipleState";
import GetPrevStatesAndProps from "./components/getPrevStatesAndProps";

const list = [
    { path: '/UseRefViaTimer', name: '使用useRef来当做函数式组件的实例属性使用', component: UseRefViaTimer},
    { path: '/MultipleState', name: 'hooks State分成多个使用', component: MultipleState},
    { path: '/GetPrevStatesAndProps', name: '函数式组件获取上一次的state和props', component: GetPrevStatesAndProps}
];

const ProjectList = () => {
    return (
        <div>
            <h1>App</h1>
            <ul>
                {list.map(item => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
            </ul>
        </div>
    )
}

function App() {
  return (
      <Router>
          <Switch>
              {list.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
              <Route path='/' component={ProjectList} />
          </Switch>
      </Router>
  );
}

export default App;
