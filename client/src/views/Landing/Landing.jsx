import { NavLink } from 'react-router-dom'
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Travel Buddy</h1>
      <p className={style.subtitle}>Choose your next destination</p>
      <NavLink to='/home' className={style.link}>
        <button className={style.button}>Let's go</button>
      </NavLink>
    </div>
  )
}

export default Landing
