import React from "react";

import Cards from "./Card.jsx";

const data3 = [
    {
        name: "Alfred",
        surname: "Bogucki",
        avatar:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
        bronze: 1,
        silver: 3,
        gold: 1,
    },
    {
        name: "Andrzej",
        surname: "Mikucki",
        avatar:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://wallpapercave.com/dwp2x/P4cf3aV.jpg",
        bronze: 9,
        silver: 1,
        gold: 3,
    },
    {
        name: "Margeritta",
        surname: "Kangur",
        avatar:
            "https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.webp?h=300&fakeurl=1&type=.webp",
        background:
            "https://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Ocean-Sunset.jpg",
        bronze: 2,
        silver: 7,
        gold: 4,
    },
    {
        name: "Stefan",
        surname: "Batory",
        avatar:
            "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
        background:
            "https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        bronze: 1,
        silver: 8,
        gold: 0,
    },
];


const Grid = () => {

    return (
        <div className={"grid-element"}>
            {data3.map(item => {

                const { name, surname, avatar, background, bronze, silver, gold } = item;

                return (
                    <Cards
                        name={name}
                        surname={surname}
                        avatar={avatar}
                        background={background}
                        bronze={bronze}
                        silver={silver}
                        gold={gold}
                    />
                )})}
        </div>
    )
}

export default Grid;