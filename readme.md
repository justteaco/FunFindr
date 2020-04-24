![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Software Engineering Immersive: Project 2

This is my second project built while at General Assembley as a Software Engineering Immersive Student. It was a 3 day paired programming project. 


# Fun Findr 

My partner and I equally built an event searching app that filters through a map and specific location for people to look for events, solely focusing on front-end development. We used node.js to consume an events API that enables users to search for events based on keywords, dates and location.



## Tech Stack 

Built with:

* Mapbox API
* Git and Github
* React
* Node.js
* Bulma
* Express
* SCSS
* Axios

## Release History

* Will not be updating this app. I wanted to show the challenges that I came across building it in the three day timeframe given. This is also being used as a benchmark to show where I started to where I am today. This app was made on week 6.  


## Deployment

This game is deployed via GitHub Pages and can be found here - [Dream Catcher](https://justteaco.github.io/dream-catcher/)



# How To Start 

You can fork and clone this game! Once forked/cloned to your repository, open the index.html file in the browser and the game loads. Feel free to replace images and customise to your liking. 

# Built Game 
FunFindr app allows users to search events based on keywords, dates, and location. The site takes users to a results page, where they can persue the events open to them given their search prefrences. From there, users can click on thier chosen event to take them through to an event-specific information page for more details including date, time, location, price, and description of the event. 

## Skiddle Events API

The Skiddle Events API accepts requests in the form of a URL, with addtional specifications for the data - request such as keyboard, latitude, longitude, or date - embedded into the URL string. No further data is therefore needed to be attached to the request. 


<img src="https://bit.ly/39Z8EGW" width="400" height="250">


The Scope of the app is meant for the user to have a seamless experience going through the app. 
The homepage was kept simple, leaveing the user to only enter in keywords or location. This allows the user to input their search prefence and for it to be stored in local storage. 




<img src="https://bit.ly/2JOEPOS" width="400" height="250">

Once the user hits search it takes you to the event listings page. The search request is made to the Skiddle API, and the results render on the page. Bulma was the main styling component used for easy to read cards. This page is refactored into its on file, with the event details passed down as props. 


<img src="https://bit.ly/2JSD1Eu" width="400" height="250">



Once the event is clicked, it takes you to the event ID card which is taken from the URL and is used to make an axios request from the event. The page then renders the results along with the mapbox. 




# Project Managment

Day 1: brainstorming the look and plan of the game. 

Days 2-3: developed the game fucntions and styling. 



# Successes

The ability to have a app that works and functions. That a user-friendly search function which can be optional between location and event name. The design is what draws in the user as well. Using Bulma and Sass really profides its professional look. 

# Challenges and Improvements
## Challenges:


* With the time frame of three days given to complete this project, the pressure required my partner and I to use pure logic. It was a bit difficult finding an API that was acessible and free that both my parnter and I liked. Using Bulma at times was a bit challenging when it came to styling modifications. 













# Improvements 

I plan to advance and improve this game by:

* Fix the broken image that generates the amount of dreams catched. 
* Making the grid bigger. 
* Apply a countdown and highest scrore. 
* Making the game mobile responsive.