import React from "react";
import './Card.css';

const Cards = ({name, surname, avatar, background, bronze, silver, gold }) => {

    return (
        <div className={"card"}>
            <div className={"card-background"} style={{ background: `url(${background})`, backgroundSize: 'cover'}}>
                <p className={"title"}>{name} {surname}</p>
                <img className="avatar" src={avatar} width="150px" height="150px" alt="Avatar"/>
            </div>
            <hr/>
            <p className={"title"}>Rewards</p>
            <div className={"flex"}>
                <div>
                    <p className={"num-of-medals"}>{bronze}</p>
                    <span>Bronze</span>
                </div>
                <div>
                    <p className={"num-of-medals"}>{silver}</p>
                    <span>Silver</span>
                </div>
                <div>
                    <p className={"num-of-medals"}>{gold}</p>
                    <span>Gold</span>
                </div>
            </div>
        </div>
    )
}

Cards.defaultProps = {
    name: "Name",
    surname: "Surname",
    avatar: "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1.png",
    background: "",
    bronze: 0,
    silver: 0,
    gold: 0

}

export default Cards;