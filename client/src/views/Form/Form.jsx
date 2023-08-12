import { useEffect, useState } from 'react'
import validate from '../../components/validation/validation'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions'
import axios from 'axios'

const Form = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.allCountries)
  const [errors, setErrors] = useState({})
  const [countriesOptions, setCountriesOptions] = useState([])
  const [activityData, setActivityData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countryName: [],
  })

  useEffect(() => {
    dispatch(getCountries())
    setActivityData((prevActivityData) => ({
      ...prevActivityData,
      countryName: [...countriesOptions],
    }))
  }, [countriesOptions])

  //INPUT HANDLER
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setActivityData((prevActivityData) => ({
      ...prevActivityData,
      [name]: value,
    }))

    if (name === 'country') {
      handleAddCountries(value)
    }

    setErrors(validate({ ...activityData, [name]: value }))
  }
  // ADD COUNTRIES TO THE ARRAY
  const handleAddCountries = (countryName) => {
    setCountriesOptions([...countriesOptions, countryName])
  }
  // DELETE COUNTRIES IN ARRAY
  const handleDeleteCountry = (countryName) => {
    setCountriesOptions((prevOptions) =>
      prevOptions.filter((countryId) => countryId !== countryName)
    )
  }
  // HANDLE SUBMIT OF FORM
  const handleSubmit = async (event, activityData) => {
    event.preventDefault()
    const endpoint = 'http://localhost:3001/activities/'
    try {
      const response = await axios.post(endpoint, activityData)
      setActivityData({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryName: [],
      })
      setCountriesOptions([])
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <form action='' onSubmit={(event) => handleSubmit(event, activityData)}>
      <label htmlFor='name'>Name of Activity: </label>
      <input
        type='text'
        name='name'
        value={activityData.name}
        onChange={handleInputChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <label htmlFor='difficulty'>Difficulty: </label>
      <input
        type='number'
        name='difficulty'
        value={activityData.difficulty}
        onChange={handleInputChange}
      />
      {errors.difficulty && <p>{errors.difficulty}</p>}
      <label htmlFor='duration'>Duration: </label>
      <input
        type='number'
        name='duration'
        value={activityData.duration}
        onChange={handleInputChange}
      />
      {errors.duration && <p>{errors.duration}</p>}
      <label htmlFor='season'>Season: </label>
      <input
        type='text'
        name='season'
        value={activityData.season}
        onChange={handleInputChange}
      />
      {errors.season && <p>{errors.season}</p>}

      <select name='country' id='' onChange={handleInputChange}>
        {countries
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => {
            return (
              <option key={country.id} value={`${country.id}`}>
                {country.name}
              </option>
            )
          })}
      </select>
      {countriesOptions?.map((countryName) => {
        return (
          <button
            key={countryName}
            onClick={() => handleDeleteCountry(countryName)}
          >
            {countryName}
          </button>
        )
      })}
      <button type='submit' disabled={Object.keys(errors).length >= 0}>
        Create Activity
      </button>
    </form>
  )
}

export default Form
