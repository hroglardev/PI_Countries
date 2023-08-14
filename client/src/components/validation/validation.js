const validate = (activityData) => {
  const errors = {}
  if (!activityData.name) {
    errors.name = 'Must have name'
  } else if (!/^[A-Za-z\s]+$/.test(activityData.name)) {
    errors.name = 'Must only have letters and spaces'
  } else if (!activityData.difficulty) {
    errors.difficulty = 'Must have difficulty'
  } else if (!/^[1-5]$/.test(activityData.difficulty)) {
    errors.difficulty = 'Difficulty must be between 1 and 5'
  } else if (!activityData.duration) {
    errors.duration = 'Must have duration'
  } else if (!/^(?:[1-9]|1[0-9]|2[0-4])$/.test(activityData.duration)) {
    errors.duration = 'Duration must be between 1 and 24 hours'
  } else if (!activityData.season) {
    errors.season = 'Must input a season'
  } else if (!/^(Summer|Winter|Autumn|Spring)$/i.test(activityData.season)) {
    errors.season = 'Season must be: Summer, Winter, Autumn or Spring'
  }
  return errors
}

export default validate
