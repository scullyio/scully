import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {isScullyGenerated} from '@scullyio/ng-lib';
import TransferStateService from '../helpers/transfer-state.service';
import StyledLabel from '../components/StyledLabel';
import {apiUrl} from '../config';

export default function Users() {
  const {id} = useParams();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const transferState = new TransferStateService();

  useEffect(async () => {
    const fetchList = async () => {
      const result = await fetch(`${apiUrl}/users`);
      const userList = await result.json();
      setUsers(userList);

      transferState.setState({userList});
    };

    const fetchUser = async () => {
      const result = await fetch(`${apiUrl}/users/${id}`);
      const user = await result.json();
      setCurrentUser(user);

      // user = isScullyGenerated()
      // ? this.transferState.getState<User>('user')
      // : this.apiUser$.pipe(tap(user => this.transferState.setState('user', user)));
    };

    id ? await fetchUser() : await fetchList();

    console.log(transferState.getState('userList'));
  }, [id]);

  return (
    <div>
      {!id ? (
        <>
          <h2>Users List</h2>
          <ul>
            {users.map(u => (
              <li key={u.id}>
                <Link to={`/users/${u.id}`}>{`${u.name} -  ${u.email}`}</Link>
              </li>
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
