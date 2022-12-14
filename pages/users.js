import { useState, useEffect } from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {


  return (
    <MainContainer keywords={'users list'}>
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
    </MainContainer>
  );
};

export default Users;


// Добавили функцию getStaticProps, чтобы все рендерилось уже на сервере
export async function getStaticProps(context) {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()

  return {
    props: {users},
  }
}
