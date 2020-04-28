import React from "react"
import { ReactSVG } from "react-svg"
import styles from "./floatCart.css"

class FloatCart extends React.Component {
    openCart(){
        document.querySelector(`.${styles.cartButton}`).style.opacity="0";
        // document.querySelector(`.${styles.cart}`).style.opacity="1";
        document.querySelector(`.${styles.cart}`).style.right="1px";
        
    }
    closeCart(){
        // document.querySelector(`.${styles.cart}`).style.opacity="0";
        document.querySelector(`.${styles.cart}`).style.right="-500px";
        document.querySelector(`.${styles.cartButton}`).style.opacity="1";
    }
    render() {
        return (
            <div className={styles.floatCart}>
            <div className={styles.cart}>
                <div className={styles.cartDetail}>
                    <div className={styles.cartTitle}>
                    <ReactSVG className={styles.iconTitle} src="../src/assets/img/shopping-cart-solid.svg" />
                        <h3>Cart</h3>
                    </div>
                    <div className={styles.cartList}>

                    </div>
                    <button className={styles.checkOutButton}>checkout</button>
                </div>
                <ReactSVG className={styles.iconClose} onClick={this.closeCart} src="../src/assets/img/close-solid.svg" />
            </div>


            <div className={styles.cartButton}>
                <ReactSVG className={styles.iconCart} onClick={this.openCart} src="../src/assets/img/shopping-cart-solid.svg" />
                <div className={styles.redCircle}>1</div>
            </div>
            </div>
        )
    }
}
export default FloatCart