const Socials = ({socials}) => {
    return (
        <div className={"socials"}>
            <div>
                <p className={"bold"}>Wszelkie prawa zastrzeżone ©2023</p>
            </div>
            <div className={"socials-links"}>
                <p className={"bold"}>Socials</p>
                <a href={"https://facebook.com/"}>
                    <img alt="Facebook Icon" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" />
                </a>
                <a href={"https://linkedin.com/"}>
                    <img alt="LinkedIn Icon" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" />
                </a>
                <a href={"https://instagram.com/"}>
                    <img alt="Instagram Icon" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" />
                </a>
            </div>
        </div>
    )
}

export default Socials;