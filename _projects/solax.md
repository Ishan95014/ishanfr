---
layout: post
title: Home Solar Info Panel
date: 2023-10-07
link: https://cours.ishan.fr
thumbnail: /assets/images/thumbnails/solax.png
---
# Real-Time Energy Dashboard

## Overview

The Real-Time Energy Dashboard is a web-based application designed to monitor, in real-time, various metrics related to energy production, consumption, and their environmental impact. It aims to provide an intuitive and comprehensive view of current energy usage, energy sources, and CO2 emissions.

## Objectives

The primary objective is to offer a centralized platform that can:

- Display real-time updates of key energy metrics.
- Visualize environmental data like grid emissions and emissions avoided.
- Facilitate better energy management and promote environmental awareness.

## Technology Stack

### HTML and CSS

The frontend of the application is built using HTML and CSS. It is structured as a series of "cards" to display various energy metrics. These cards serve as placeholders where dynamic, real-time data will be populated.

### JavaScript

JavaScript is used to manipulate the DOM, fetch real-time data from Firebase, and perform calculations like emissions estimation.

### Firebase Realtime Database

Firebase Realtime Database is used as the backend to store and manage real-time data. JavaScript listens for changes in the database and updates the frontend accordingly.

### ApexCharts

ApexCharts is included for potential future use in data visualization, such as plotting graphs or charts, although it's not actively used in the current code.

### Google Fonts

Google Fonts is used for typography, enhancing the aesthetic appeal of the dashboard.

### External Libraries

- ApexCharts for data visualization (potential future use).
- Google's Firebase library for backend data management.

## Global Data Flow

1. **Initialization**: On page load, Firebase is initialized, and the application begins listening for changes in the Realtime Database.
  
2. **Data Fetch and Update**: The application continuously fetches the latest data snapshots from Firebase, updates the DOM to reflect these changes, and performs necessary calculations like emissions estimation.

3. **User Interface**: The frontend, updated in real-time, displays the current state of energy metrics and environmental data.

By combining these technologies and data flows, the application offers a real-time, comprehensive tool for energy and environmental monitoring.