import handleDispatches from '../../helpers/dispatchFilters'
import { useDispatch, useSelector } from 'react-redux'

const SortByPopulation = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <select
        name='SortByPop'
        id=''
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          Sort By Population
        </option>
        <option value='Ascending pop'>Ascending</option>
        <option value='Descending pop'>Descending</option>
      </select>
    </div>
  )
}

export default SortByPopulation
