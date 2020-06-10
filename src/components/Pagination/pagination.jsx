import React from "react"
import {connect} from "react-redux"
import styles from "./pagination.css"
import {nextPage,prevPage,goPage} from "../../actions"

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //第一次建置時，將當前頁碼加入藍色樣式
         document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.add(`${styles.stylePage}`);
    }
    componentDidUpdate(){
        let headerHeight=89.73;
        //當頁面更新時，視窗會自動移到產品列表上
        window.scrollTo(0,window.innerHeight-headerHeight);
        //當brandfilter有切換品牌或頁碼切換時，將當前頁碼加入藍色樣式
        document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.add(`${styles.stylePage}`);
    }
    clickGoPage(e){
        //當前頁碼跟點擊的頁碼不同時，將原本的頁碼移除藍色樣式 
        if(this.props.currentPage!==Number(e.target.innerText)){
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
            this.props.go_page(Number(e.target.innerText));
        }
    }
    clickNextPage(){
        //點擊下一頁時，如果當前頁碼不是最後一頁就將原本的頁碼移除藍色樣式，之後執行next_page()將redux裡的state做調整
        if(this.props.currentPage!==this.props.totalPages){
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
            this.props.next_page();
        }
    }
    clickPrevPage(){
        //點擊上一頁時，如果當前頁碼不是第一頁就將原本的頁碼移除藍色樣式，之後執行prev_page()將redux裡的state做調整
        if(this.props.currentPage!==1){
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
            this.props.prev_page();
        }
    }

    render(){
        let totalPages= this.props.totalPages;
        let pageArray=[];
        for(let i=1; i<=totalPages; i++){
            pageArray.push(
            <button className={styles.pageButton} onClick={this.clickGoPage.bind(this)} key={i} value={i}>{i}</button>
            )
        }
        return(
            <div className={styles.pagination}>
                <button disabled={this.props.currentPage===1} className={styles.prevButton} onClick={this.clickPrevPage.bind(this)} key="prev">Previous</button>
                {pageArray}
                <button disabled={this.props.currentPage===totalPages} className={styles.nextButton} onClick={this.clickNextPage.bind(this)} key="next" >Next</button>
            </div>
        )
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        next_page:()=>dispatch(nextPage()),
        prev_page:()=>dispatch(prevPage()),
        go_page:(currentPage)=>dispatch(goPage(currentPage))
    }
}

export default connect(null,mapDispatchToProps)(Pagination);