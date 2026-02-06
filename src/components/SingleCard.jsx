import "./SingleCard.css"
import ReactCardFlip from 'react-card-flip';

import cover from "../assets/cover.png"

function SingleCard({ src, handleChoice, isFlipped, card }) {
    return (
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <img className='back' src={cover} alt="card back" onClick={() => handleChoice(card)} />
                <img className='front' src={src} alt="card front" />
            </ReactCardFlip>
        </div>
    );
}

export default SingleCard