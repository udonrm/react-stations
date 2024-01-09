export const BreedsSelect = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
  displayedBreed,
  setDisplayBreed,
}) => {
  const handleBreedChange = e => {
    setSelectedBreed(e.target.value)
  }

  const displaySelectedBreeds = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(json => setDisplayBreed(json.message))
      .catch(error => console.error('Error fetching images:', error))
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
      <button onClick={displaySelectedBreeds}>表示</button>
      <ul className="dogImages">
        {displayedBreed.map((breedImage, index) => (
          <li key={index}>
            <img src={breedImage} alt={selectedBreed} className="dogImage" />
          </li>
        ))}
      </ul>
    </>
  )
}
export default BreedsSelect
