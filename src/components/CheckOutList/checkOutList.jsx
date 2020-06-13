import React from "react"
import { connect } from "react-redux"
import { ReactSVG } from "react-svg"
import styles from "./checkOutList.css"
import { removeProductToCart, increaseItem, decreaseItem } from "../../actions"


class CheckOutList extends React.Component {

    plusItem(dataIndex) {
        this.props.increaseItem(dataIndex);
    }
    minusItem(dataIndex) {
        this.props.decreaseItem(dataIndex);
    }
    removeCartItem(dataIndex) {
        console.log(dataIndex);
        this.props.removeProductToCart(dataIndex);
    }
    render() {
        let shippingList;
        let total = 0;
        //判斷購物清單是否為空的，空的shippinglist顯示 no item。
        if (this.props.list.length == 0) {
            shippingList = <div className={styles.emptyList}>There is no item in the shipping cart.</div>;
        } else {

            shippingList = this.props.list.map((item, dataIndex) => {
                total += (item.quantity * item.price);
                return (
                    <div className={styles.shippingItem} key={dataIndex}>
                        <div className={styles.shippingImg}>
                            <img src={`../src/assets/img/${item.imgName}.png`} alt="product" />
                        </div>
                        <div className={styles.shippingContent}>

                            <div className={styles.itemName}>
                                <h3>{item.name}(size:{item.size})</h3>
                            </div>
                           
                        </div>
                        <div className={styles.quantityBox}>
                            <span className={styles.price}>NT${item.price}</span>
                            <span className={styles.mutil}>X</span>
                            <div className={styles.quantityControl}>
                                <span>{item.quantity}</span>
                                <div className={styles.quantityButton}>
                                    <span onClick={this.plusItem.bind(this,dataIndex)}>+</span>
                                    <span onClick={this.minusItem.bind(this,dataIndex)}>-</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemRemove}>
                            <ReactSVG className={styles.iconRemove} onClick={this.removeCartItem.bind(this, dataIndex)} src="../src/assets/img/trash-alt-solid.svg" />
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className={styles.shippingContainer}>
                <div className={styles.shippingTitle}>
                    <ReactSVG className={styles.iconCart} src="../src/assets/img/shopping-cart-solid.svg" />
                    <h2>Shipping Cart</h2>
                </div>
                <div className={styles.shippingList}>
                    {shippingList}
                </div>
                <div className={styles.subTotal}>
                    <h3>Total price: NT${total}</h3>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProductToCart: dataIndex => dispatch(removeProductToCart(dataIndex)),
        increaseItem: dataIndex => dispatch(increaseItem(dataIndex)),
        decreaseItem: dataIndex => dispatch(decreaseItem(dataIndex))
    }
};
const mapStateToProps = (state) => {
    return {

        list: state.cartReducer.cart
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutList)