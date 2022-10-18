import React from 'react';
import Link from "next/link";
import A from "../components/A";

const Index = () => {
  return (
    <div>
      <div className='navbar'>

        <A href={"/"} text={'Главная'}/>
        <A href={"/users"} text={' Пользователи'}/>

      </div>

      <h1>Главная страница</h1>

      <style jsx>
        {`
          .navbar {
              background: orange;
              padding: 15px;
          }
          
          .link {
              text-decoration: none;
              color: white;
              font-size: 20px;
              margin: 10px;
              font-family: sans-serif;
          }

        `}
      </style>
    </div>
  );
};

export default Index;
