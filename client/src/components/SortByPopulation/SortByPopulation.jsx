import handleDispatches from '../../helpers/dispatchFilters'
import { useDispatch, useSelector } from 'react-redux'
import style from './SortByPopulation.module.css'

const SortByPopulation = () => {
  const dispatch = useDispatch()
  const { population } = useSelector((state) => state)
  return (
    <div>
      <select
        name='SortByPop'
        id=''
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          {population}
        </option>
        <option value='Ascending pop'>Ascending</option>
        <option value='Descending pop'>Descending</option>
      </select>
    </div>
  )
}

export default SortByPopulation
