import React from "react";
import './Card.css';

const Card = ({name, surname, avatar, medals }) => {
    const [bronze, silver, gold] = medals;

    return (
        <div className={"card"}>
            <p className={"title"}>{name} {surname}</p>
            <img className="avatar" src={avatar} width="150px" height="150px" alt="Avatar"/>
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

Card.defaultProps = {
    name: "Name",
    surname: "Surname",
    avatar: "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1.png",
    medals: ["0", "0", "0"],
}

export default Card;