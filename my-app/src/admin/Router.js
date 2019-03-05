import React,{Component} from 'react'
import Login from './Login'
import Home from './Home'
import { Router , Route, hashHistory } from 'react-router';
import {inject, observer} from "mobx-react";


@inject('StoreLogin')
@observer
class index extends Component{
    render(){
        const {StoreLogin} = this.props;
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home} onEnter={(nexState,replace,cb)=>StoreLogin.isAdmin(nexState,replace,cb)}/>
            </Router>
        )
    }
}
export default index


