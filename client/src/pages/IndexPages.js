import { useEffect } from "react";
import Post from "../Post";
import { useState } from "react";

export default function IndexPage() {
    const [posts,setPosts] = useState([]);
    useEffect (() => {
        fetch('http://localhost:3001/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <post {...post}/>
            ))}
        </>
    );
}