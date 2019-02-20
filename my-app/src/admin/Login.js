import React,{Component} from 'react'
import {inject, observer} from "mobx-react/index";

@inject('Store')
@observer
class Login extends Component{
    render(){
        const {Store} = this.props;
        return (
            <div className="page">
                <div className={"body_container"}>
                    <p className="firm_title">
                        管理员后台管理系统
                    </p>
                    <div className="login_box">
                        <p className="item">
                            登录
                        </p>
                        <form
                            id="my_form"
                            className="input_box"
                            method="post"
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
                                    name="name"
                                    onChange={(e)=>{Store.loginInputBoxInput("inputName",e.target.value)}}
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
                                    onChange={(e)=>{Store.loginInputBoxInput("inputPassword",e.target.value)}}
                                />
                            </div>
                            <div
                                className="input_item radio"
                                onChange={(e)=>{Store.loginInputBoxInput("power_id",e.target.value)}}
                            >
                                <div className="radio_item">
                                    <label>
                                        <input
                                            required="required"
                                            value="管理员"
                                            name="login_type"
                                            type="radio"
                                            defaultChecked
                                        />
                                        <span>
                                            管理员
                                        </span>
                                    </label>
                                </div>
                                <div className="radio_item">
                                    <label>
                                        <input
                                            required="required"
                                            value="超级管理员"
                                            name="login_type"
                                            type="radio"
                                        />
                                        <span>
                                            超级管理员
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="btn_item">
                                <button
                                    id="my_submit"
                                    type="button"
                                    className="button login_in"
                                    onClick={()=>{Store.handleLogin()}}
                                >
                                    登录
                                </button>
                                <button
                                    type="button"
                                    className="button"
                                    onClick={()=>{window.location.href='../../'}}
                                >
                                    取消
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login



