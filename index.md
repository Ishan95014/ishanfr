---
layout: default
title: Home
---


Hi, I'm Ishan. Currently a Comp Sci student at Paris Saclay and new dev with a ton of ideas, I'm constantly
learning about <i>everything</i>.
Welcome to ishan.fr, here I centralize and link to the projects that I work on, the ideas I have,
the articles and news I find interesting. Enjoy reading and don't
hesitate to contact me ! 
{:.spacing-above}

## Some of my interests 
- [Photography](), [Computational Photography](), and Machines and Images, Storing, Computing, representing visual information
- 3D, I loved discovering photogrametry as a kid
- Mapping, that fits with computer representations of visual information, it's actually all kinds of information, the more complex the more interesting.
- And more every day !

## Latest Projects
<ul class="post-list">
{% for project in site.projects limit:20 %}
  <li class="post-item">
    <span class="meta">{{ project.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ project.url }}">{{ project.title }}</a>
  </li>
{% endfor %}
</ul>

## Latest Posts
<ul class="post-list">
{% for post in site.posts limit:20 %}
  <li class="post-item">
    <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

