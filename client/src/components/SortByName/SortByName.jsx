import handleDispatches from '../../helpers/dispatchFilters'
import { useDispatch, useSelector } from 'react-redux'

const SortByName = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <select
        name='SortByName'
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          Sort By Name
        </option>
        <option value='A-Z'>Ascending</option>
        <option value='Z-A'>Descending</option>
      </select>
    </div>
  )
}

export default SortByName
