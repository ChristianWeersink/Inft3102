---
layout: layouts/default.ejs
permalink: Assignment1
title: Assignment 1 Readme
---
# Assignment 1
### By Christian Weersink 100791903

My lab 1 write up can be found in the drop down menu for assignment 1.
People City & Colour is a simple demo of pagination displaying a list of people, their favourite colours and what city they live in.

Music Quiz is a short quiz on some of my favourite bands. It uses pagination to display the questions and images.

## In the code
#### Quiz.ejs
Quiz.ejs uses pagination to display data from quiz.json, which is found in _data folder. The functionality of the quiz is handled by quiz.js, in the public/js/ folder. 
#### People.ejs
People.ejs was my first attempt at pagination and contains some simple data, displayed in pages with 10 items per page.
#### Eleventy Config
My eleventy configurations are the passthrough methods to add the public folder content inside of the dist folder. The watch method to watch my css folder and refresh the dist folder when changes are made. The environment variable is used to change urls depending if the environment is development or production, and finally the before build method deletes the dist folder before building so the website refreshes correctly.
#### SASS 
The SCSS can be found in public/css. In this file I demonstrate use of `@mixin`s and `@import`s. I store all of my colours for the site in a separate _colours.scss file and use them on the 'people list' in people.ejs. 
#### Other styles
The rest of the project mostly uses Bootstrap classes for styling to display the website using the bootstrap grid.



### Pictures used in the quiz were used from these links
- [Crisis](https://upload.wikimedia.org/wikipedia/en/a/a0/Orig_Crisis_300RGB.jpg)
- [Rock](https://atlas-content-cdn.pixelsquid.com/stock-images/rock-stone-AvXzl49-600.jpg)
- [Slipknot](https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/11/Slipknot2021.png)
- [League of Legends band](https://afkgaming.com/esports/news/league-of-legends-in-game-band-pentakill-is-back-with-new-album-and-skins)
- [Atoma Album](https://i.ytimg.com/vi/C_voh9WFbsM/maxresdefault.jpg)