---
title: The Team
---

# {{page.title}}

## The Conference Team

<ul class="team-list">
{% for member in site.data.team.conferenceteam %}
<li>
	<img src="/assets/images/mask.png" class="masked" style="background-image: url(/assets/images/{{member.image | default: 'owasp_logo.png'}})" alt="{{member.name}} {{member.role}}">
	<h3>{{member.name}}</h3>
	<span class="role">{{member.role}}</span>
</li>
{% endfor %}
</ul>


## OWASP Staff

<ul class="team-list">
{% for member in site.data.team.staff %}
<li>
	<img src="/assets/images/mask.png" class="masked" style="background-image: url(/assets/images/{{member.image | default: 'owasp_logo.png'}})" alt="{{member.name}} {{member.role}}">
	<h3>{{member.name}}</h3>
	<span class="role">{{member.role}}</span> 
</li>
{% endfor %}
</ul>


## Training selection committee

<ul>
{% for member in site.data.team.cftcommittee %}
	<li>{{member.name}}</li>
{% endfor %}
</ul>

## Paper selection committee
<ul>
{% for member in site.data.team.programcommittee %}
	<li>{{member.name}}</li>
{% endfor %}
</ul>
