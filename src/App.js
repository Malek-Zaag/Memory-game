import { useState } from 'react';
import './App.css';
import './images/cover.jpg'

function App() {
  const CardImages = [
    { src: "/images/abricot.jfif" },
    { src: "/images/banana.png" },
    { src: "/images/carotte.jpg" },
    { src: "/images/laitue.png" },
    { src: "/images/peche.jpg" },
    { src: "/images/pomme de terre.png" },
    { src: "/images/pomme.png" },
    { src: "/images/tomate.png" },
  ]
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0);
    console.log(cards)
    console.log(turns)
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="title">VegFruity Memory Game</div>
      <button onClick={shuffleCards}>New Game</button>
      <div>{cards.map((card) => (
        <div>
          <img src={card.src} alt="front"></img>
        </div>
      )
      )}
      </div>
    </div>
  );
}

export default App;
