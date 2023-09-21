const MenuElement = ({link, name}) => {
    return (
        <li>
            <a href={link}>{name}</a>
        </li>
    )
}

export default MenuElement;


// nav > ul > li.a