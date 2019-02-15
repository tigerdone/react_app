import React,{Component} from 'react'

class Index extends Component{
    render(){
        const {items,test} = this.props;
        return (
                <tr className="active">
                    <td>
                        <p className="body_item">
                            {items.hello}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.hello2}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.hello3}
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
        )
    }
}

export default Index

