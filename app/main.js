import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './src/hello.jsx';
import { Button } from 'antd-mobile';
import CarouselExp from './src/carousel.js';

import TabBarExp from './src/tabbarexp.jsx'
import data from './src/data.json'

import $ from "jquery";
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

import { Link } from 'react-router';


const Step = Steps.Step;

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jack',
            username: '',
            lastGistUrl: ''
        }
    }
    componentDidMount() {
        $.get(this.props.source, function(result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            })
        }.bind(this));
    }

    handleClick(event) {
        console.log(event);
        this.setState({ name: 'ggg' });
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        var value = this.state.name;
        return ( < div > { this.state.username }
            's last gist is < a href = { this.state.lastGistUrl } > here < /a>.  < input type = "text"
            value = { value }
            onChange = { ev => { this.handleChange(ev) } }
            />{value}</div > );
    }
}
render( < NotesList source = "https://api.github.com/users/octocat/gists" > < /NotesList>, document.getElementById('content'));
