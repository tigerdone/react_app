import React,{Component} from 'react'
import axios from "axios/index";

class Login extends Component{
    loginInputBoxInput=(key,value)=>{
        console.log(key);
        this.setState({
            [key]:value
        })
    };
    handleLogin=()=>{
        console.log(this.state.inputName, '提交数据');
        axios.post('/admin/login',this.state)
            .then((res)=>{
                if (res.status === 200){
                    window.location.hash = "#/home"
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("密码错误")
            });
    };
    constructor(props){
        super(props);
        this.state ={
            inputName:"",
            inputPassword:"",
            power_id:"",

        }
    }

    render(){
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
                                    <img
                                        src="img/user.jpg"
                                        alt="user"
                                    />
                                </div>
                                <input
                                    className="username"
                                    required="required"
                                    type="text"
                                    placeholder="账号"
                                    name="name"
                                    value={this.state.inputName}
                                    onChange={(e)=>{this.loginInputBoxInput("inputName",e.target.value)}}
                                />
                            </div>
                            <div className="input_item">
                                <div className="the_icon">
                                    <img
                                        src="img/password.jpg"
                                        alt="user"
                                    />
                                </div>
                                <input
                                    type="password"
                                    required="required"
                                    placeholder="密码"
                                    name="password"
                                    value={this.state.inputPassword}
                                    onChange={(e)=>this.loginInputBoxInput("inputPassword",e.target.value)}
                                />
                            </div>
                            <div
                                className="input_item radio"
                                onChange={(e)=>this.loginInputBoxInput("power_id",e.target.value)}
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
                                    onClick={this.handleLogin}
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



