const Links = ({links}) => {

    return (
        <div className={"links"}>
            <div className={"links-head"}>
                <p className={"bold"}>Links</p>
                <hr/>
            </div>
            <div className={"links-bottom"}>
                {Object.keys(links).map(link => {

                    return <a href={links[link]}>{link}</a>
                })}
            </div>
        </div>
    )
}

export default Links;