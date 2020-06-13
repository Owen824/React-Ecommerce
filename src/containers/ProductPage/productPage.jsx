import React from "react"
import styles from "./productPage.css"
import Header from "../Header/header.jsx"
import ProductDetail from "../../components/ProductDetail/productDetail.jsx"
import FloatCart from "../../components/FloatCart/floatCart.jsx"
import Footer from "../Footer/footer.jsx"

class ProductPage extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        //得知產品id
        const productId=this.props.match.params.id;
    
        return(
            <div className={styles.productPage}>
                <Header page="product" />
                <ProductDetail productId={productId}/>
                <FloatCart/>
                <Footer/>
            </div>
        )
    }
}

export default ProductPage