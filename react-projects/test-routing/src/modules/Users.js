import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import StyledLabel from '../components/StyledLabel';
import {apiUrl} from '../config';

export default function Users() {
  const {id} = useParams();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const result = await fetch(`${apiUrl}/users`);
      const userList = await result.json();
      setUsers(userList);
    };

    const fetchUser = async () => {
      const result = await fetch(`${apiUrl}/users/${id}`);
      const user = await result.json();
      setCurrentUser(user);
    };

    id ? fetchUser() : fetchList();
  }, []);

  return (
    <div>
      {!id ? (
        <>
          <h2>Users List</h2>
          <ul>
            {users.map(u => (
              <li key={u.id}>{`${u.name} -  ${u.email}`}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Users - user id: {id}</h2>
          {currentUser && <h2>{`${currentUser.name} - ${currentUser.email}`}</h2>}
          <StyledLabel label="go to about" />
        </>
      )}
    </div>
  );
}
