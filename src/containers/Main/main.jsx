import React from "react"
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "../../reducers/index"
import Homepage from "../Homepage/homepage.jsx"


const store=createStore(rootReducer);

class Main extends React.Component {
    render(){
        return(
            <div>
            <Provider store={store}>
            <Homepage/>
            </Provider>
            </div>
        )
        }
    }

export {Main}