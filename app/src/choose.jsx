import { List, Radio ,Button,WhiteSpace, WingBlank,Flex,Toast } from 'antd-mobile';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import store from './stores/store.js';
import actions from './actions/actions.js';

const RadioItem = Radio.RadioItem;

export default class Choose extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            disabled: false,
            value: -1
        }
    }
    componentDidMount(){
        actions.getStores();
    }

    handleChange(item) {
        if (item.target.checked) {
            this.state =  {
                value: 1
            }
        }
    }

    handleClick(e){
        if(this.state.value==-1){
            Toast.fail('请选择门店', 1);
            return ;
        }
        var value = this.state.value;
        this.context.router.push("index/"+value);
    }
    render() {
        let items = [];
        var t = this;
        if (this.state.choosestore != null) {
            var lists = this.state.choosestore.list.lists;
            items =  lists.map((item,i)=>{
                return  <RadioItem
                    checked={this.state.value === item.code}
                    onChange={(e) => {
                        if (e.target.checked) {
                            this.setState({ value: item.code });
                        }
                    }}
                  >
                    {item.name}
                 </RadioItem>
            })
        }
        return (
            <div>
                <List renderHeader={() => '请选择门店'}>
                    {items}
                </List>
                <WingBlank size="lg">
                    <Flex direction="column">
                        <Button  type="primary"  onClick={this.handleClick.bind(this)}  style={{ margin: '16px' }}>确定</Button>
                    </Flex>
                </WingBlank>

            </div>
        );
    }
}
Choose.contextTypes = {
    router: React.PropTypes.object.isRequired
};

ReactMixin.onClass(Choose, Reflux.connect(store, 'choosestore'));