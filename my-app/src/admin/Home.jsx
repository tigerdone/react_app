import React,{Component,Fragment} from 'react'
import Input from "./input/Input";
import DeleteConfirm from "./input/DeleteConfirm";
import DataList from "./publications/DataList";
import axios from "axios/index";

export default class Home extends Component{
    getClassName=(value)=>{
        if (this.state.activeClass === value){
            return " linkActive"
        }
        else {
            return ""
        }
    };
    getData=(e)=>{
        this.setState({
            Data: []
        });
        let box = [];
        let router = '/admin/Data?name=' + e.toLocaleLowerCase();
        axios.get(router)
            .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        box.push(item);
                        console.log(item)
                    });
                    this.setState({
                        Data: box
                    })
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    setClassName=(value)=>{
        this.setState({
            activeClass: value
        })
    };
    clearInput=()=>{
        console.log("clearInput")
    };

    constructor(props){
        super(props);
        this.state = {
            activeClass:"paper",
            Data:[],
            Input:{}
        }
    }

    componentDidMount(){
        this.getData("paper")
    }

    render(){
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
                    <ul
                        className="nav nav-tabs"
                        id="myTab"
                    >
                        <li className={"link" + this.getClassName("paper")}>
                            <button onClick={(e)=>{this.getData("paper");this.setClassName("paper")}}>
                                Papers
                            </button>
                        </li>
                        <li className={"link" + this.getClassName("patent")}>
                            <button onClick={(e)=>{this.getData("patent");this.setClassName("patent")}}>
                                Patent
                            </button>
                        </li>
                        <li className={"link" + this.getClassName("software_copyright")}>
                            <button onClick={(e)=>{this.getData("software_copyright");this.setClassName("software_copyright")}}>
                                Software_copyright
                            </button>
                        </li>
                        <li className={"link" + this.getClassName("awards")}>
                            <button onClick={(e)=>{this.getData("awards");this.setClassName("awards")}}>
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
                                onClick={()=>this.clearInput()}
                            >
                                添加
                            </button>
                        </li>
                    </ul>
                    <DataList Data = {this.state.Data}/>
                    <Input/>
                    {/*<DeleteConfirm/>*/}
                </div>
            </Fragment>
        )
    }
}


