---
layout: layouts/default.njk
descripcio: |
  Directori de persones a càrrec de la associació
title: Qui som
permalink: /qui-som/
actualitzat: 2026-11-16
versio: 8
---

<div class="junta">
{%- for membre in junta %}
<div class="carrec">
<div class="carrec-titol">{{ membre.carrec }}</div>
<div class="carrec-foto"><img src="/assets/imgs/carrecs/{{ membre.foto }}" alt="{{ membre.nom }}" loading="lazy"></div>
<div class="carrec-nom">{{ membre.nom }}</div>
</div>
{%- endfor %}
</div>

