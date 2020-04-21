import React from "react"
import styles from "./product.css"
const Product =(props)=>{
        
    return(
        <div className={styles.product}>
            {/* {props.product.name} */}
            <div className={styles.productTitle}><h3>{props.product.name}</h3></div>
            <div className={styles.productImg}>
                <img src={`../src/assets/img/${props.count}.png`} alt="product"/>
            </div>
            <div className={styles.productButt}>
                <input type="button" value="Detail"/>
                <input type="button" value="Add Cart"/>
            </div>
        </div>
    )
}

export default Product