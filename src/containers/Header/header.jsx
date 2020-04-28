import React from "react"
import { ReactSVG } from "react-svg"
import styles from "./header.css"

class Header extends React.Component {

    
    componentDidMount(){
        console.log("header scorll");
        if(this.props.page==="home"){
        window.addEventListener('scroll',this.handleScroll);
        }
    }
    componentWillUnmount(){
        console.log("turn off");
        if(this.props.page==="home"){
            window.removeEventListener('scroll',this.handleScroll);
        }  
        
    }
    handleScroll(event){
        // console.log(event);
        // console.log(window.scrollY);
        // console.log(window.innerWidth)
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
            banner = {
                backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("../src/assets/img/banner.jpg")`,
                height:"100vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
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
            document.querySelector("body").style.backgroundColor="#ddd";
        }
        
        return (
            <div className={styles.headerwrap} style={banner}>
                <div className={styles.nav} style={navBar}>
                    <h3>FootAwesome</h3>
                    <ReactSVG className={styles.iconCart} src="../src/assets/img/shopping-cart-solid.svg" />
                </div>
            </div>
        )
    }
}

export default Header