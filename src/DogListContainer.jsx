// @ts-check

import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(json => setBreeds(json.message))
  }, [])

  return <></>
}

export default DogListContainer
