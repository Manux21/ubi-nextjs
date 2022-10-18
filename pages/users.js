import {useState} from 'react'
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Petr'},
    {id: 2, name: 'Vasya'},
  ])

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name} </a>
            </Link>
          </li>
          )
        }
      </ul>
    </div>
  );
};

export default Users;
