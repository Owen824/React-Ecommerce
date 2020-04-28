import React from "react"
import styles from "./filterBar.css"
import BrandFilter from "../../components/BrandFilter/brandFilter.jsx"

const FilterBar= ()=>{
    return(
        <div className={styles.filterBar}>
            <BrandFilter/>
        </div>
    )
}

export default FilterBar