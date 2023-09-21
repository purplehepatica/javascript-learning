// import React from "react";
import './Nav.css';

import MenuElement from "./MenuElement.jsx";

const menu = [
    {
        link: "/faktury",
        name: "faktury",
    },
    {
        link: "/dokumenty",
        name: "dokumenty",
    },
    {
        link: "/odczyty",
        name: "odczyty",
    },
    {
        link: "/kontakt",
        name: "kontakt",
    },
];


const Nav = () => {
    return (
        <nav className={"nav-element"}>
            <ul>
                {menu.map(item => {
                    const { link, name } = item;

                    return (
                        <MenuElement
                            link={link}
                            name={name}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;