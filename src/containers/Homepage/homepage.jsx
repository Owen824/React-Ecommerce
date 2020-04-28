import React from "react"
import {connect} from "react-redux"
import styles from "./homePage.css"
import ProductList from "../../components/ProductList/productList.jsx"
import Header from "../Header/header.jsx"
import FilterBar from "../FilterBar/filterBar.jsx"

class HomePage extends React.Component{

    
    
    render(){
        
    
        
        return(
            <div className={styles.backColor}>
                <Header page="home"/>
                <div className={styles.container}>
                <FilterBar/>
                <ProductList/>
                </div>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//      return {data:state}
// }

// export default connect(mapStateToProps)(Homepage);
export default HomePage