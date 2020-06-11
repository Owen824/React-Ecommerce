import React from "react"
import Product from "../Product/product.jsx"
import Pagination from "../Pagination/pagination.jsx"
import styles from "./productList.css"
import { connect } from "react-redux"

class ProductList extends React.Component {
   

    filterProductRange(totalPages,dataLength,currentPage){
        let range=[];
        let rangeStart,rangeEnd;
        // 判斷 產品總數量/9 取餘數不等於0 和 當前頁面等於最後一頁
        if(dataLength%9!==0&&totalPages==currentPage){
             
                rangeStart = 1+((currentPage-1)*9);
                rangeEnd = dataLength;
            
        }else{
            //不是最後一頁的情況

            rangeStart = 1+((currentPage-1)*9);
            rangeEnd = 9+((currentPage-1)*9);
        }
        range.push(rangeStart);
        range.push(rangeEnd);
        return range
    }

    render() {
        // reduxData為所有產品，是一個陣列
        const reduxData = this.props.data;
        const currentPage = this.props.currentPage;
        // 9是在一個頁中可展示的產品數量，下行主要計算總頁數
        let totalPages=Math.ceil(reduxData.length/9);
        // 透過當前頁面，來得知目前該展示產品的範圍
        let range=this.filterProductRange(totalPages,reduxData.length,currentPage);
        let itemArray =[];
       for(let i= (range[0]-1); i<=(range[1]-1);i++){
           itemArray.push(reduxData[i]);
        }
        // console.log(itemArray);
        const items = itemArray.map((item,key) => {
            
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
    //判斷 目前品牌過濾選項 是All 還是其他品牌
    if(brandName=="All"){ 
        filtedProduct=state.productReducer.products;
    }
    else{
    //是其他 某一品牌的話，將所有產品篩選為 某一品牌的產品 
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