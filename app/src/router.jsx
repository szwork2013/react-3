import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute} from 'react-router';
import Hello from './hello.jsx';

class App extends React.Component{
	render(){
			return (
				<div>
   			 		<h1>App</h1>
			        <ul>
			          <li><Link to="/about">About</Link></li>
			          <li><Link to="/hello">Hello</Link></li>
			        </ul>
			        {this.props.children}
				</div>
				)
	}
}

class Message extends React.Component{
	render(){
		return (<h3>{this.props.params.id}message</h3>)
	}

}

class About extends React.Component{
  render() {
    return (<div> <Link to="/message/afaf" >message</Link>  {this.props.children || "Welcome to your Inbox"}</div>)
  }
}

class Index extends React.Component{
	render(){
		return(<div>welcome to the react world</div>)
	}
}


render((<Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Index} /> 
		<Route path="/hello" component={Hello} /> 
		<Route path="/about" component={About} > 
			<Route path="/message/:id" component={Message} />
		</Route>
	</Route>
</Router>),document.getElementById('content'))