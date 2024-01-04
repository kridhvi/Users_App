/*import React, { useState, useEffect } from 'react';

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setUsers(json));
      }
      fetchData();
    }, []);
  
    const usersList = users.map(({id, name, email}) => ({id, name, email})); 
    
    console.log(usersList);
    return usersList;
}*/