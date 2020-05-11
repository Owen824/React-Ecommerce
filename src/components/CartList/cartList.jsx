import React from "react"
import { connect } from "react-redux"
import styles from "./cartList.css"
import { ReactSVG } from "react-svg"
import {removeProductToCart,increaseItem,decreaseItem} from "../../actions"

class CartList extends React.Component {

plusItem(dataIndex){
    this.props.increaseItem(dataIndex);
}
minusItem(dataIndex){
    this.props.decreaseItem(dataIndex);
}
removeCartItem(dataIndex){
    console.log(dataIndex);
    this.props.removeProductToCart(dataIndex);
}    
    render() {
        const dataIndex = this.props.dataIndex;
        const data = this.props.cart[dataIndex];
        return (
            <div className={styles.cartItem}>
                <div className={styles.itemName}>
                    <h3>{data.name} (Size:{data.size})</h3>
                </div>
                <div className={styles.itemImg}>
                    <img src={`../src/assets/img/${data.imgName}.png`} alt="product" />
                </div>
                    <div className={styles.itemInfor}>
                        <div className={styles.quantityInfor}>
                            <span>Quantity: {data.quantity}</span>
                            <button className={styles.itemPlus} onClick={this.plusItem.bind(this,dataIndex)}>+</button>
                            <button className={styles.itemMinus} onClick={this.minusItem.bind(this,dataIndex)}>-</button>
                        </div>
                        <div className={styles.priceInfor}>
                            <span>NT${data.price*data.quantity}</span>
                        </div>
                    </div>
                <div className={styles.itemRemove}>
                    <ReactSVG className={styles.iconRemove} onClick={this.removeCartItem.bind(this,dataIndex)} src="../src/assets/img/trash-alt-solid.svg" />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProductToCart: dataIndex=> dispatch(removeProductToCart(dataIndex)),
        increaseItem: dataIndex=> dispatch(increaseItem(dataIndex)),
        decreaseItem: dataIndex=> dispatch(decreaseItem(dataIndex))
    }
}
const mapStateToProps = (state) =>{
    return {
        cart: state.cartReducer.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList)