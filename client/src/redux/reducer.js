import {
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY,
  RESET_FILTERS,
} from './actionTypes'

const initialState = {
  allCountries: [],
  activities: [],
  order: 'Sort by Name',
  population: 'Sort by Population',
  continent: '',
  activity: '',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
      }
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      }
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountries: state.allCountries.filter((country) =>
          payload.some((item) =>
            country.name.toLowerCase().includes(item.name.toLowerCase())
          )
        ),
      }

    case ORDER_BY_NAME:
      return {
        ...state,
        order: payload,
        population: 'Sort by Population',
      }

    case ORDER_BY_POPULATION:
      return {
        ...state,
        population: payload,
        order: 'Sort by Name',
      }
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        continent: payload,
      }
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        activity: payload,
      }
    case RESET_FILTERS:
      return {
        ...state,
        order: '',
        population: '',
        continent: '',
        activity: '',
      }

    default:
      return { ...state }
  }
}

export default reducer
