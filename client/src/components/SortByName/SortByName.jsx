import handleDispatches from '../../helpers/dispatchFilters'
import { useDispatch, useSelector } from 'react-redux'
import style from './SortByName.module.css'

const SortByName = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => state)
  return (
    <div>
      <select
        name='SortByName'
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          {order}
        </option>
        <option value='A-Z'>Ascending</option>
        <option value='Z-A'>Descending</option>
      </select>
    </div>
  )
}

export default SortByName
