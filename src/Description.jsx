// @ts-check

export const Description = ({ buttonOption }) => {
  return (
    <>
      <p>犬の画像を表示するサイトです。</p>
      <button className="updateButton" onClick={buttonOption}>
        更新
      </button>
    </>
  )
}

export default Description
