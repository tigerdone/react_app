import {
    observable,
    action,
    computed,
    decorate
} from 'mobx'
import axios from 'axios'//发送ajax 请求

// configure({ enforceActions: value })

class Store {
    constructor() {
        this.getPaper("Paper");
    }
    @observable Paper = []
    @observable InputBox = {
        _id:"",
        type:"",
        item:"",
        video:"",
        paper:"",
    }
    @observable loginInputBox = {
        inputName: '',
        inputPassword: '',
        power_id: '管理员',
    }
    @computed get PaperLength(){
        return this.Paper.length;
    }
    @action
    handleInputBoxInput=(key,value)=>{
        this.InputBox[key]=value;
    }
    @action
    loginInputBoxInput=(key,value)=>{
        this.loginInputBox[key]=value;
    }
    @action
    addPaper(item){
        this.Paper.push(item)
    }
    getPaper=(e)=>{
        // console.log("aaa"+e)
        this.Paper = []
        var router = '/admin/Data?name=' + e.toLocaleLowerCase();
        axios.get(router)
            .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        this.addPaper(item)
                    })
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deepClone=(v)=>{
        return JSON.parse(JSON.stringify(v));
    }
    setInput=(value)=>{
        this.InputBox = this.deepClone(value);
    }
    clearInput=()=>{
        this.InputBox._id= "";
        this.InputBox.type= "paper";
        this.InputBox.item= "";
        this.InputBox.video= "";
        this.InputBox.paper= "";

        // Object.keys(this.InputBox).forEach(function(ss){
        //     this.InputBox[ss] = "";
        // })
    }
    inputUpdate = (e) =>{
        var router;
        if (this.InputBox._id === ""){
            console.log(this.InputBox)
            router = '/admin/insertPaper'
        }
        else{
            router = '/admin/updatePaper'
        }
        axios.post(router,this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("提交成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("提交失败")
            });
        this.relode()

    }
    handleLogin=(e)=>{
        console.log(this.loginInputBox.inputName, '提交数据');
        axios.post('/admin/login',this.loginInputBox)
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
    }
    handleDelete=(e)=>{
        axios.post('/admin/deleteOne',this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("删除成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.relode()
    }

    relode=(e)=>{
        var e = "paper";
        if(this.Paper.length !== 0){
            if (this.Paper[0].type === "patent") {
                e = "patent";
            }
            if (this.Paper[0].type === "software_copyright") {
                e = "software_copyright";
            }
            if (this.Paper[0].type === "awards") {
                e = "awards";
            }
        }

        this.getPaper(e)
    }

    @observable activeClass = "paper";
    getClassName=(e)=>{
        if(this.activeClass === e){
            return " linkActive"
        }
        else {
            return ""

        }
    }
    setClassName=(e)=>{
        this.activeClass = e
    }
}


export default new Store();
