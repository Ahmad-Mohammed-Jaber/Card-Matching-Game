import "./SingleCard.css"
import ReactCardFlip from 'react-card-flip';

function SingleCard({ src, handleChoice, isFlipped, card }) {
    return (
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <img className='back' src='src/assets/cover.png' alt="card back" onClick={() => handleChoice(card)} />
                <img className='front' src={src} alt="card front" />
            </ReactCardFlip>
        </div>
    );
}

export default SingleCard