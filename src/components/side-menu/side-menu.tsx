import {createLinks} from "../../routes";
import './side-menu.css';

export default function SideMenu() {
    return <div className="side-menu">
        <div style={{"borderBottom": "1px solid grey", "width": "100%"}}>this is the menu</div>
        {createLinks()}
    </div>
}