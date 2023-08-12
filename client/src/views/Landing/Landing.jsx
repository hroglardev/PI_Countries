import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getCountries } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Landing = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  return (
    <div>
      <h1>Travel Buddy</h1>
      <p>Choose your next destination</p>
      <NavLink to='/home'>
        <button>Let's go</button>
      </NavLink>
    </div>
  )
}

export default Landing
