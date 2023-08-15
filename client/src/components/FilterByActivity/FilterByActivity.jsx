import { useSelector } from 'react-redux'
import handleDispatches from '../../helpers/dispatchFilters'
import { useDispatch } from 'react-redux'

const FilterByActivity = () => {
  const { activities } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <select
        name='FilterActivity'
        id=''
        onChange={(event) => handleDispatches(dispatch, event)}
      >
        <option value='' disabled selected hidden>
          Filter by Activity
        </option>
        {activities.length &&
          activities.map((activity) => {
            return (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default FilterByActivity
