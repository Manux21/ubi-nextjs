import {useRouter} from 'next/router'
import classes from '../../styles/User.module.scss'


export default function User() {
  const {query} = useRouter()

  return (
    <div className={classes.user}>
      <h1>Пользователь c id {query.id}</h1>
    </div>
  )
}