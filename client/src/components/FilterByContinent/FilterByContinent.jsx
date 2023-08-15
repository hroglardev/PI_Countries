import { useDispatch } from 'react-redux'
import handleDispatches from '../../helpers/dispatchFilters'

const FilterByContinent = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <select
        name='FilterByContinent'
        id=''
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          Filter by Continent
        </option>

        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Antarctic'>Antarctic</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default FilterByContinent
