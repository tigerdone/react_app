import React,{Component} from 'react'
import Login from './Login'
import Home from './Home'
import { Router,IndexRoute , Route, hashHistory } from 'react-router';

class index extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
            </Router>
        )
    }
}

export default index


