---
layout: post
title: Home Solar Info Panel
date: 2023-10-07
link: https://cours.ishan.fr
thumbnail: /assets/images/thumbnails/solax.png
---
# Real-Time Energy Dashboard

## The sitch

My parents got solar panels on the roof and a battery pack. The provided dashboard, however, is not that good. The system does offer an api, though, so I made my own. 

## Objectives

The primary objective is to offer a centralized platform that can:

- [X] Display real-time updates of key energy metrics at a glance
- [ ] Visualize environmental data like grid emissions and emissions avoided.
- [X] Show all indicators in understandable units
- [ ] Display a ROI graph
- [ ] Display a return on CO2 graph

![](../../../assets/images/projects/solar_house/dashboard.png)


## Technology Stack

### HTML/CSS/JS

The frontend of the application is built using HTML and CSS. It is structured as a series of "cards" to display various energy metrics. 

### Firebase Realtime Database

Firebase Realtime Database is used as the backend to store and manage real-time data. JavaScript listens for changes in the database and updates the frontend accordingly.


## Global Data Flow

1. **Initialization**: On page load, the application begins listening for changes in the Realtime Database.
  
2. **Data Fetch and Update**: The application continuously fetches the latest data snapshots from Firebase, updates the DOM to reflect these changes, and performs necessary calculations like emissions estimation.

3. **User Interface**: The frontend, updated in real-time, displays the current state of energy metrics and environmental data.

