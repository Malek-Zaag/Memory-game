import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card'

function App() {
  const CardImages = [
    { "src": "/images/abricot.jfif", matched: false, disabled: false },
    { "src": "/images/banana.jpg", matched: false, disabled: false },
    { "src": "/images/carotte.jpg", matched: false, disabled: false },
    { "src": "/images/laitue.jpg", matched: false, disabled: false },
    { "src": "/images/pomme.jpg", matched: false, disabled: false },
    { "src": "/images/tomate.jpg", matched: false, disabled: false },
  ]
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [score,setScore]=useState(0);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    setTurns(prevTurns => prevTurns + 1)
  }
  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setScore(0);
    setTurns(0);
  }
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        choiceOne.matched = true
        choiceTwo.matched = true
        choiceOne.disabled = true;
        choiceTwo.disabled = true;
        Turns();
        setScore(prevScore=>prevScore+1)
        
      }
      else {
        setTimeout(()=>{Turns()},1000)
      }
    }
  }, [choiceOne, choiceTwo])
  useEffect(()=>{
    shuffleCards()
  },[])

  const Turns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="title">VegFruity Memory Game</div>
      <button onClick={shuffleCards}>New Game</button>
      <div className="turns">turns: {turns}</div>
      <div className="score">score: {score}</div>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} src={card.src} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
        )
        )}
      </div>
    </div>
  );
}

export default App;
