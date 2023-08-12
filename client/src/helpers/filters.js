const handleFilters = (order, population, continent, activity, countries) => {
  let filtered = [...countries]
  if (order === 'A-Z') {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (order === 'Z-A') {
    filtered.sort((a, b) => b.name.localeCompare(a.name))
  }
  if (population === 'Ascending pop') {
    filtered.sort((a, b) => a.population - b.population)
  }
  if (population === 'Descending pop') {
    filtered.sort((a, b) => b.population - a.population)
  }
  if (continent !== '') {
    filtered = filtered.filter((pais) => pais.continent === continent)
  }
  if (activity !== '') {
    filtered = filtered.filter((pais) =>
      pais.Activities.some((act) => act.name === activity)
    )
  }
  return filtered
}

export default handleFilters
