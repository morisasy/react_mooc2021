
import React, { useState } from 'react'



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const Footer = () => {
  return (
    <div>
    CopyRight & <a href="https://github.com/morisasy">Risasi</a>
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
      <Footer />
    </div>
  )
}

export default App
