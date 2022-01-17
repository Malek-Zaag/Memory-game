import { useState } from 'react';
import './App.css';
import Card from './Card'

function App() {
  const CardImages = [
    { "src": "/images/abricot.jfif" },
    { "src": "/images/banana.png" },
    { "src": "/images/carotte.jpg" },
    { "src": "/images/laitue.png" },
    { "src": "/images/pomme.png" },
    { "src": "/images/tomate.png" },
  ]
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);


  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0);
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="title">VegFruity Memory Game</div>
      <button onClick={shuffleCards}>New Game</button>
      <div className="turns">turns: {turns}</div>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} src={card.src} handleChoice={handleChoice}/>
        )
        )}
      </div>
    </div>
  );
}

export default App;
