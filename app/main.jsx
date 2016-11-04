import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import Index from './src/index.js';
import List from './src/list.jsx'
import Choose from './src/choose.jsx';
import Todo from './src/todo.jsx';
import './src/static/style';

export default class App extends React.Component {
    render() {
        return ( <div>{this.props.children}</div>)
        }
}

render((< Router history={ hashHistory }>
       < Route path="/" component={ App }>
         < IndexRoute component = { Choose }/>
         <Route path="index" component={Index} />
         <Route path="list" component={List} />
       </Route>
       </Router > ), document.getElementById('react-content'))

