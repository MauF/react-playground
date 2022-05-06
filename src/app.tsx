import './app.css'
import {Outlet} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SideMenu from "./components/side-menu/side-menu";
import {useState} from "react";

function App() {

    const [isMenuVisible, setMenuVisible] = useState(true);

    return (
        <div className="app-wrapper">
            <Header isMenuVisible={isMenuVisible}
                    toggleMenuFn={() => setMenuVisible(!isMenuVisible)}></Header>
            <div className="main">
                {isMenuVisible && <SideMenu></SideMenu>}
                <div className="working-area">
                    <Outlet/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
