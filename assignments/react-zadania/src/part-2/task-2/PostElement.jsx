import "./PostElement.css";
import {useState, useEffect} from "react";

const PostElement = ({posts}) => {

    return (
        <div className={"posts"}>

            {posts.map(post => {

                const { userId, id, title, body } = post;

                return <div className={"post"}>
                    <p>User ID: <span>{userId}</span></p>
                    <p>ID: <span>{id}</span></p>
                    <p>Title: <span>{title}</span></p>
                    <p>Body: <span>{body}</span></p>
                </div>
            })}
        </div>
    )
}

export default PostElement;