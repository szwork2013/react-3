import { Grid ,Toast} from 'antd-mobile';
import React from 'react';

const data1 = [
    {
        icon: require('./images/g.png'),
        text: '售价审核',
        link: 'hehe',
    }
];


const data2 = [
    {
        icon: require('./images/g.png'),
        text: '仓库库存',
        link: 'hehe',
    }
];

const data3 = [
    {
        icon: require('./images/g.png'),
        text: '客记管理',
        link: 'hehe',
    }, {
        icon: require('./images/g.png'),
        text: '客户拜访',
        link: 'hehe',
    },
];

const data4 = [

];


export default class GridExp extends  React.Component{
    constructor(props){
        super(props);

    }

    handleRoute(grid){
        console.log(grid);
        this.context.router.push("list/222");
    }


    render() {
        var t = this;
        var cate = this.props.cate;
        let data = data1;
        if(cate=='2'){
            data = data2;
        } else if(cate=='3'){
            data = data3;
        }else if(cate =='4'){
            data = data4;
        }
        return (<div>
            <Grid
                data={data}
                hasLine={true}
                onClick={t.handleRoute.bind(this)}
                isCarousel
            />
        </div>);
    }
}
GridExp.contextTypes = {
    router: React.PropTypes.object.isRequired
};