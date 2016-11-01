import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import Hello from './src/hello.jsx';
import Index from './src/index.js';
import TabBarExp from './src/tabbarexp.jsx';


export default class App extends React.Component {
    render() {
        return ( <div>{this.props.children}</div>)
        }
}

render(( < Router history={ hashHistory }>
       < Route path="/" component={ App }>
         < IndexRoute component = { Index }/>
        </Route>
    </Router > ), document.getElementById('react-content'))

