import React from "react"
import {connect} from "react-redux"
import styles from "./homepage.css"
import ProductList from "../../components/ProductList/productList.jsx"
import Header from "../Header/header.jsx"

class Homepage extends React.Component{

    
    
    render(){
        // let reduxData= this.props.data.cartReducer.products;
        // console.log(this.props.data.cartReducer.products);
        
        const list=[];
        for(let i=1;i<24;i++){
            // list.push(<div className={styles.productbox}><img className={styles.productimg} src={`../src/assets/img/${i}.png`} alt="product"/></div>)
            
        }
        return(
            <div className={styles.container}>
                <Header/>
                <ProductList/>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//      return {data:state}
// }

// export default connect(mapStateToProps)(Homepage);
export default Homepage