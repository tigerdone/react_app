import React,{Component} from 'react'
// import Store from '../input/store'
import Item from './Item'
import {observer,inject} from 'mobx-react'

@inject('Store')
@observer
class Index extends Component{
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
                            {
                                this.props.Store.Software_copyright.map(
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


