const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors({ origin: 'http://localhost:3000' }));
 
app.get('/', (req, res) => {
  res.send('Oi from Express!');
});
 
app.get('/message', (req, res) => {
  res.json({message: 'Bonjour from Express!'});
});

app.get('/newMessage', (req, res) => {
    res.json({message: 'Hola!'});
  });
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 
app.get('/fetch-deck', async (req, res) => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const data = await response.json();
    res.json(data);
});

app.get('/viva', async (req, res) =>{
    const response = await fetch('https://api.zippopotam.us/us/89109')
    const data = await response.json();
    res.json(data);
})