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

* Anna Albiach
* Cinta Espino Narváez
* Eva Pablos
* Mado Almela
* Mar Riera
* Mercè Coves
* Paola Franco
* Raquel Tortosa
* Santiago Sánchez

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
