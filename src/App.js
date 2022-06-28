import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from './components/Nav';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
// import PostCard from './components/PostCard';



function App(props) {
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        this.flashMessage('You are logged out');
        this.setState({
            setloggedIn: false
        })
    }



    return (
        <div id="fromApp">
            <Nav brand="Kekambas React" loggedIn={loggedIn} logout={logout}/>
            <div className='container'>
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
            
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} login={login} />} />
                    <Route path='/create-post' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn} />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;