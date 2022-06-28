mport React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SinglePost(props) {
    const [post, setPost] = useState({});
    
    let params = useParams();

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${params.postId}`)
            .then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    console.warn('There was an issue.')
                }
            })
            .then(data => {
                console.log(data)
                setPost(data)
            })
    }, [params.postId])
    
    return (
        <div>SinglePost {params.postId}</div>
    )
}
const handleDeleteSubmit = (e) => {
    e.preventDefault();

    if (!props.loggedIn){
        props.flashMessage('You must be logged in to delete a post', 'danger')
        navigate('/login')
    }

    let myHeaders = new Headers();
    let myToken = localStorage.getItem('token');
    myHeaders.append('Authorization', `Bearer ${myToken}`)
    myHeaders.append('Content-Type', 'application/json')


    fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${postId}`, {
        method: 'DELETE',
        headers: myHeaders,
    }).then(res => res.json())
        .then(data => {
            if (data.error){
                props.flashMessage(data.error, 'danger')
            }else{
                props.flashMessage(`${data.title} has been deleted`, 'info')
                setPost(data)
            }
        })
}

