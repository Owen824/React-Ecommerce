import React from "react"
import Header from "../Header/header.jsx"
import Footer from "../Footer/footer.jsx"
import CheckOutList from "../../components/CheckOutList/checkOutList.jsx"

class CheckOutPage extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>
                <Header/>
                    <CheckOutList/>
                <Footer/>
            </div>
        )
    }
}
export default CheckOutPage