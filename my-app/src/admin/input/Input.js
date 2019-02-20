import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

import DropDown from './DropDown'


@inject('Store')
@observer
class Input extends Component{
    render(){
        const {Store}=this.props;
        return(
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*// <!-- 模态框头部 -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title">
                                新的信息
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/*// <!-- 模态框主体 -->*/}
                        <div className="modal-body">
                            <div className="message_box">
                                <form
                                    id="my_form"
                                    className="message_form"
                                    method="post"
                                >
                                    {
                                       Store.InputBox._id === "" ?(
                                           <DropDown/>
                                       )
                                       :null
                                    }
                                    <div className={"message_name"}>
                                        item:
                                    </div>
                                    <div className="input_message">
                                        <textarea
                                            className="username"
                                            required="required"
                                            type="text"
                                            placeholder="item"
                                            value={Store.InputBox.item}
                                            name="name"
                                            onChange={(e)=>Store.handleInputBoxInput('item',e.target.value)}
                                        />
                                    </div>
                                    <div className={"message_name"}>
                                        paper link:
                                    </div>
                                    <div className="input_message">
                                        <input
                                            type="text"
                                            required="required"
                                            placeholder="paper link"
                                            name="password"
                                            value={Store.InputBox.paper}
                                            onChange={(e)=>Store.handleInputBoxInput('paper',e.target.value)}

                                        />
                                    </div>
                                    <div className={"message_name"}>
                                        video link:
                                    </div>
                                    <div className="input_message">
                                        <input
                                            type="text"
                                            required="required"
                                            placeholder="video link"
                                            name="password"
                                            value={Store.InputBox.video}
                                            onChange={(e)=>Store.handleInputBoxInput('video',e.target.value)}

                                        />
                                    </div>
                                    <div className="btn_item message_btn">
                                        <button
                                            id="my_submit"
                                            type="button"
                                            className="button login_in"
                                            onClick={Store.inputUpdate}
                                            data-dismiss="modal"

                                        >
                                            提交
                                        </button>
                                        <button
                                            type="button"
                                            className="button"
                                            data-dismiss="modal"
                                        >
                                            取消
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Input;
