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
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => setDogUrl(json.message))
  }

  return (
    <>
      <header className="header">
        <h1>Dogアプリ</h1>
      </header>
      <main className="main">
        <div className="description">
          <p>犬の画像を表示するサイトです。</p>
          <img src={dogUrl} alt="犬の画像" className="dogImage" />
          <br />
        </div>
        <button className="updateButton" onClick={changeDogImage}>
          更新
        </button>
      </main>
    </>
  )
}
