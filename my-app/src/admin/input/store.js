import {
    observable,
    action,
    computed,
    decorate
} from 'mobx'
import axios from 'axios'//发送ajax 请求

class Timer {
    start = Date.now();
    @observable current = Date.now();
    @computed get elapsedTime() {
        return (this.current - this.start) + "seconds"
    }
}

class Store {
    constructor() {
        this.getPaper();
        this.getPatent();
        this.getSoftware_copyright();
        this.getAwards();

    }

    @observable Paper = []
    @observable Patent = []
    @observable Software_copyright = []
    @observable Awards = []

    addPaper(item){
        this.Paper.push(item)
    }
    addPatent(item){
        this.Patent.push(item)
    }
    addSoftware_copyright(item){
        this.Software_copyright.push(item)
    }
    addAwards(item){
        this.Awards.push(item)
    }

    @computed get PaperLength(){
        return this.Paper.length;
    }
    @computed get PaperLength(){
        return this.Patent.length;
    }
    @computed get PaperLength(){
        return this.Software_copyright.length;
    }
    @computed get PaperLength(){
        return this.Awards.length;
    }

    @observable InputBox = {
        type:"",
        item:"",
        video:"",
        paper:"",
    }

    getPaper=(e)=>{
        axios.get('/admin/PaperData')
            .then((res)=>{
                console.log("sdfdsfsdf"+res.data)

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
    getPatent=(e)=>{
        axios.get('/admin/PatentData')
            .then((res)=>{
                if (res.status === 200){
                    this.addPatent(res.data[0])
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getSoftware_copyright=(e)=>{
        axios.get('/admin/Software_copyrightData')
            .then((res)=>{
                if (res.status === 200){
                    this.addSoftware_copyright(res.data[0])
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getAwards=(e)=>{
        axios.get('/admin/AwardsData')
            .then((res)=>{
                if (res.status === 200){
                    this.addAwards(res.data[0])
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setInput=(value)=>{
        this.InputBox = value
    }
    setInputItem=(value)=>{
        this.InputBox.item = value
    }
    setInputVideo=(value)=>{
        this.InputBox.video = value
    }
    setInputPaper=(value)=>{
        this.InputBox.paper = value
    }
}


export default new Store();
