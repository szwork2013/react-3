import Reflux from 'reflux';
import React from 'react';
import Actions from './../actions/actions.js';
import $ from 'jquery';

export default Reflux.createStore({
    items: [],

    //监听所有的actions
    listenables: [Actions],
    //on开头的都是action触发后的回调函数
    onGetAll() {
        //更新状态（就是个对象）
        fetch('./data.json', { method: 'get' })
            .then(function(response) {
                console.log(response.headers.get('Content-Type'));
                console.log(response.headers.get('Date'));
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.type);
                console.log(response.url);
            })
            .catch(function(error) {
                console.log("Fetch错误:" + err);
            });
        this.trigger({ list: this.items });
    },
    onAdd(item) {
        this.items.push({ name: item });
        this.trigger({ list: this.items });
    },
    onRemove(i) {
        this.items.remove(i);
        this.trigger({ list: this.items });
    },

    onGetStores(){
        var t = this;
        this.trigger({list:{"msg":"ok","code":"0","work_depart":"0000","lists":[{"code":"0000","name":"总部"},{"code":"0001","name":"配送中心"},{"code":"0003","name":"西亚生活广场"},{"code":"1001","name":"西亚平桥店"}]}})
  /*      $.post('http://192.168.4.120/service/app/bhmis/gateway.jsp',
            { service: 'user.getorgans',
            userid: '0002'},
        function(response){
            t.trigger({ list: response.lists });
        });*/
    }
})
