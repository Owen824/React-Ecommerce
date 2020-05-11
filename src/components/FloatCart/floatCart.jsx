import React from "react"
import { ReactSVG } from "react-svg"
import {connect} from "react-redux"
import CartList from "../CartList/cartList.jsx"
import styles from "./floatCart.css"

class FloatCart extends React.Component {
    openCart(){
        document.querySelector(`.${styles.cartButton}`).style.opacity="0";
        if(window.innerWidth>768){
            document.querySelector(`.${styles.cart}`).style.right="calc( 50vw - 226.5px)";
        }else{
            document.querySelector(`.${styles.cart}`).style.right="3vw";

        }
        
    }
    closeCart(){
        // document.querySelector(`.${styles.cart}`).style.opacity="0";
        document.querySelector(`.${styles.cart}`).style.right="-500px";
        document.querySelector(`.${styles.cartButton}`).style.opacity="1";
    }
    render() {
        let subTotal=0;
        this.props.cartList.forEach(item=>{
            subTotal=subTotal+(item.price*item.quantity);
        })
        const cartList = this.props.cartList.map((item,index)=>{
            return(
                <CartList item={item} dataIndex={index} />
            )
        })
        return (
            <div className={styles.floatCart}>
            <div className={styles.cart}>
                <div className={styles.cartDetail}>
                    <div className={styles.cartTitle}>
                    <ReactSVG className={styles.iconTitle} src="../src/assets/img/shopping-cart-solid.svg" />
                        <h3>Cart</h3>
                    </div>
                    <div className={styles.cartList}>
                            {cartList}
                    </div>
                    <div className={styles.subTotal}>
                        <h3>subtotal:</h3>
                        <span>NT${subTotal}</span>
                    </div>
                    <button className={styles.checkOutButton}>checkout</button>
                </div>
                <ReactSVG className={styles.iconClose} onClick={this.closeCart} src="../src/assets/img/close-solid.svg" />
            </div>


            <div className={styles.cartButton}>
                <ReactSVG className={styles.iconCart} onClick={this.openCart} src="../src/assets/img/shopping-cart-solid.svg" />
                <div className={styles.redCircle}>{this.props.cartList.length}</div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    const cartList= state.cartReducer.cart;

    return{
        cartList: cartList
    }
}
export default connect(mapStateToProps)(FloatCart)