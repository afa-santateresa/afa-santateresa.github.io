---
layout: layouts/default.njk
descripcio: Pàgina d'inici de la web de l'AFA del CEIP Santa Teresa amb una
  introducció a la associació i les dades de contacte.
title: Benvinguts
permalink: /
actualitzat: 2026-02-09
versio: 8
---

Benvinguda o benvingut al web de l'Associació de Familiars d'Alumnes del CEIP Santa Teresa. Ací trobareu informació rellevant sobre l'AFA, el col·legi, [què fem](/que-fem) i [qui som](/qui-som).
{.lead}

## Últimes notícies de l'AFA

<ul class="llista-noticies">
{%- assign posts = collections.post | reverse | slice: 0, 5 %}
{%- for post in posts %}
<li><a href="{{ post.url }}">{{ post.data.title | escape }}</a><time datetime="{{ post.date | comADataISO }}">{{ post.date | comAMesIDia }}</time></li>
{%- endfor %}
</ul>

[Accedir a totes les notícies](/noticies){.mes-noticies}

## El Santa Teresa

### 📓 Dades bàsiques

* 📫 **Adreça**: [Carrer de l'Hort d'en Cendra, 3, 46003, València](https://maps.app.goo.gl/aKTmdM6MvTyQJrpE6)
* ☎ **Telèfon**: [962 566 740](tel:+34962566740)
* 📧 **Correu centre**: <46012136@edu.gva.es>
* 📧 **Correu menjador**: <menjadorceipsantateresa@gmail.com>
* 📢 **Telegram**: <https://t.me/ceipsantateresa>
* 🌐 **Web**:  <https://portal.edu.gva.es/santateresavalencia/>
* 🌐 **Fitxa centre**: <https://ceice.gva.es/es/web/centros-docentes/ficha-centro?codi=46012136>

### 🗓 Horari

Per al curs 2025-2026:

* Setembre i juny: De 09:00 a 13:00 h
* D’octubre a maig:
  * De dilluns a dijous: De 09:00 a 12:45 h i de 15:00h a 16:30 h
  * Divendres: De 09:00 a 13:00 h

## Contacta amb l'AFA

Si tens qualsevol dubte, suggeriment, proposta, idea o el que siga no ho dubtes i **contacta** amb nosaltres. Ens encantarà ajudar-te! Així mateix, pots estar al dia de les activitats de l'AFA al nostre canal de **Telegram**.

* 📧 **Correu electrònic:** <santateresa.ampa@gmail.com>
* 📢 **Canal de Telegram:** <https://t.me/AFACEIPSANTATERESA>

---

Altres correus electrònics:

* **Tresoreria**: <afatresoreriasantateresa@gmail.com>
* **Comissió extraescolars:** <extraescolarssantateresa@gmail.com>
* **Comissió campament:** <afacampamentsantateresa@gmail.com>
* **Comissió festes:** <festesstateresa@gmail.com>

---

🏦 El **compte** de l'AFA a *Caixa Popular* és:

```
ES62 3159 0066 9830 7529 3823
```

## Web 2014-2019

El web anterior amb tots els articles i documents ha sigut arxivat a <http://arxiu.afasantateresa.es>
