import './ShowDataElement.css';
import {useState} from "react";

const ShowDataElement = ({initialData}) => {

    const [data, setData] = useState(initialData);

    const handleSexChange = () => {
        const initialData = {...data}; // lub Object.assign(data)?;
        initialData.human.sex = (initialData.human.sex === "man") ? "woman" : "man";

        return setData(initialData);
    }

    const subtractFromBankAccount = () => {
        const initialData = {...data};
        initialData.accountBalance -= 500;

        return setData(initialData);
    }

    const addToBankAccount = () => {
        const initialData = {...data};
        initialData.accountBalance += 500;

        return setData(initialData);
    }


    const { human: {sex, surname}, accountBalance } = data;

    return (
        <>
            <div className={"data-container"}>
                <p>Płeć: {sex}</p>
                <p>Nazwisko: {surname}</p>
                <p>Stan konta: {accountBalance}</p>
            </div>
            <div className={"buttons-container"}>
                <button onClick={handleSexChange}>handleSexChange</button>
                <button onClick={subtractFromBankAccount}>subtractFromBankAccount</button>
                <button onClick={addToBankAccount}>addToBankAccount</button>
            </div>
        </>
    )
}

export default ShowDataElement;