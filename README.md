Weather Forecast
================

React app displaying 5 day weather forecast.
    
[Weather Forecast on Heroku](https://floating-savannah-23458.herokuapp.com/) 
    
Helpful Commands
----------------

Create a new Heroku app

`heroku create`

Deploy App

`git push heroku master`

Open App

`heroku open`

Run locally

`foreman start web`

View locally

[local site](http://localhost:5000/)

Compiling React Files for production
------------------------------------

Install jsx compiler

`sudo npm install -g react-tools`

Run the rake command

`rake compilejsx`

Outstanding Tasks
-----------------
Some other stuff that I would like to do if I had the time...

- Organise the forecasts by day, and put each day into a carousel.
- More automated testing
- Clicking generate forecast again does not clear out the current forecast list, it should do that and generate a new list
- There are only 3 weather types with graphics at the moment (cloudy, clear and raining)
- Implement some kind of predictive search box do you can select other regions and not just your own
- loading spinner on the generate forecast button



    