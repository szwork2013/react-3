import React from 'react';
import { Grid,TabBar } from 'antd-mobile';
import TabBarExp from './tabbarexp.jsx';
import { NavBar, Icon } from 'antd-mobile';
import {Router, Route, hashHistory, Link, IndexRoute,browserHistory} from 'react-router';

export default class index extends React.Component {
    render() {
        console.log(this.props.params.store);
        return (<div>
            <div id="nav">
                 <NavBar leftContent="返回" mode="light" onLeftClick={() => {browserHistory.goBack('choose');}}></NavBar><div style={{ height: 16 }} />
            </div>
            <TabBarExp></TabBarExp>
        </div>)
    }
}
