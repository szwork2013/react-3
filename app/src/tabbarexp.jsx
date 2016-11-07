import { TabBar } from 'antd-mobile';
import React from 'react';
import GridExp from './gridexp.jsx';
export default class  TabBarExp extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            cate:'1'
        }
    }
    renderContent(pageText) {
        return (
                <GridExp cate={this.state.cate} />
        );
    }
    render() {
        return (

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}>
                <TabBar.Item
                    title="业务系统"
                    key="业务系统"
                    style=""
                    icon={require('./images/TabBar_HomeBar_web.png')}
                    selectedIcon={require('./images/TabBar_HomeBar_Sel_web.png')}
                    selected={this.state.cate === '1'}
                    onPress={() => {
                        this.setState({
                          cate:'1'
                        });
                    }}
                    data-seed="logId">
                    {this.renderContent('业务系统')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    title="营运管理"
                    key="营运管理"
                    badge={1}
                    selected={this.state.cate === '2'}
                    onPress={() => {
                        this.setState({
                          cate:'2'
                        });
                    }}
                    data-seed="logId1">
                    {this.renderContent('营运管理')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                    title="客户关系"
                    key="客户关系"
                    selected={this.state.cate === '3'}
                    onPress={() => {
                        this.setState({
                          cate:'3'
                        });
                    }}>
                    {this.renderContent('客户关系')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                    title="报表管理"
                    key="报表管理"
                    selected={this.state.cate === '4'}
                    onPress={() => {
                        this.setState({
                          cate:'4'
                        });
                    }}>
                    {this.renderContent('报表管理')}
                </TabBar.Item>
            </TabBar>
        );
    }
}

