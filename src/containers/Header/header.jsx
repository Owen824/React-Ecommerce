import React from "react"
import { ReactSVG } from "react-svg"
import styles from "./header.css"
import {Link} from  "react-router-dom"

class Header extends React.Component {

    componentDidMount(){
        if(this.props.page==="home"){
        window.addEventListener('scroll',this.handleScroll);
        }
    }
    componentWillUnmount(){
        if(this.props.page==="home"){
            window.removeEventListener('scroll',this.handleScroll);
        }     
    }
    handleScroll(event){
        
        if(window.scrollY>80){           
                document.querySelector(`.${styles.nav}`).style.backgroundColor="rgba(65,105,225,.9)";
                document.querySelector(`.${styles.nav}`).style.top="0px";            
        }else{    
                document.querySelector(`.${styles.nav}`).style.backgroundColor="transparent";
                document.querySelector(`.${styles.nav}`).style.top="20px";   
        }
    }


    render() {
        let banner,navBar={};
        if(this.props.page==="home"){
            if(window.innerWidth>768){
                banner = {
                    backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("../src/assets/img/banner.jpg")`,
                    height:"100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }
            else{
                banner = {
                    backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("../src/assets/img/banner.jpg")`,
                    height:"60vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }
           
            navBar={
                top:"20px"
            }
            document.querySelector("body").style.backgroundColor="#fff";
        }
        else{
            navBar={
                top:"0px",
                backgroundColor:"rgba(65,105,225,.9)"
            }
        }
        
        return (
            <div className={styles.headerwrap} style={banner}>
                <div className={styles.nav} style={navBar}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                         <h3>FootAwesome</h3>
                    </Link>
                    <Link to="/checkOut" >
                    <ReactSVG className={styles.iconCheckout} src="../src/assets/img/clipboard-list-solid.svg" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header