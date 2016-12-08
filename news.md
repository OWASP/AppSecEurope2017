---
title: News
---

# {{page.title}}

<ul>
{% for article in site.data.news %}
<li><a href="{{article.url}}">{{article.title}}</a></li>
{% endfor %}
</ul>
