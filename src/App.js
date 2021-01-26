import React , {Component} from 'react';
import {Route } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home'


class App extends Component {
    render(){
        return(
            <div>
           <Route path='/' exact component={Auth}/>
           <Route path='/home' component={Home}/>
           </div>
        )
    }
}

export default App ;