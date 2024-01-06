// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const changeDogImage = () => {
    console.log('inu')
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  }

  return (
    <>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt="犬の画像" />
        <br />
        <button onClick={changeDogImage}>更新</button>
      </main>
    </>
  )
}
