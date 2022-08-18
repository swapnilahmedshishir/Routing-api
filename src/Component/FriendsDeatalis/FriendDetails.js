import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendDetails} = useParams();
    const [friend , setFriend] = useState({}); 
   useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
   })
   const {name,email,phone,website} = friend;

 
   
   
    return (
        <div>
            <h1>Friend Details </h1>
            <div className='friendStyle'>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            
            
            
        </div>
        </div>
    );
};

export default FriendDetails;