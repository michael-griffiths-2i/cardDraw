React-Express-Docker-Card-Game
This is a basic React app that works alongside the Express framework and can be run on Docker. It uses two APIs: [Deck of Cards API] and [Zippopotam.us API]. The app allows you to draw a random card from a deck and display it on the screen, along with a welcome message based on the Las Vegas zip code. 🎰

Features
Create and reference a deck of cards: The app uses the Deck of Cards API to create a shuffled deck of 52 cards and draw a random card from it. You can see the card code, value, suit, and image on the screen. 🃏
Display a welcome message: The app uses the Zippopotam.us API to get the city name and state abbreviation for the Las Vegas zip code (89109). It then displays a welcome message to the user, such as “Welcome to Las Vegas, NV!” 🌆
Run on Docker: The app includes two Docker files and a YAML file to establish the connections and ports needed to run it on Docker. It is based on a Linux Alpine installation, making it lightweight. 🐳
Installation
To run the app on Docker, you need to have Docker installed on your machine. Then, follow these steps:

Clone this repository to your local machine.
Navigate to the project folder and run docker-compose up to build and run the app.
Open your browser and go to http://localhost:3000 to see the app in action.
Future Plans
I’d like to develop this app further and turn it into a blackjack game that can be hosted online with Docker and allow people to play it from their own machine. I think it would be a fun and challenging project to work on. ♠️♥️♣️♦️

Feedback
I would love to hear your feedback on this app and how I can improve it. Please feel free to contact me or open an issue on GitHub. Also, if you like this app, please give it a star. ⭐

Credits
This app was created by Michael Griffiths and Lewis Brennan, using the following APIs:

[Deck of Cards API]: A simple API to simulate a deck of cards1.
[Zippopotam.us API]: A free API to get information about postal codes.


: https://deckofcardsapi.com/ : https://www.zippopotam.us/
