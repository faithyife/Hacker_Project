import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'flowbite-react';

const apiLink = 'http://49.13.2.10:4000/todos/';

const AxiosPost = () => {
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(apiLink + '1')
            .then((response) => {
            console.log(response.data);
            setPost(response.data);
        })
    }, []);

    function postRequest() {
        axios.post(apiLink, {
            title: "I am changed",
            completed: "razor"
        }).then((response) => {
            console.log(response);
            // Update the state with the new post object, if applicable
            if (response.data) {
                setPost(response.data);
            }
        })
    }
 
    return (
        <div>
            <Button className="" onClick={postRequest}>Post Request</Button>

            <p>{post.title}</p>
            {/* <p>{post.completed}</p> */}

        </div>
    );
};

export default AxiosPost;