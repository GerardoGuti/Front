import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from '../App';
import Description from '../components/description';
import Store from '../components/Store';
// import Cart from '../components/Cart';


class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/store' component={Store}/>
                    <Route path='/description' component={Description}/>
                    <Route exact={true} path='/' component={App}/>
                </Switch>
            </Router>
        );
    }

}
export default Routes;