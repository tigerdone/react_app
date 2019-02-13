import React,{Component,Fragment} from 'react'
import {Link} from 'react-router'
import axios from 'axios'//发送ajax 请求


const API = 'http://127.0.0.1/my_test';
class index extends Component{
    constructor(props) {
        super(props);
        //当组件的state或者Props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: 'hello world',
            list: []
        }

    }
    render(){
        return (
            <Fragment>
                <div>{this.props.children}</div>
                <div>
                    <li><Link to="a">Repos</Link></li>
                </div>
                <div>
                    <li><Link to="b">About</Link></li>
                </div>
                <div>
                    <li><Link to="Contact">Contact</Link></li>
                </div>
                <div>
                    fagoijgoajg
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    componentDidMount() {
        console.log("oklogin")
        axios.get(API)
            .then((res2222)=>{
                let data = JSON.parse(res2222.data);
                console.log(data)
                this.setState ({
                    list:data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
                <div>
                    {item}
                </div>
            )
        })
    }

}

export default index


