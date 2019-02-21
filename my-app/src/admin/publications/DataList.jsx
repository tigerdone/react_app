import React,{Component} from 'react'
import Item from './Item'

class Index extends Component{
    render(){
        const {Data} = this.props;
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
                                {
                                    Data.map(
                                        (todo) => <Item
                                            key = {Math.random()}
                                            items = {todo}
                                        />
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Index


