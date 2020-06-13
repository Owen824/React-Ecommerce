import React from "react"
import {connect} from "react-redux"
import styles from "./homePage.css"
import ProductList from "../../components/ProductList/productList.jsx"
import Header from "../Header/header.jsx"
import FilterBar from "../FilterBar/filterBar.jsx"
import FloatCart from "../../components/FloatCart/floatCart.jsx"
import Footer from "../Footer/footer.jsx"


class HomePage extends React.Component{
   
    render(){
        
        return(
            <div className={styles.backColor}>
                {/* header page="home" 要讓header以home的css樣式表示 */}
                <Header page="home"/>
                <div className={styles.container}>
                <FilterBar/>
                <ProductList/>
                <FloatCart/>
                </div>
                <Footer/>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//      return {data:state}
// }

// export default connect(mapStateToProps)(Homepage);
export default HomePage