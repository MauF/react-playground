import './header.css'
import React, {useState} from "react";

type HeaderProps = {
    toggleMenuFn: () => void;
    isMenuVisible: boolean;
}

export default function Header(props : HeaderProps) {
    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropDownVisible(!isDropDownVisible);
    }

    return <header className="header">
        <div className="header-left-side">
            <button onClick={props.toggleMenuFn}>{props.isMenuVisible ? "hide" : "show"} menu</button>
        </div>
        <div className="header-title">
            this is the header
        </div>
        <div className="header-right-side">
            <div className="dropdown">
                <button onClick={toggleDropdown}>Dropdown</button>
                <div onMouseLeave={toggleDropdown} className="dropdown-content" style={{display: isDropDownVisible ? "block" : "none"}}>
                    this is a dropdown content
                </div>
            </div>
        </div>
    </header>
}