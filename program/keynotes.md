---
title: Keynotes
---

# {{page.title}}

<ul class="keynotes keynotepage">
{% for item in site.data.keynoters %}
<li id="{{item.name}}">
<img src="/assets/images/mask.png" alt="{{item.name}}" class="masked" style="background-image: url(/assets/images/{{item.image}});">
<h3>{{item.name}}</h3>
<p>{{item.description | markdownify}}</p>
</li>
{% endfor %} 
</ul>