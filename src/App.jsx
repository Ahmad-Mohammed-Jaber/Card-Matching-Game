import { useEffect, useState } from "react"
import SingleCard from "./components/SingleCard"
import { use } from "react"

function App() {
  const cards =
    [
      'src/assets/c-plus-plus.png',
      'src/assets/c-sharp.png',
      'src/assets/css-3.png',
      'src/assets/html-5.png',
      'src/assets/javascript.png',
      'src/assets/visual-studio-code.png'
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
