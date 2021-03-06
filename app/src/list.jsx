import React from 'react';
import { ListView ,Tabs, WhiteSpace } from 'antd-mobile';
import store from './stores/store.js';
import actions from './actions/actions.js';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import {Router, Route, hashHistory, Link, IndexRoute,browserHistory} from 'react-router';
import { NavBar, Icon } from 'antd-mobile';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '相约酒店',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '麦当劳邀您过周末',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '食惠周',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
let index = data.length - 1;

const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 8;
let pageIndex = 0;

const tabexp = React.createClass({
    render() {
        console.log(this.props.params.id);
        return (
            <div>
            <div id="nav">
                <NavBar leftContent="返回" mode="light" onLeftClick={() => {browserHistory.goBack('');}}></NavBar><div style={{ height: 16 }} />
            </div>
                <Tabs defaultActiveKey="1"  animated={false} onChange={callback}>
                    <TabPane tab="待我审批" key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <List></List>
                        </div>
                    </TabPane>
                    <TabPane tab="已经审批" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            选项卡二内容
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    },
});



const List = React.createClass({
    getInitialState() {

        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = (pIndex * NUM_SECTIONS) + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref

            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
            actions.getList(pIndex * NUM_SECTIONS,(pIndex+1) * NUM_SECTIONS);
        };
        this.genData();
        return {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: false,
        };
    },




    onEndReached(event) {
        // load new data
        console.log('reach end', event);
        this.setState({ isLoading: true });
        this.genData(++pageIndex);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: false,
        });
    },

    render() {

        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            let sec = rowData.split(',')[0].substring(1);
            let row = rowData.split(',')[1].substring(2);
            let data;
            let obj;
            if (this.state.ListData != null) {
                data = this.state.ListData.list;
                obj = data[row];
                return (
                    <div key={rowID}
                         style={{
                             padding: '8px 16px',
                             backgroundColor: 'white',
                             fontSize: '1.8em',
                         }}
                    >
                        <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>
                            {obj.code}
                        </h3>
                        <div style={{ display: '-webkit-box', display: 'flex' }}>
                            {/* <img style={{ height: 64 * (window.viewportScale || 1), marginRight: 8 }} src={obj.img} />*/}
                            <div style={{ display: 'inline-block' }}>
                                <p>{obj.name}</p>
                                <p>{/*<span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>元/任务*/}</p>
                            </div>
                        </div>
                    </div>
                );
            }


            return (
                <div key={rowID}
                     style={{
                         padding: '8px 16px',
                         backgroundColor: 'white',
                     }}
                >
                </div>
            );
        };
        return (<div style={{ margin: '0 auto', width: '100%' }}>
            <ListView
                dataSource={this.state.dataSource}
                renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? '加载中...' : '加载完毕'}
                </div>}

                renderRow={row}
                renderSeparator={separator}
                className="fortest"
                style={{
                    height: document.body.clientHeight * 3 / 4,
                    overflow: 'auto',
                    border: '1px solid #ddd',
                    margin: '10px 0',
                }}
                renderSectionHeader={(sectionData) => (
                    <div>{`条数 ${sectionData.split(' ')[1]}`}</div>
                )}
                pageSize={4}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={20}
                onScroll={() => { console.log('scroll'); }}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={5}
            />
        </div>);
    },
});
ReactMixin.onClass(List, Reflux.connect(store, 'ListData'));
module.exports = tabexp;