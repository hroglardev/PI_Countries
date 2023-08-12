import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
  const location = useLocation()
  const showSearchBar = location.pathname !== '/create'
  const showSearchOnDetail = location.pathname.startsWith('/detail')
  return (
    <div className={style.wrapper}>
      <div className={style.linkWrapper}>
        <NavLink to='/home' className={style.navLink}>
          Home
        </NavLink>
        <NavLink to='/create' className={style.navLink}>
          Create Activity
        </NavLink>
      </div>
      {showSearchBar && !showSearchOnDetail && <SearchBar />}
    </div>
  )
}

export default Nav
