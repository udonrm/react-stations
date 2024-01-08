// DO NOT DELETE

import './App.css'
import { useState } from 'react'
import Header from './Header'
import Description from './Description'
import DogImage from './DogImage'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const changeDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => setDogUrl(json.message))
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="description">
          <Description buttonOption={changeDogImage} />
          <DogImage imageUrl={dogUrl} />
          <br />
        </div>
      </main>
    </>
  )
}
