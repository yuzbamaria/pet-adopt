# Skills Development Tracker App 

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Motivation](#motivation)
4. [Technologies](#technologies)
5. [Collaboration](#collaboration )
5. [Resources](#resources)
7. [License](#license)

## Description

As we reached week 13, we had our second project from EdX bootcamp where we collaborated and crreated a solution that integrated data from several server-side API requests to solve a real-world problem.

In our second project as a team, we began from the ideation stage, created wireframes, and then implemented functionality. We adhered to agile management practices and actively used Trello for project management.
This allowed us to effectivily distrubute the tasks within the team, stick to deadlines and create an MVP within a relatively short time frame. We managed to successfully work on different features and fix bugs by using git branch workflow and pull request system.

The final result is the app that assists a user in tracking the progress of gaining a particular skill. The user can create a card for a particular skill where they can: 
- add a skill name,
- start and finish dates,
- get a Youtube tutorial (by getting data from Youtube API),
- add a book relative to the topic (by getting data from Open Library,
- add some tasks to reach the required skill level (to do list).

## Features:
- Creates a skill card with the to-do list.
- Allows to add Youtube links to the to-do list by typing in a keyword and selecting the necessary videos.
- Allows to add books' links to the to-do list by typing in a keyword and selecting the necessary books by title.
- Visualizes all your skills that you are working on. 

## Future Enhancements:

- Add statistics on:
  - how many days have the user spent for a particular skill;
  - which days and hours were the most active;
    
- Add a functionality to be able to edit each Skill card that is already created (add/remove to-do list items, change dates). 


## Motivation:
- As keen learners we thought that it would be helpful for us and like-minded people to have some management in relation to developing different skills where we can track the progress, see/compare the results, which can eventually optimise our time. 

## User story:
- AS the learner 

- I WANT to be able to log in the key data for each new skill I'd like to develop

- SO THAT to track the progress, see/compare the results and optimise my time in achieving the required skill level.

## Technologies:

- Node.js;
- React;
- API:
  - Y[YouTube API](https://developers.google.com/youtube)
  - Open Library API https://openlibrary.org/;
- Libraries:
  - Date Picker https://reactdatepicker.com/;
  - MUI https://mui.com/;
- Git/Github: Repo and version management.
- Bootstrap React: For most of the CSS styling.
- Netlify: for deployment.


## Collaboration 

**Challenges and Successes**

**Saif**

Challenges:

Successes:


**Maria**

Challenges:
- I took some time to get used to working with REACT as it is based on what I've learnt before, but at the same time it's different.  
- A bit challenging to work in one file as a team as with the slight change of the code by a partner, your code needs debugging. 

Successes:
- Accomplishing the integration of Youtube API and created a list of Youtube links and titles, that are added with a checkbox which can be selected by the user and added to the to-do list of a particular skill. Save those link to local storage for further rendering. 
- 

**Breakdown of tasks and roles**

**Saif:** 


**Maria:**

## Screenshots of the application
![screenshot-start-page](assets/images/index.html.png)
![screenshot-input-page](assets/images/homepage.html.png)

## Resources

**1. A link to the deployed application: https://skillsdevelopment.netlify.app/**

**2. GitHub Repo: https://github.com/yuzbamaria/skills-tracker**

## Installation
N/A

## License 
MIT License
