import Reflux from 'reflux';
import React from 'react';
import Actions from './actions.js';

//给数组添加remove方法，用于去除指定下标的元素
Array.prototype.remove = function(dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
};

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
    }
})
