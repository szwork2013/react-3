import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './src/hello.js';
import { Button } from 'antd-mobile';
import CarouselExp from './src/carousel.js';

import TabBarExp from './src/tabbarexp.jsx'

import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Icon = ({ type }) => < span className = { `anticon anticon-${type}` }
/>;
const Step = Steps.Step;

render( < TabBarExp / > , document.getElementById('content'));
