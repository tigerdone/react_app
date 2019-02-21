import React,{Component} from 'react'
import DropDown from './DropDown'

class Input extends Component{
    inputUpdate=()=>{
        console.log("inputUpdate");
    };

    handleInputBoxInput=(key,value)=>{
        this.setState({
            [key]:value
        });
    };
    constructor(props){
        super(props);
        this.state ={
            item:"",
            paper:"",
            video:"",

        };
    }

    render(){
        const InputBox = this.state.inputBox;
        return(
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                新的信息
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="message_box">
                                <form
                                    id="my_form"
                                    className="message_form"
                                    method="post"
                                >
                                    {/*{*/}
                                       {/*this.InputBox._id === "" ?(*/}
                                           {/*<DropDown/>*/}
                                       {/*)*/}
                                       {/*:null*/}
                                    {/*}*/}
                                    <div className={"message_name"}>
                                        item:
                                    </div>
                                    <div className="input_message">
                                        <textarea
                                            className="username"
                                            required="required"
                                            placeholder="item"
                                            value={this.state.item}
                                            name="name"
                                            onChange={(e)=>this.handleInputBoxInput('item',e.target.value)}
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
                                            value={this.state.paper}
                                            onChange={(e)=>this.handleInputBoxInput('paper',e.target.value)}
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
                                            value={this.state.video}
                                            onChange={(e)=>this.handleInputBoxInput('video',e.target.value)}
                                        />
                                    </div>
                                    <div className="btn_item message_btn">
                                        <button
                                            id="my_submit"
                                            type="button"
                                            className="button login_in"
                                            onClick={this.inputUpdate}
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
                    </div>
                </div>
            </div>
        )
    }
}


export default Input;
