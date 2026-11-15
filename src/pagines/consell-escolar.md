---
layout: layouts/default.njk
descripcio: |
  Directori de persones del Consell Escolar
title: Consell escolar
permalink: /consell-escolar/
actualitzat: 2026-03-10
versio: 0
---

El Consell Escolar del CEIP Santa Teresa està format per:

<div class="junta is-compact">
{%- for membre in consell %}
<div class="carrec">
<div class="carrec-avatar"><img src="{% if membre.foto %}/assets/imgs/carrecs/{{ membre.foto }}{% else %}/assets/imgs/avatar.svg{% endif %}" alt="" loading="lazy"></div>
<div class="carrec-nom">{{ membre.nom }}</div>
</div>
{%- endfor %}
</div>

## Documents del Consell Escolar

{% for group in documents.items %}{% assign has_consell = false %}{% for doc in group.documents %}{% if doc.tipus == "consell" %}{% assign has_consell = true %}{% endif %}{% endfor %}{% if has_consell %}
<section class="doc-group">
<h3>{{ group.curs }}</h3>
<ul>
{% for doc in group.documents %}{% if doc.tipus == "consell" %}
<li class="doc-entry"><a href="{{ doc.url }}">{{ doc.titol }}</a> <time class="doc-data">{{ doc.data }}</time></li>
{% endif %}{% endfor %}
</ul>
</section>
{% endif %}{% endfor %}
