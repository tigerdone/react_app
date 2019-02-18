import React,{Component} from 'react'
import Login from './Login'
import Home from './Home'

import Paper from './publications/Paper'
import Patent from './publications/Patent'
import Software_copyright from './publications/Software_copyright'
import Awards from './publications/Awards'

import { Router,IndexRoute , Route, hashHistory } from 'react-router';
import Store from './input/store'


class index extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}></Route>
                <Route path='login' component={Login}></Route>
                <Route path='home' component={Home}>
                    <IndexRoute component={Paper} />
                    <Route path='Paper' component={Paper}></Route>
                    <Route path='Patent' component={Patent}></Route>
                    <Route path='Software_copyright' component={Software_copyright}></Route>
                    <Route path='Awards' component={Awards}></Route>
                </Route>
            </Router>
        )
    }
}

export default index


