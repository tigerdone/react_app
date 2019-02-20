import React,{Component,Fragment} from 'react'
import Input from "./input/Input";
import DeleteConfirm from "./input/DeleteConfirm";
import Paper from "./publications/Paper";

import {observer,inject} from 'mobx-react';

@inject('Store')
@observer
class Home extends Component{
    render(){
        const {Store} = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className={"title"}>
                        <span>
                            ims 后台管理系统
                        </span>
                        <span className={"hello"}>
                            ims 欢迎你
                        </span>
                    </div>
                    <ul className="nav nav-tabs" id="myTab">
                        <li className={"link" + Store.getClassName("paper")}>
                            <button onClick={(e)=>{Store.getPaper("paper");Store.setClassName("paper")}}>
                                Papers
                            </button>
                        </li>
                        <li className={"link" + Store.getClassName("patent")}>
                            <button onClick={(e)=>{Store.getPaper("patent");Store.setClassName("patent")}}>
                                Patent
                            </button>
                        </li>
                        <li className={"link" + Store.getClassName("software_copyright")}>
                            <button onClick={(e)=>{Store.getPaper("software_copyright");Store.setClassName("software_copyright")}}>
                                Software_copyright
                            </button>
                        </li>
                        <li className={"link" + Store.getClassName("awards")}>
                            <button onClick={(e)=>{Store.getPaper("awards");Store.setClassName("awards")}}>
                                Awards
                            </button>
                        </li>
                        <li className={"addBtn"}>
                            <button
                                name=""
                                type="button"
                                className="btn btn-success edit_id"
                                data-toggle="modal"
                                data-target="#myModal"
                                // onClick={(items)=>this.update_input}
                                onClick={()=>Store.clearInput()}
                            >
                                添加
                            </button>
                        </li>

                    </ul>

                    <Paper/>
                    <Input/>
                    <DeleteConfirm/>
                </div>
            </Fragment>
        )
    }
}

export default Home


