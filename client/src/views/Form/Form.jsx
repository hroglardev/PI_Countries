import { useEffect, useState } from 'react'
import validate from '../../components/validation/validation'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions'
import axios from 'axios'
import style from './Form.module.css'

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
    <div className={style.formWrapper}>
      <h2>Thank you for contributing</h2>
      <p className={style.subtitle}>Please add your activty</p>
      <form
        className={style.form}
        onSubmit={(event) => handleSubmit(event, activityData)}
      >
        <label htmlFor='name' className={style.label}>
          Name of Activity:{' '}
        </label>
        <input
          type='text'
          name='name'
          value={activityData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor='difficulty' className={style.label}>
          Difficulty:{' '}
        </label>
        <input
          type='number'
          name='difficulty'
          value={activityData.difficulty}
          onChange={handleInputChange}
        />
        {errors.difficulty && <p>{errors.difficulty}</p>}
        <label htmlFor='duration' className={style.label}>
          Duration:{' '}
        </label>
        <input
          type='number'
          name='duration'
          value={activityData.duration}
          onChange={handleInputChange}
        />
        {errors.duration && <p>{errors.duration}</p>}
        <label htmlFor='season' className={style.label}>
          Season:{' '}
        </label>
        <input
          type='text'
          name='season'
          value={activityData.season}
          onChange={handleInputChange}
        />
        {errors.season && <p>{errors.season}</p>}
        <label htmlFor='country' className={style.label}>
          Where can you do this activity?
        </label>
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
        <div className={style.buttonContainer}>
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
        </div>
        {!countriesOptions.length && <p>Must input at least one country</p>}
        <button type='submit' disabled={Object.keys(errors).length > 0}>
          Create Activity
        </button>
      </form>
    </div>
  )
}

export default Form
