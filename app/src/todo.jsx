import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import actions from './actions/actions.js';
import store from './stores/store.js';
export default class Todo extends React.Component {

        componentDidMount() {
            actions.getAll();
        }

        add() {
            var item = this.refs.item.value;
            this.refs.item.value = '';
            actions.add(item);
        }

        remove(i) {
            actions.remove(i);
        }

        render() {
            let items = [];
            if (this.state.store != null) {
                console.log(this.state.store.list);
                var lists = this.state.store.list;
                items = lists.map((item, i) => {
                    return ( < li key = { i } > { item.name } < button onClick = { this.remove.bind(this, i) } > remove < /button> < /li > )
                })
            }
            return ( < div > < input type = "text"
                ref = "item" / > < button onClick = { this.add.bind(this) } > add < /button><ul> { items } < /ul > < /div > );

            }


        }
        ReactMixin.onClass(Todo, Reflux.connect(store, 'store'));
