#Swapi Box

![swapibox](https://user-images.githubusercontent.com/20631355/31920768-4a43e19e-b828-11e7-8ba8-52816deca101.gif)

This project is a mildly interesting Star Wars data fetching app. It grabs data for different people, places and things and dislpays it on the DOM.

##Tools Used:

JavaScript
React
React-Router

-------------------------------

##Contributors:

John Michael Boudreaux

Alex Banister

Nick Born

##Specifications

###Iteration 0: Landing Page

When the app starts up '/' the user should see the opening scrolling text of a random film, with the title of the film and release year listed below.
There should be buttons to browse three different categories: People, Planets, and Vehicles.
There should be a button to view favorites, with the number of current favorites indicated.

###Iteration 1: Get People

When a user clicks on People, the page is populated with cards with data for each person.
The cards should have:
Name
Homeworld
Species
Population of Homeworld
A button to “Favorite” the person
The button should have an active class indicating it has been pressed.

###Iteration 2: Get Planets/Vehicles

When a user clicks on any of the other buttons, the data should then represent the button pressed.

Planet Cards:
Name
Terrain
Population
Climate
Residents
A button to “Favorite” the planet
Vehicle Cards:
Name
Model
Class
Number of Passengers

###Iteration 3: Favorites

There should be a button on each card to save it to Favorites.
There should also be a button that when clicked, displays only the favorited cards.
Users should be able to unfavorite a card.
If there are no favorites, there should be a message indicating that there are no favorites.

###Extensions Reached

Implement a More button. When clicked, the next 10 items of that category should be shown. There should be a Back button to go back to the previous page.
Implement React Router
The URL should match the category chosen. For example, clicking on the People button routes the user to '/people'and display the people cards.
When a user visits '/favorites' the favorited cards are displayed.
