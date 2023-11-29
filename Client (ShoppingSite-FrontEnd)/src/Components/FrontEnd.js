import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header-Footer/Header';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './404NotFound/404NotFound';

import ShoppingCart from "./SHOP/Views/Cart/ShoppingCart";
import AddItem from './SHOP/Views/ShopAdmin/AddItem'
import ProductList from "./SHOP/Views/ShopAdmin/ProductList";
import EditItem from "./SHOP/Views/ShopAdmin/EditItem";

import OrderList from "./SHOP/Views/ShopAdmin/OrderList";
import Payment from "./SHOP/Views/Cart/Payment";
import Delivery from "./SHOP/Views/Cart/Delivery";
import Account from "./Login/Account";

class FrontEnd extends Component {

    state = {}

    render() {

        return (

            <div className="FrontEnd">

                <Router>

                    <Header/>

                    <Switch>


                        <Route path="/" exact component={Home}/>
                        {/*<Route path="/login" component={Login}/>*/}
                        {/*<Route path="/signup" component={SignUp}/>*/}
                        <Route path="/logout" component={Login}/>
                        <Route path="/myAccount" component={Account}/>

                        <Route path="/ShoppingCart/:id" component={ShoppingCart}/>
                        <Route path="/ShoppingCart/" component={ShoppingCart}/>
                        <Route path="/Payment/:total" component={Payment} />
                        <Route path="/Payment/:id" component={Login} />
                        <Route path="/Payment" component={Payment} />
                        <Route path="/Payment/login" component={Login} />
                        <Route path="/delivery/:id" component={Delivery} />
                        <Route path="/delivery" component={Delivery} />

                        <Route path="/ViewAll/logout" component={Login}/>
                        <Route path="/ViewAll/login" component={Login}/>
                        <Route path="/AddItems" component={AddItem}/>
                        <Route path="/ViewAll" component={ProductList}/>
                        <Route path="/EditItem/:id"  component={EditItem}/>
                        <Route path="/EditItem/"  component={EditItem}/>
                        <Route path="/OrderList" component={OrderList} />


                        <Route component={NotFound}/>

                    </Switch>


                </Router>

            </div>

        );
    }
}

export default FrontEnd;
