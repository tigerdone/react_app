import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import axios from 'axios'

@inject('Store')
@observer
class Input extends Component{

    render(){
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
                                {/*<p className="item">*/}
                                    {/*登录*/}
                                {/*</p>*/}
                                <form
                                    id="my_form"
                                    // action="/#/a"
                                    className="message_form"
                                    method="post"
                                    // onSubmit={this.handleLogin}

                                >
                                    <div className={"message_name"}>
                                        item:
                                    </div>
                                    <div className="input_message">
                                        <textarea
                                            className="username"
                                            required="required"
                                            type="text"
                                            placeholder="item"
                                            value={this.props.Store.InputBox.item}
                                            name="name"
                                            onChange={this.reUpdateItem}
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
                                            value={this.props.Store.InputBox.paper}
                                            onChange={this.reUpdatePaper}

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
                                            value={this.props.Store.InputBox.video}
                                            onChange={this.reUpdateVideo}

                                        />

                                    </div>
                                    <div className="btn_item message_btn">
                                        <button
                                            id="my_submit"
                                            type="button"
                                            className="button login_in"
                                            onClick={this.handleUpdate}
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
                        {/*// <!-- 模态框底部 -->*/}
                        {/*<div className="modal-footer">*/}
                        {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">*/}
                        {/*关闭*/}
                        {/*</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }

    reUpdatePaper = (e) =>{
        this.props.Store.setInputPaper(e.target.value);
    }
    reUpdateItem = (e) =>{
        this.props.Store.setInputItem(e.target.value);
    }
    reUpdateVideo = (e) =>{
        this.props.Store.setInputVideo(e.target.value);
    }

    handleApply = (e) =>{
        var a = this.props.Store.InputBox;
        delete a._id;
        axios.post('/admin/insertPaper',this.props.Store.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("提交成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("密码错误")
            });
    }
    handleUpdate = (e) =>{
        axios.post('/admin/updatePaper',this.props.Store.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("提交成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("密码错误")
            });
    }
}


export default Input;
