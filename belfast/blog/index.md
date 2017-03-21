---
title: Belfast blog
---

# {{ page.title }}

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <i>{{ post.date | date_to_long_string }}</i>
  <p>{{ post.excerpt | strip_html }}</p>
  <a href="{{ post.url }}">Read more...</a>
  <hr>
{% endfor %}
