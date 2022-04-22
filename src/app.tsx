import './app.css'
import {Outlet} from "react-router-dom";
import {createLinks} from "./routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <div className="main">
                <div className="side-menu">
                    <div style={{"borderBottom": "1px solid grey", "width": "100%"}}>this is the menu</div>
                    {createLinks()}
                </div>
                <div className="working-area">
                    <Outlet/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
