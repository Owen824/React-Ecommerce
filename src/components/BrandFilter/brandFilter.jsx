import React from "react"
import { connect } from "react-redux"
import styles from "./brandFilter.css"
import {changeBrandFilter,goPage} from "../../actions"

class BrandFilter extends React.Component {
    constructor(props){
        super(props);
        this.changeOption=this.changeOption.bind(this);
    }

    changeOption(event){
        this.props.changeBrandFilter(event.target.id);
        this.props.go_page(1);
        // console.log(document.querySelector("#All").checked);
        // console.log(document.querySelector("#Converse").checked);
        // console.log(document.querySelector("#Nike").checked);
        // console.log(document.querySelector("#Adidas").checked);

    }
    
    render() {
        const brands = this.props.brands;
        const brandList = brands.map((brand,key) => {
            return (
                <label className={styles.brand} key={key}>
                    {brand}({this.props.brandItemCount[brand]})
                    {/* <input type="checkbox" name={brand} /> */}
                    <input type="radio" name="brand" id={brand} checked={this.props.brandOption===brand} onChange={this.changeOption.bind(this)}/>
                    <span className={styles.brandSpan}></span>

                </label>
            )
        })
        return (
            <div className={styles.brandFilter}>
                <div className={styles.brandTitle}>
                    <h3>Brands</h3>
                </div>
                <div className={styles.brandList}>
                    <label className={styles.brand}>All({this.props.itemTotal})
                    <input type="radio" name="brand" id="All" checked={this.props.brandOption==="All"} onChange={this.changeOption.bind(this)} />
                        <span className={styles.brandSpan}></span>
                    </label>
                    {brandList}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeBrandFilter: option=> dispatch(changeBrandFilter(option)),
        go_page:(currentPage)=>dispatch(goPage(currentPage))
    }
}
const mapStateToProps = (state) => {
    const brandItemCount={};
    state.productReducer.products.forEach(element => {
        brandItemCount[element.brand]=brandItemCount[element.brand]+1||1;
    });
    return {
        itemTotal: state.productReducer.products.length,
        brandOption: state.brandFilterReducer.filterOption,
        brands: state.brandFilterReducer.brands,
        brandItemCount: brandItemCount
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BrandFilter);