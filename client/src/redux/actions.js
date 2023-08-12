import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY,
  RESET_FILTERS,
} from './actionTypes'
import axios from 'axios'

export const getCountries = () => {
  const endPoint = 'http://localhost:3001/countries'
  return async (dispatch) => {
    const { data } = await axios(endPoint)
    return dispatch({
      type: GET_COUNTRIES,
      payload: data,
    })
  }
}

export const getActivities = () => {
  const endpoint = 'http://localhost:3001/activities'
  return async (dispatch) => {
    const { data } = await axios(endpoint)
    return dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    })
  }
}

export const getCountryByName = (countryName) => {
  const endpoint = `http://localhost:3001/countries/name?name=${countryName}`
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)

      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      })
    } catch (error) {
      alert(error.response.data.error)
    }
  }
}

export const sortCountries = (order) => {
  return { type: ORDER_BY_NAME, payload: order }
}

export const sortCountriesByPop = (order) => {
  return { type: ORDER_BY_POPULATION, payload: order }
}

export const filterCountriesByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent }
}

export const filterCountriesByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY, payload: activity }
}

export const resetFilters = () => {
  return { type: RESET_FILTERS }
}
