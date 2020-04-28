import React from "react"
import styles from "./productPage.css"
import Header from "../Header/header.jsx"
import ProductDetail from "../../components/ProductDetail/productDetail.jsx"
import FloatCart from "../../components/FloatCart/floatCart.jsx"

class ProductPage extends React.Component{
    render(){
        console.log(this.props.match.params.id);
        const productId=this.props.match.params.id;
    
        return(
            <div className={styles.productPage}>
                <Header page="product" />
                <ProductDetail productId={productId}/>
                <FloatCart/>
                
            </div>
        )
    }
}

export default ProductPage