import React from "react"
import styles from "./product.css"
import {Link} from "react-router-dom"
const Product =(props)=>{
        
    return(
        <div className={styles.product}>
            {/* {props.product.name} */}
            <div className={styles.productTitle}><h3>{props.product.name}</h3></div>
            <div className={styles.productImg}>
                <img src={`../src/assets/img/${props.product.imgName}.png`} alt="product"/>
            </div>
            <div className={styles.productButt}>
                <Link to={`/product/${props.product.id}`}>
                <input type="button" value="Detail"/>
                </Link>
            </div>
        </div>
    )
}

export default Product