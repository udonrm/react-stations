export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleBreedChange = e => {
    setSelectedBreed(e.target.value)
  }

  return (
    <>
      <select value={selectedBreed} onChange={handleBreedChange}>
        {Object.keys(breeds).map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
