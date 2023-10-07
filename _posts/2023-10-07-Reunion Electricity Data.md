---
layout: post
title: Electricity Sources Dashboard for Reunion Island
date: 2023-10-07
link: https://cours.ishan.fr
---

### Electricity Sources Dashboard for Reunion Island

#### Introduction

In France, RTE has a website with [electricity generation by source](https://www.rte-france.com/en/eco2mix/power-generation-energy-source), as well as [CO2 emissions overall](https://www.rte-france.com/en/eco2mix/co2-emissions). However DOMs don't have the same display. The data is available through EDF's open data portals - one per DOM, here's the one for [reunion](https://opendata-reunion.edf.fr/explore/?sort=modified). So i built a replica. This was partly an excuse to learn to use streamlit to build dashboards.

#### Technologies Used

1. **Streamlit**: For rapid prototyping and deployment. 
2. **Python**: For data processing and real-time updates.
3. **APIs**: For fetching real-time data.

#### Features

- **Real-Time Metrics**: Display of current power output and CO2 emissions.
- **Energy Sources**: Visual breakdown of different energy contributions.
- **Emissions Tracking**: Time-series data of greenhouse gas emissions.
- **Total Production**: Overview of total electricity production over time.
- **Energy Storage**: Capacity and usage data for stored energy.
- **Single Source Visualization**: Deep-dive into the data of individual energy sources.

#### How It Works

###### Data Collection

All of the data comes from the EDF opendata api, specifically the[Production d'électricité par filière en temps réel](https://opendata-reunion.edf.fr/explore/dataset/prod-electricite-temps-reel/information/). There are also some constant values for CO2 emissions per source per kWh.

###### Data Processing

1. **Aggregation**: Data from multiple sources is aggregated to a single data frame.
2. **Normalization**: Data is normalized for consistent visualization.
3. **Time Series Construction**: Time-based indexing is performed for tracking changes over time.

###### Visualization

1. **Pie Charts**: For the 'Measures' tab, to show current energy mix.
2. **Area Plots**: For 'Energy Sources' and 'Total Production', to visualize contributions over time.
3. **Line Graphs**: For 'Emissions' and 'Storage', to track changes in greenhouse gas emissions and storage capacity.

###### Updates

The dashboard updates every 5 minutes, ensuring the information is current.

#### Lessons Learned

1. **API Limitations**: Not all APIs are well-built. Some update at random intervals, like they get dumps of data from time to time instead of every five minutes. You need to align timestamps and over request to not miss anything.
2. **Streamlit's Flexibility**: Learned how to implement custom features to enrich visualizations. I think they're neat.
3. **Data Accuracy**: Ensured the data was accurate and up-to-date, as it serves an educational purpose and could influence policy.

#### Conclusion

I hope this project serves as an insightful resource for understanding real-time dynamics of electricity production and its environmental impact. Streamlit proved to be an interesting tool for this project, allowing rapid development with guardrails for usability, which come at the price of speed and liberty.
I hope this dashboard can be usefull, I hope to be able to improve it over time. Do not hesitate to provide critique ! 