const { Country, Activity } = require('../db')

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params
    const countryFound = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    })
    if (!countryFound)
      return res.status(404).json({ error: 'Country does not exist' })

    return res.status(200).json(countryFound)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get country' })
  }
}

module.exports = getCountryById
