import React,{Component,Fragment} from 'react'
import {Link} from 'react-router'
import Input from "./input/Input";
// import Store from "./input/store"

import {observer,inject} from 'mobx-react';

@inject('Store')
@observer
class Home extends Component{
    render(){
        return (
            <Fragment>
                <div className="container">
                    <div>
                        <span>
                            ims 后台管理系统
                        </span>
                        <span className={"hello"}>
                            ims 欢迎你
                        </span>
                    </div>
                    <ul className="nav nav-tabs" id="myTab">
                        <li className="link active">
                            <Link to="home/Paper">
                                Papers
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="home/Patent">
                                Patent
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="home/Software_copyright">
                                Software_copyright
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="home/Awards">
                                Awards
                            </Link>
                        </li>
                    </ul>
                    {/*{*/}
                        {/*this.state.activeTab==='paper' ?*/}
                            {/*<Paper />*/}
                            {/*:null*/}
                    {/*}*/}
                    {/*{*/}
                        {/*this.state.activeTab==='Patent' ?*/}
                            {/*<Paper />*/}
                            {/*:null*/}
                    {/*}*/}
                    {/*{*/}
                        {/*this.state.activeTab==='paper' ?*/}
                            {/*<Paper />*/}
                            {/*:null*/}
                    {/*}*/}
                    {/*{*/}
                        {/*this.state.activeTab==='paper' ?*/}
                            {/*<Paper />*/}
                            {/*:null*/}
                    {/*}*/}
                    {this.props.children}
                    <Input item = {"222"}/>
                    <div>

                    </div>
                </div>
            </Fragment>
        )
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

export default Home


