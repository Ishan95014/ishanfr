---
layout: default
title: Projects
---

<div class="projects-container">
  <div class="projects-grid">
      {% for project in site.projects %}
          <div class="project-card">
              <a href="{{ project.url }}">
                  <img class="project-thumbnail" src="{{ project.thumbnail }}" alt="{{ project.title }}">
                  <h4>{{ project.title }}</h4>
                  <p>{{ project.description | truncatewords: 20 }}</p>
              </a>
          </div>
      {% endfor %}
  </div>
</div>
