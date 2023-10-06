---
layout: default
title: Posts
---

<div class="posts">

    {% for post in site.posts %}
        {% assign current_date = post.date | date: "%Y" %}
        {% assign current_month = post.date | date: "%B" %}

        {% if current_date != previous_date %}
            <h3 class="year">{{ current_date }}</h3>
            {% assign previous_date = current_date %}
            {% assign previous_month = nil %}
        {% endif %}

        {% if current_month != previous_month %}
            <h4 class="month">{{ current_month }}</h4>
            {% assign previous_month = current_month %}
        {% endif %}

        <div class="post">
            <h5><a href="{{ post.url }}">{{ post.title }}</a></h5>
            <p class="date">{{ post.date | date: "%B %d, %Y" }}</p>
            <div class="post-content">
                {{ post.content | strip_html | truncatewords: 50 }}
            </div>
        </div>
    {% endfor %}

</div>
