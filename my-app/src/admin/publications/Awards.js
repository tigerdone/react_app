import React,{Component} from 'react'
import Item from './Item'




class Index extends Component{

    constructor(props) {
        super(props);
        //当组件的state或者Props发生改变的时候，render函数就会重新执行
        this.state = {
            list: [
                {"hello":"world"},
                {"hello2":"world2"},
                {"hello3":"world3"},
            ]
        }

    }

    render(){
        return (
            <div className="tab-content">
                <div className="tab-pane active" id="profile">
                    <div className="">
                        <table className="table table-bordered mytable">
                            <thead>
                                <tr>
                                    <th className="td">
                                        <p className="t_header">
                                            item
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            paper link
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            video link
                                        </p>
                                    </th>
                                    <th colSpan={2}>
                                        <p className="t_header">
                                            操作
                                        </p>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="my_tbody">
                                {this.getTodoItem()}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
    }

    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
                <Item
                    key = {Math.random()}
                    test={'222'}
                    items = {item}
                />
            )
        })
    }
}

export default Index


