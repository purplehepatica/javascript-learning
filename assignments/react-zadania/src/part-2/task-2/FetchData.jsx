import {useState, useEffect} from "react";
import PostElement from "./PostElement.jsx";

const FetchData = ({postsURL}) => {

    const [posts, updatePosts] = useState();

    useEffect(() => {

        (async () => {
            const fetchedPosts = await fetch(postsURL);
            return updatePosts(await fetchedPosts.json());
        })();
    }, [])

    return (
        <>
            {posts !== undefined && <PostElement posts={posts}/>}
        </>
    )
}

export default FetchData;