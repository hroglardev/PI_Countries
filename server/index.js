const server = require('./src/server')
const { conn, Country } = require('./src/db.js')
const PORT = 3001
const axios = require('axios')

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      const allCountries = Country.findAll() //
      if (!allCountries.length) {
        const { data } = await axios('http://localhost:5000/countries')
        const countryDB = data.map((country) => {
          return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.region,
            capital: country.capital
              ? country.capital[0]
              : 'This country does not have a capital',
            subregion: country.subregion
              ? country.subregion
              : 'This country does not have a subregion',
            area: country.area
              ? country.area
              : 'This country does not have an area',
            population: country.population,
          }
        })
        await Country.bulkCreate(countryDB)
      }
      console.log(`Server running on Port: ${PORT}`)
    })
  })
  .catch((error) => console.error(error))
