import React,{Component} from 'react'
// import Store from '../input/store'
import {observer,inject} from 'mobx-react'

@inject('Store')
@observer
class Index extends Component{
    constructor(props) {
        super(props);
        //当组件的state或者Props发生改变的时候，render函数就会重新执行
        const {items} = this.props;
        this.state = {
            item: items
        }
    }
    render(){
        const {items} = this.props;
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
                            // onClick={(items)=>this.update_input}
                            onClick={this.updateInput}
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
    updateInput = (e) =>{
        console.log(e.target)
            this.props.Store.setInput(this.state.item)
    }
}

export default Index

