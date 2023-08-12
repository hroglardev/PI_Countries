const { Activity, Country } = require('../db')

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryName } = req.body
    if (!name || !difficulty || !duration || !season || !countryName) {
      return res.status(404).json({
        error: 'Please fill all the inputs and add countries to the activity',
      })
    }

    const creado = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    })

    await creado.addCountries(countryName)

    const activityCreated = await Activity.findOne({
      where: { id: creado.id },
      include: {
        model: Country,
      },
    })

    if (activityCreated)
      return res.status(200).json({ message: 'Activity successfully created' })
  } catch (error) {
    return res
      .status(500)
      .send({ error: 'There was a problem creating the country' })
  }
}

module.exports = postActivity
