import { Grid ,Toast} from 'antd-mobile';
import React from 'react';

const data4 = [
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '业务系统',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '测试',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '名字',
        link: 'hehe',
    },
];


export default class GridExp extends  React.Component{


    handleRoute(grid){
        console.log(grid);
        Toast.success('加载成功!!!');
        this.context.router.push("list");
    }


    render() {
        var t = this;
        return (<div>
            <Grid
                data={data4}
                hasLine={false}
                onClick={t.handleRoute.bind(this)}
                isCarousel
            />
        </div>);
    }
}
GridExp.contextTypes = {
    router: React.PropTypes.object.isRequired
};