import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email,id} = props.friend;
    

    return (
        <div className='friendStyle'>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <Link to={`/friend/${id}`}>
            <button > show friend details {id}</button>
            </Link>
            
        </div>
    );
};

export default Friends;