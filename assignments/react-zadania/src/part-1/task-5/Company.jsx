

const Company = ({company}) => {

    return (
        <div className={"company"}>
            <div>
                <p className={"bold"}>Dane i adres</p>
                <hr/>
                <p>{company.name}</p>
                <div className={"logo-container"}>
                    <img src={company.logo} />
                </div>
                <p>{company.addressLine1}</p>
                <p>{company.addressLine2}</p>
            </div>
            <div>
                <p className={"bold"}>Contact</p>
                <hr/>
                <p>Phone: <a href={`tel:${company.phone}`}>{company.phone}</a></p>
                <p>Mail: <a href={`mailto:${company.mail}`}>{company.mail}</a></p>
            </div>
        </div>
    )
}

export default Company;