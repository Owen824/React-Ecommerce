import React from "react"
import {connect} from "react-redux"
import styles from "./pagination.css"
import {nextPage,prevPage,goPage} from "../../actions"

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
         document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.add(`${styles.stylePage}`);
         console.log("hellopage");
    }
    componentDidUpdate(){
        if(this.props.currentPage===1){
            document.querySelector(`.${styles.pageButton}[value="1"]`).classList.add(`${styles.stylePage}`);
        }

    }
    clickGoPage(e){
        // console.log(e.target.innerText);
        document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
        e.target.classList.add(`${styles.stylePage}`);
        
        if(this.props.currentPage!==Number(e.target.innerText)){
            this.props.go_page(Number(e.target.innerText));
        }
    }
    clickNextPage(){
        if(this.props.currentPage!==this.props.totalPages){
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage+1}"]`).classList.add(`${styles.stylePage}`);
            this.props.next_page();
        }
    }
    clickPrevPage(){
        if(this.props.currentPage!==1){
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage}"]`).classList.remove(`${styles.stylePage}`);
            document.querySelector(`.${styles.pageButton}[value="${this.props.currentPage-1}"]`).classList.add(`${styles.stylePage}`);
            this.props.prev_page();
        }
    }

    render(){
        // const pre_button=;
        // const next_button;
        let totalPages= this.props.totalPages;
        // console.log(totalPages);

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