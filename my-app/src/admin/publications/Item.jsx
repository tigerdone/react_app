import React,{Component} from 'react'

const {items} = this.props;

class Index extends Component{
    render(){
        return (
            <tr className="active">
                <td>
                    <p className="body_item">
                        {items.item}
                    </p>
                </td>
                <td>
                    <p className="body_item">
                        {items.paper}
                    </p>
                </td>
                <td>
                    <p className="body_item">
                        {items.video}
                    </p>
                </td>
                <td>
                    <button
                        name=""
                        type="button"
                        className="btn btn-success edit_id"
                        data-toggle="modal"
                        data-target="#myModal"
                        // onClick={()=>Store.setInput(items)}
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
                        data-target="#myModalDelete"
                        // onClick={()=>Store.setInput(items)}
                    >
                        删除
                    </button>
                </td>
            </tr>
        )
    }
}

export default Index
