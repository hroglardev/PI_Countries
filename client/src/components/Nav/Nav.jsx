import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()
  const showSearchBar = location.pathname !== '/create'
  const showSearchOnDetail = location.pathname.startsWith('/detail')
  return (
    <div>
      {showSearchBar && !showSearchOnDetail && <SearchBar />}
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/create'>Create an Activity</NavLink>
    </div>
  )
}

export default Nav
