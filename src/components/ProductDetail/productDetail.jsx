import React from "react"
import { connect } from "react-redux"
import { ReactSVG } from "react-svg"
import styles from "./productDetail.css"
import {addProductToCart} from "../../actions"

class ProductDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            productSize:"select",
            productQuantity:"select"
        }
        this.changeState=this.changeState.bind(this)
        this.handleAddCart=this.handleAddCart.bind(this)
    }
    changeState(e){
        let changeName= event.target.name;
        // 主要想知道select 是 size 還是 quantity，state值剛好對應到每個組件的name屬性，[]是為了讓js知道那是變數
        this.setState({[changeName]:event.target.value});
    }
    handleAddCart(data){
        if(this.state.productSize==="select"&&this.state.productQuantity==="select"){
            alert("Please select quantity and size!")
        }
        else if(this.state.productQuantity==="select"){
            alert("Please select quantity!")
        }else if(this.state.productSize==="select"){
            alert("Please select size!")
            
        }else{
        //    alert(`${this.state.productSize}&${this.state.productQuantity}&${data.name}`)
           let product={
               name:data.name,
               id:data.id,
               imgName:data.imgName,
               price:data.price,
               size:this.state.productSize,
               quantity:Number(this.state.productQuantity)
           };
           this.props.addCart(product);
           
        }
    }

    render() {
        const data = this.props.data.find((product) => product.id == this.props.productId);
        return (
            <div className={styles.productDetailBox}>
                <div className={styles.productImg}>
                    <img src={`../src/assets/img/${data.imgName}.png`} alt="product" />
                </div>
                <div className={styles.productDetail}>
                    <div className={styles.productName}>
                        <h3>{data.name}</h3>
                    </div>

                    <div className={styles.productPrice}><span>NT${data.price}</span></div>
                    <div className={styles.productBrand}>
                        <h4>Brand</h4>
                        <span>{data.brand}</span>
                    </div>
                    <div className={styles.description}>
                        <h4>Description</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eum aliquid hic ab repellat ducimus mollitia ut alias tenetur! Iste numquam aut voluptatem ea doloremque delectus quos fugiat eaque earum.</p>
                    </div>
                    <div className={styles.selectSize}>
                        <h4>Size</h4>
                        <select name="productSize" id="productSize" className={styles.selectButt} value={this.state.productSize} onChange={this.changeState}>
                            <option value="select">select</option>
                            <option value="7">7</option>
                            <option value="7.5">7.5</option>
                            <option value="8">8</option>
                            <option value="8.5">8.5</option>
                            <option value="9">9</option>
                            <option value="9.5">9.5</option>
                            <option value="10">10</option>
                            <option value="10.5">10.5</option>
                            <option value="11">11</option>
                            <option value="11.5">11.5</option>
                            <option value="11">12</option>
                            <option value="11.5">12.5</option>
                            <option value="11">13</option>
                            <option value="11.5">13.5</option>
                        </select>
                    </div>
                    <div className={styles.selectQuantity}>
                        <h4>Quantity</h4>
                        <select name="productQuantity" id="productQuantity" className={styles.selectButt} value={this.state.productQuantity} onChange={this.changeState}>
                            <option value="select">select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className={styles.productButton}>
                        <button className={styles.productAddCart} onClick={this.handleAddCart.bind(this,data)}>                    
                            <ReactSVG className={styles.iconCart} src="../src/assets/img/shopping-cart-solid.svg" /> Add To Cart
                        </button>

                    </div>
                </div>

            </div>
        )
    }

}
const mapDispatchToProps =(dispatch)=>{
    return{
        addCart: product => dispatch(addProductToCart(product))
    }
}
const mapStateToProps = (state) => {
    const productList = state.productReducer.products;
    return {
        data: productList
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)