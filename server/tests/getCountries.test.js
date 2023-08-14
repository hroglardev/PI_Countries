const { Country } = require('../src/db')
const getCountries = require('../src/controllers/getCountries')

jest.mock('../src/db')

describe('Tests for getCountries', () => {
  test('Should return the countries correctly', async () => {
    Country.findAll.mockResolvedValueOnce([
      {
        id: 1,
        name: 'Argentina',
        activities: [{ name: 'Activity 1' }, { name: 'Activity 2' }],
      },
      {
        id: 2,
        name: 'Brasil',
        activities: [{ name: 'Activity 3' }, { name: 'Activity 4' }],
      },
    ])

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await getCountries(req, res)

    expect(Country.findAll).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith([
      {
        id: 1,
        name: 'Argentina',
        activities: [{ name: 'Activity 1' }, { name: 'Activity 2' }],
      },
      {
        id: 2,
        name: 'Brasil',
        activities: [{ name: 'Activity 3' }, { name: 'Activity 4' }],
      },
    ])
  })
  test('Should handle error from server', async () => {
    Country.findAll.mockRejectedValueOnce(new Error('Failed to load countries'))

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await getCountries(req, res)

    expect(Country.findAll).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Failed to load countries',
    })
  })
})
