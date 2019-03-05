import React,{Component,Fragment} from 'react'
import Project from "./Element/Project";
import Publications from "./Element/Publications";
import {observer,inject} from 'mobx-react';

@inject('StoreLogin')
@observer
class Home extends Component{
    render(){
        const {StoreLogin} = this.props;
        return (
            <Fragment>
                <div className={"title"}>
                    <span>
                        ims 后台管理系统
                    </span>
                    <span className={"hello"}>
                        ims 欢迎你
                    </span>
                    <button
                        name=""
                        type="button"
                        className="btn btn-success edit_id"
                        onClick={()=>{StoreLogin.handleLoginOut()}}
                    >
                        注销
                    </button>
                </div>

                <Publications/>
                <Project/>
            </Fragment>
        )
    }
}
export default Home


