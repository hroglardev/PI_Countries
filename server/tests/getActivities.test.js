const { Activity } = require('../src/db')
const getActivities = require('../src/controllers/getActivities')

jest.mock('../src/db', () => {
  const originalModule = jest.requireActual('../src/db')
  const mockActivity = {
    findAll: jest.fn(),
  }
  return {
    ...originalModule,
    Activity: mockActivity,
  }
})

describe('getActivities', () => {
  test('should return a list of activities', async () => {
    const mockActivities = [
      { id: 1, name: 'Activity 1' },
      { id: 2, name: 'Activity 2' },
    ]

    Activity.findAll.mockResolvedValueOnce(mockActivities)

    const req = {}
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    }

    await getActivities(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockActivities)
  })

  test('should return an error if the activities cannot be retrieved', async () => {
    Activity.findAll.mockRejectedValueOnce(
      new Error('Error retrieving activities')
    )

    const req = {}
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    }

    await getActivities(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get activities' })
  })
})
