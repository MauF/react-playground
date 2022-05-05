import './header.css'
import React from "react";

type HeaderProps = {
    toggleMenuFn: () => void;
    isMenuVisible: boolean;
    toggleDropdownFn: () => void;
    isDropDownVisible: boolean
}

export default function Header(props : HeaderProps) {
    return <header className="header">
        <div className="header-left-side">
            <button onClick={props.toggleMenuFn}>{props.isMenuVisible ? "hide" : "show"} menu</button>
        </div>
        <div className="header-title">
            this is the header
        </div>
        <div className="header-right-side">
            <div className="dropdown">
                <button onClick={props.toggleDropdownFn}>Dropdown</button>
                <div className="dropdown-content" style={{display: props.isDropDownVisible ? "block" : "none"}}>
                    this is a dropdown content
                </div>
            </div>
        </div>
    </header>
}