import React from "react"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {HashRouter,Route} from "react-router-dom"
import rootReducer from "../../reducers/index"
import HomePage from "../Homepage/homePage.jsx"
import Productpage from "../ProductPage/productPage.jsx"
import CheckOutPage from "../CheckOutPage/checkOutPage.jsx"


const store=createStore(rootReducer);
store.subscribe(()=>{console.log('store 變動')})

class Main extends React.Component {
    render(){
        return(
            <div>
            <Provider store={store}>
                <HashRouter>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/product/:id" component={Productpage}/>
                            <Route path="/checkOut" component={CheckOutPage}/>
                            
                </HashRouter>
            </Provider>
            </div>
        )
        }
    }

export {Main}