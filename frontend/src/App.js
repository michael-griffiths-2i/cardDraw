import React, { useState, useEffect } from 'react';
 
function App() {
  const [deckData, setDeckData] = useState(null);
  const [deckId, setDeckId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [casinoData, setCasinoData] =useState(null);
 


  const fetchInitialDeck = async () => {
    const response = await fetch('http://localhost:3001/fetch-deck');
    const data = await response.json();
    setDeckData(data);
  }

  const fetchCasino = async () => {
    const response = await fetch('http://localhost:3001/viva');
    const data = await response.json();
    setCasinoData({country: data.country, 
                   city: data.places[0]['place name'], 
                   latitude: data.places[0]['latitude'], 
                   longtitude: data.places[0]['longitude']
                  });
    
    console.log(data.country);
  }

  const drawCard = async (deckId) => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
    const card = data.cards && data.cards[0];
    setCurrentCard(card);
  }


  useEffect(() => {
    fetchInitialDeck();
    fetchCasino();

  }, []);
 
  useEffect(() => {
    if (deckData) {
      setDeckId(deckData.deck_id);
    }
  }, [deckData]);


  return (
    <div>
      {casinoData && <h1>Squad 10 Casino, {casinoData.city}, {casinoData.country}</h1>}
      
      {/* {expressMessage && <p>{expressMessage}</p>}
      {newExpressMessage && <p>New Express Message :{newExpressMessage}</p>} */}
      {/* {deckData && <p>Success: {deckData.success ? 'Yes' : 'No'}</p>} */}
      {deckData && <p>Deck ID : {deckData.deck_id ? 'Yes' : 'No'}</p>}
      <p>The variable DeckId is {deckId}</p>
      {currentCard && <p>Current Card: {currentCard.value} of {currentCard.suit}</p>}
      {currentCard && <img src={currentCard.image} alt={`${currentCard.value} of ${currentCard.suit}`} />}
      <br/>
      <button onClick={() => drawCard(deckId)}>Draw Card</button>
    </div>
  );
}
 
export default App;
