---
layout: layouts/default.njk
descripcio: |
  Directori de persones a càrrec de la associació
title: Qui som
permalink: /qui-som/
actualitzat: 2026-02-09
versio: 8
---

## Directiva

<div style="text-align: center;">
  {%- for membre in junta %}{% assign mod_start = forloop.index0 | modulo: 3 %}
    {%- if mod_start == 0 %}<div class="grid row" style="margin-top: 3em;">{% endif %}
    <div class="carrec col-{{mod_start}}">
    <div style="font-weight:bold; min-height:3em;">{{membre.carrec}}</div>
    <div><img style="max-width:65%;" src="/assets/imgs/carrecs/{{membre.foto}}"></div>
    <div>{{membre.nom}}</div>
    </div>
    {%- assign mod_end = forloop.index | modulo: 3 %}{% if mod_end == 0 or forloop.last %}</div>{% endif %}
  {%- endfor %}
</div>


## Consell Escolar

* Anna Albiach
* Cinta Espino Narváez
* Eva Pablos
* Mado Almela
* Mar Riera
* Mercè Coves
* Paola Franco
* Raquel Tortosa
* Santiago Sánchez
