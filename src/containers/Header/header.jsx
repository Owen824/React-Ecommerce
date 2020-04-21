import React from "react"
import { ReactSVG } from "react-svg"
import styles from "./header.css"

class Header extends React.Component {

    
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    handleScroll(event){
        // console.log(event);
        console.log(window.scrollY);
        if(window.scrollY>80){
                console.log(
                    document.querySelector(`.${styles.nav}`).style
                )
                document.querySelector(`.${styles.nav}`).style.backgroundColor="rgba(65,105,225,.9)";
                document.querySelector(`.${styles.nav}`).style.top="0px";
                
        }else{
            // document.querySelector(`.${styles.nav}`).style.backgroundColor="rgba(65,105,225,.3)";
            document.querySelector(`.${styles.nav}`).style.backgroundColor="transparent";
            document.querySelector(`.${styles.nav}`).style.top="20px";
        }
    }


    render() {

        const style = {
            backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("../src/assets/img/banner.jpg")`
        }
        return (
            <div className={styles.headerwrap} style={style}>
                <div className={styles.nav}>
                    <h3>FootAwesome</h3>
                    <ReactSVG className={styles.iconCart} src="../src/assets/img/shopping-cart-solid.svg" />
                </div>
            </div>
        )
    }
}

export default Header