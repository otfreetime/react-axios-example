import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function PersonList() {
    const [userslist, setUsersList] = useState([])

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setUsersList(response.data)
                
            })
    }, [])
    
    if (!userslist) return null;

    return (
        <div>
            <div>Users List</div>
            <ul>
                {
                    userslist.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

