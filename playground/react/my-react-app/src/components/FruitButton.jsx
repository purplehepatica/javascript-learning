import React from "react";

const logFruit = ({fruit}) => {
    console.log(fruit);
}

const FruitButton = ({fruit}) => {
    return (
        <button onClick={() => logFruit({fruit})}>{fruit}</button>
    )
}

export default FruitButton;