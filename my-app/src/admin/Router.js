import React,{Component} from 'react'
import Login from './Login'
import Home from './Home'
import { Router,IndexRoute , Route, hashHistory } from 'react-router';

class index extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
            </Router>
        )
    }
}
export default index


