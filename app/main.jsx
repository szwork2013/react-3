import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute,browserHistory} from 'react-router';
import Index from './src/index.js';
import List from './src/list.jsx'
import Choose from './src/choose.jsx';
import './src/static/style';


export default class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return ( <div>
                    {this.props.children}
                </div>)
        }
}



render((< Router history={ hashHistory }>
       < Route path="/" component={ App } >
         < IndexRoute component = { Choose }  />
         <Route path="index/:store" component={Index} />
         <Route path="list/:id" component={List} />
       </Route>
       </Router > ), document.getElementById('react-content'))

