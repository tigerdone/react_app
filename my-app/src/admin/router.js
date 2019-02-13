import React,{Component} from 'react'
// import Home from './home'
import Contact from './contact'
import About from './about'
import Login from './login'
import Home from './Home'
import About_c from './about_c'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


class index extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}></Route>
                <Route path='login' component={Login}></Route>
                <Route path='Contact' component={Contact}></Route>
                <Route path='a' component={About}></Route>
                <Route path='b' component={About_c}></Route>
                <Route path='home' component={Home}></Route>

            </Router>
        )
    }
}

export default index


