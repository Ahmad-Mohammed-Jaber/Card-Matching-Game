import { useEffect, useState } from "react"
import SingleCard from "./components/SingleCard"

// images imports
import img1 from './assets/c-plus-plus.png'
import img2 from './assets/c-sharp.png'
import img3 from './assets/css-3.png'
import img4 from './assets/html-5.png'
import img5 from './assets/javascript.png'
import img6 from './assets/visual-studio-code.png'

function App() {
  const cards = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ]

  const [shuffledCards, setShuffledCards] = useState([])
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [turns, setTurns] = useState(0)

  const initNewGame = () => {
    const newCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ src: card, id: index, matched: false }))

    setShuffledCards(newCards)
    setTurns(0)
  }



  const handleChoice = (choice) => {
    if (!choice1)
      setChoice1(choice)

    else if (!choice2)
      setChoice2(choice)
  }

  useEffect(() => {
    if (choice1 && choice2) {
      if (choice1.src === choice2.src) {
        const newCards = shuffledCards.map((card) => ({ ...card, matched: (choice1.src === card.src || card.matched) }))
        setShuffledCards(newCards)
      }

      setTimeout(() => {
        setChoice1(null)
        setChoice2(null)
        setTurns(turns + 1)
      }, 1000)
    }
  }, [choice1, choice2])

  useEffect(() => initNewGame(), [])

  return (
    <>
      <p>Card Matching Game</p>
      <button className="new-game-button" onClick={() => initNewGame()}>Start New Game</button>
      <div className="cards-grid">
        {shuffledCards.map((card) => <SingleCard key={card.id} src={card.src} card={card} handleChoice={handleChoice} isFlipped={choice1 === card || choice2 === card || card.matched} />)}
      </div>
      <p>Turns: {turns}</p>
    </>
  )
}

export default App
