---
layout: default
---


Hi, I'm Ishan. Currently a Comp Sci student at Paris Saclay and new dev with a ton of ideas, I'm constantly
learning about <i>everything</i>.
Welcome to ishan.fr, here I centralize and link to the projects that I work on, the ideas I have,
the articles and news I find interesting. Enjoy reading and don't
hesitate to contact me ! 
{:.spacing-above}

Find me on  .


## Latest Posts

<ul class="post-list">
{% for post in site.posts limit:20 %}
  <li class="post-item">
    <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>


