import { NavLink } from 'react-router-dom'

const Country = ({ id, flag, name, continent }) => {
  return (
    <div>
      <img src={flag} alt={name} />
      <NavLink to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <h3>{continent}</h3>
    </div>
  )
}

export default Country
