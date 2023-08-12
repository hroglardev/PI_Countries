import { NavLink } from 'react-router-dom'
import style from './Country.module.css'

const Country = ({ id, flag, name, continent }) => {
  return (
    <div className={style.cardWrapper}>
      <img src={flag} alt={name} className={style.flag} />
      <NavLink to={`/detail/${id}`} className={style.link}>
        <h2>{name}</h2>
      </NavLink>
      <h3 className={style.continent}>{continent}</h3>
    </div>
  )
}

export default Country
