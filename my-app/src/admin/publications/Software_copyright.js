import React,{Component} from 'react'

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
                            <tr className="active">
                                <td>
                                    <p className="body_item">
                                        233sdfsdf
                                    </p>
                                </td>
                                <td>
                                    <p className="body_item">
                                        234fdgfdg
                                    </p>
                                </td>
                                <td>
                                    <p className="body_item">
                                        235dfgfdg
                                    </p>
                                </td>
                                <td>
                                    <button
                                        name=""
                                        type="button"
                                        className="btn btn-success edit_id"
                                        data-toggle="modal"
                                        data-target="#myModal"
                                    >
                                        修改
                                    </button>
                                </td>
                                <td>
                                    <button
                                        name=""
                                        type="button"
                                        className="btn btn-success delete_id"
                                        data-toggle="modal"
                                        data-target="#myModal2"
                                    >
                                        删除
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Index


