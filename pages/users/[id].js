import {useRouter} from 'next/router'
import classes from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";


export default function User({user}) {
  const {query} = useRouter()

  return (
    <MainContainer keywords={'user page'}>
      <div className={classes.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainContainer>
  )
}




export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {user}, // will be passed to the page component as props
  }
}
