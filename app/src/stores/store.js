import Reflux from 'reflux';
import React from 'react';
import Actions from './../actions/actions.js';

export default Reflux.createStore({
    items: [],
    dataList:[],

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
    },
    onGetList(start,end){
        var data = [{code:"0000",name:"总部"},{code:"0001",name:"配送中心"},{code:"0003",name:"西亚生活广场"},{code:"1001",name:"光山"},{code:"0000",name:"罗山"},{code:"0001",name:"息县"},{code:"0003",name:"安陆"},{code:"1001",name:"广水"}];
        var data2 = [{code:"0000",name:"总部2"},{code:"0001",name:"配送中心2"},{code:"0003",name:"西亚生活广场2"},{code:"1001",name:"光山2"},{code:"0000",name:"罗山2"},{code:"0001",name:"息县2"},{code:"0003",name:"安陆2"},{code:"1001",name:"广水2"}];
        if(end ==2){
            this.trigger({list:data2})
        }else{
            this.trigger({list:data})
        }

        console.log(start+'=='+end)
        /*      $.post('http://192.168.4.120/service/app/bhmis/gateway.jsp',
         { service: 'user.getorgans',
         userid: '0002'},
         function(response){
         t.trigger({ list: response.lists });
         });*/
    }
})
