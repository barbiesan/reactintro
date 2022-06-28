import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to create a post', 'danger')
            navigate('/login')
        }
    }, [props.loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let myToken = localStorage.getItem('token');
        myHeaders.append('Authorization', `Bearer ${myToken}`);

        let title = e.target.title.value;
        let body = e.target.body.value;

        let data = JSON.stringify({title, body})

        fetch('http://127.0.0.1:5000/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                if (data.error){
                    props.flashMessage(data.error, 'danger')
                } else {
                    props.flashMessage(`The post ${data.title} has been created`, 'success')
                    navigate('/')
                }
            })

    }

    return (
        <>
        <h4 className='text-center'>Create A Post</h4>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>

                <label htmlFor='title'>Title</label>
                <input type='text' className='form-control' placeholder='Enter Title' name='title' />

                <label htmlFor='body'>Body</label>
                <input type='text' className='form-control' placeholder='Enter Body' name='body' />

                <input type='submit' className='btn btn-primary w-100 mt-3' value='Create Post' />

            </div>
        </form>
        </>
    )
}