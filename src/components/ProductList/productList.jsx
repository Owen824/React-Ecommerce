import React from "react"
import Product from "../Product/product.jsx"
import Pagination from "../Pagination/pagination.jsx"
import styles from "./productList.css"
import { connect } from "react-redux"

class ProductList extends React.Component {
   

    filterLastPage(totalPages,dataLength,currentPage){
        let range=[];
        let rangeStart,rangeEnd;
        if(dataLength%9!==0&&totalPages==currentPage){
            
                rangeStart = 1+((currentPage-1)*9);
                rangeEnd = (dataLength%9)+((currentPage-1)*9);
            
        }else{
            rangeStart = 1+((currentPage-1)*9);
            rangeEnd = 9+((currentPage-1)*9);
        }
        range.push(rangeStart);
        range.push(rangeEnd);
        return range
    }

    render() {
        const reduxData = this.props.data;
        const currentPage = this.props.currentPage;
        let totalPages=Math.ceil(reduxData.length/9);
        let range=this.filterLastPage(totalPages,reduxData.length,currentPage);
        let itemArray =[];
       for(let i= (range[0]-1); i<=(range[1]-1);i++){
           itemArray.push(reduxData[i]);
        }
        console.log(itemArray);
        const items = itemArray.map((item,key) => {
            
            // console.log(item.name);
            // console.log(index);
            return (
                <Product  product={item} key={key} />
            )
        })


        return (
            <div className={styles.list}>
                {items}
                <Pagination totalPages={totalPages} currentPage={currentPage} brandName={this.props.brandName}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const brandName= state.brandFilterReducer.filterOption;
    let filtedProduct=[];
    if(brandName=="All"){ 
        filtedProduct=state.productReducer.products;
    }
    else{
        filtedProduct=state.productReducer.products.filter((product)=>{
            return product.brand===brandName
        });
    }
    // console.log(filtedProduct);
    // console.log(state);
    return { 
        data: filtedProduct,
        currentPage: state.paginationReducer.currentPage
    }
}

export default connect(mapStateToProps)(ProductList);