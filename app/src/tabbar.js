"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require('react');
var react_native_1 = require('react-native');
var antd_mobile_1 = require('antd-mobile');
var TabBarExp = (function (_super) {
    __extends(TabBarExp, _super);
    function TabBarExp(props) {
        _super.call(this, props);
        this.state = {
            selectedTab: 'redTab',
            notifCount: 0,
            presses: 0
        };
    }
    TabBarExp.prototype.renderContent = function (pageText, num) {
        return (<react_native_1.View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <react_native_1.Text style={{ margin: 50 }}>{pageText}</react_native_1.Text>
        <react_native_1.Text style={{ margin: 50 }}>{num} re-renders of the {pageText}</react_native_1.Text>
      </react_native_1.View>);
    };
    TabBarExp.prototype.render = function () {
        var _this = this;
        return (<antd_mobile_1.TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#ccc">
        <antd_mobile_1.TabBar.Item title="生活" icon={require('./images/TabBar_HomeBar.png')} selectedIcon={require('./images/TabBar_HomeBar_Sel.png')} selected={this.state.selectedTab === 'blueTab'} onPress={function () {
            _this.setState({
                selectedTab: 'blueTab'
            });
        }}>
          {this.renderContent('生活 Tab')}
        </antd_mobile_1.TabBar.Item>
        <antd_mobile_1.TabBar.Item icon={require('./images/TabBar_Businesses.png')} selectedIcon={require('./images/TabBar_Businesses_Sel.png')} title="口碑" badge={this.state.notifCount > 0 ? this.state.notifCount : undefined} selected={this.state.selectedTab === 'redTab'} onPress={function () {
            _this.setState({
                selectedTab: 'redTab',
                notifCount: _this.state.notifCount + 1
            });
        }}>
          {this.renderContent('口碑 Tab', this.state.notifCount)}
        </antd_mobile_1.TabBar.Item>
        <antd_mobile_1.TabBar.Item icon={require('./images/TabBar_Friends.png')} selectedIcon={require('./images/TabBar_Friends_Sel.png')} title="朋友" selected={this.state.selectedTab === 'greenTab'} onPress={function () {
            _this.setState({
                selectedTab: 'greenTab',
                presses: _this.state.presses + 1
            });
        }}>
          {this.renderContent('朋友 Tab', this.state.presses)}
        </antd_mobile_1.TabBar.Item>
        <antd_mobile_1.TabBar.Item icon={require('./images/TabBar_Assets.png')} selectedIcon={require('./images/TabBar_Assets_Sel.png')} title="我的" selected={this.state.selectedTab === 'yellowTab'} onPress={function () {
            _this.setState({
                selectedTab: 'yellowTab',
                presses: _this.state.presses + 1
            });
        }}>
          {this.renderContent('我的 Tab', this.state.presses)}
        </antd_mobile_1.TabBar.Item>
      </antd_mobile_1.TabBar>);
    };
    return TabBarExp;
}(react_1["default"].Component));
exports.__esModule = true;
exports["default"] = TabBarExp;
//# sourceMappingURL=tabbar.js.map