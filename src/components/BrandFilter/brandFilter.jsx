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
        let headerHeight=89.73;
        window.scrollTo(0,window.innerHeight-headerHeight);
        this.props.changeBrandFilter(event.target.id);
        //當換品牌時，將當前頁碼設為1
        this.props.go_page(1);
    }
    
    render(){
        const brands = this.props.brands;
        const brandList = brands.map((brand,key) => {
            return (
                <label className={styles.brand} key={key}>
                    {/* 顯示目前所有品牌(數量) */}
                    {brand}({this.props.brandItemCount[brand]})
                    <input type="radio" name="brand" id={brand} checked={this.props.brandOption===brand} onChange={this.changeOption}/>
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
                    <input type="radio" name="brand" id="All" checked={this.props.brandOption==="All"} onChange={this.changeOption} />
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
        //在所有產品之中，紀錄brandItemCount物件裡每個品牌的各自數量
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