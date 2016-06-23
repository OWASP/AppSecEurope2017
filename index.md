---
title: hello world
layout: default
---

# Welcome to the conference

This is the conference front page


## Sponsors
<ul>
{% for sponsor in site.data.sponsors %}
	<li><img src="assets/images/{{sponsor.logo}}"> {{sponsor.name}}</li>
{% endfor %}
</ul>