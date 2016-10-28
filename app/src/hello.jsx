import React from 'react';
import Data from './data.json';
import { Link } from 'react-router'
import { browserHistory } from 'react-router';
let names =['a','b']
export default class Hello extends React.Component {
	handleSubmit(event){
		event.preventDefault();
		
	    console.log(event);
	  /*   const path = `/repos/${userName}/${repo}`;
	    browserHistory.push(path);*/
	}

	render(){
  		  return(<h1><form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="userName"/>
  <input type="text" placeholder="repo"/>
  <button type="submit">Go</button>
</form> {names}<Link to="/about">about</Link> </h1>);
  	}

}