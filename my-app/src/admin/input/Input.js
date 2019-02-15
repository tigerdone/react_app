import React,{Component} from 'react'
import {observer} from 'mobx-react'

const Input = observer(({item}) =>
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
                    <div className="login_box">
                        <p className="item">
                            登录
                        </p>
                        <form
                            id="my_form"
                            // action="/#/a"
                            className="input_box"
                            method="post"
                            // onSubmit={this.handleLogin}

                        >
                            <div className="input_item">
                                <div className="the_icon">
                                    <img src="img/user.jpg" alt="user"/>
                                </div>
                                <input
                                    className="username"
                                    required="required"
                                    type="text"
                                    placeholder="账号"
                                    value={item}
                                    name="name"
                                />
                            </div>
                            <div className="input_item">
                                <div className="the_icon">
                                    <img src="img/password.jpg" alt="user"/>
                                </div>
                                <input
                                    type="password"
                                    required="required"
                                    placeholder="密码"
                                    name="password"
                                    // onChange={this.handleInputPasswordChange}
                                />

                            </div>
                            <div className="btn_item">
                                <button
                                    id="my_submit"
                                    type="button"
                                    className="button login_in"
                                    // onClick={this.handleApply}
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


export default Input;
