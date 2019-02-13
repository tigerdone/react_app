import React,{Component} from 'react'
import axios from 'axios'//发送ajax 请求
import { browserHistory } from 'react-router'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            inputname: '',
            inputPassword: '',
            power_id: '管理员',
        }
        this.handleInputnameChange = this.handleInputnameChange.bind(this)
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)

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
                            // action="/#/a"
                            className="input_box"
                            method="post"
                            onSubmit={this.handleLogin}

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
                                    onChange={this.handleInputnameChange}
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
                                    onChange={this.handleInputPasswordChange}

                                />
                            </div>

                            <div className="input_item radio" onChange={this.handleRadioChange}>
                                <div className="radio_item">
                                    <label>
                                        <input
                                            required="required"
                                            value="管理员"
                                            name="login_type"
                                            type="radio"
                                            defaultChecked
                                            // checked={this.power_id === '管理员'}

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
                                            // checked={this.power_id === '超级管理员'}

                                        />
                                        <span>
                                            超级管理员
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="attention">
                                {/*<!--message-->*/}
                            </div>

                            <div className="btn_item">
                                <button
                                    id="my_submit"
                                    type="submit"
                                    className="button login_in"
                                    // onClick={this.handleLogin}
                                >
                                    登录
                                </button>
                                <button
                                    type="button"
                                    className="button"
                                    onClick={
                                        function () {
                                            window.location.href='../../'
                                        }
                                    }
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

    handleInputnameChange(e){
        // console.log(e.target)
        const value = e.target.value;
        this.setState(()=>({
            inputname: value
        }))
    }
    handleInputPasswordChange(e){
        // console.log(e.target)
        const value = e.target.value;
        this.setState(()=>({
            inputPassword: value
        }))
    }
    handleInputRadioChange(e){
        // console.log(e.target)
        const value = e.target.value;
        this.setState(()=>({
            inputPassword: value
        }))
    }
    handleRadioChange(e){
        // console.log(e.target.value)
        const value = e.target.value;
        this.setState(()=>({
            power_id: value
        }))
    }

    handleLogin(e){
        e.preventDefault();

        console.log("oklogin")
        axios.post('/my_test',{a:100})
        .then((res2222)=>{
            // var data = JSON.parse(res2222.data);
            // console.log(data)
            console.log(res2222)

        })
        .catch(function (error) {
            console.log(error);
        });
        const path = '/#/home';
        browserHistory.push(path);

    }
}

export default Login



