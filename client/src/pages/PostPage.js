import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [postInfo,setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch('http://localhost:3001/post/${id}')
            .then(response => {
                response.json(postInfo =>{
                    setPostInfo(postInfo);

                });
            });
    }, []);
    return(
        <div>post page here</div>
    );
}