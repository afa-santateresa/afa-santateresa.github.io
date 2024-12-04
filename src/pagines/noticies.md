---
layout: layouts/default.njk
permalink: /noticies/
title: Notícies
description: >
  Notícies i comunicacions de l'AFA
---

{% for items in collections.postsPerCurs %}
## {{items | slice: 0}}

{% for post in items[1] %}
* [{{ post.data.title }}]({{ post.url }}) - {{ post.date | comAMesIDia}}
{%- endfor %}
{% endfor %}

[![Icona del feed Atom](/assets/imgs/feed.png)](/feed.xml)

