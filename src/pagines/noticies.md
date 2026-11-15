---
layout: layouts/default.njk
permalink: /noticies/
title: Notícies
description: >
  Notícies i comunicacions de l'AFA
---

{% for items in collections.postsPerCurs %}
## {{items | slice: 0}}

<ul class="llista-noticies">
{%- for post in items[1] %}
<li><a href="{{ post.url }}">{{ post.data.title | escape }}</a><time datetime="{{ post.date | comADataISO }}">{{ post.date | comAMesIDia }}</time></li>
{%- endfor %}
</ul>
{% endfor %}

[![Icona del feed Atom](/assets/imgs/feed.png)](/feed.xml)
