import React from "react"
import Product from "../Product/product.jsx"
import styles from "./productList.css"
import { connect } from "react-redux"

class ProductList extends React.Component {

    render() {
        const reduxData = this.props.data.cartReducer.products;
        const items = reduxData.map((item,index) => {
            console.log(item.name);
            console.log(index);
            return (
                <Product  product={item} count={index+1} />
            )
        })


        return (
            <div className={styles.list}>
                {items}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(ProductList);