import "./Footer.css";
import Links from "./Links.jsx";
import Company from "./Company.jsx";
import Socials from "./Socials.jsx"

const Footer = ({footer}) => {
    let company, socials, links;

    if (footer.socials) {
        company = footer.company;
    }
    if (footer.socials) {
        socials = footer.socials;
    }
    if (footer.links) {
        links = footer.links;
    }

    return (
        <footer>
            <div className={"footer-head"}>
                <Company company={company}/>
                <Links links={links}/>
            </div>
            <div className={"footer-bottom"}>
                <Socials socials={socials}/>
            </div>
        </footer>
    )
}

export default Footer;