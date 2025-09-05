---
layout: layouts/default.njk
descripcio: Pàgina d'inici de la web de l'AFA del CEIP Santa Teresa amb una
  introducció a la associació i les dades de contacte.
title: Benvinguts
permalink: /
actualitzat: 2025-09-05
versio: 7
---

Benvinguda o benvingut al web de l'Associació de Familiars d'Alumnes del CEIP Santa Teresa. Ací trobareu informació rellevant sobre l'AFA, el col·legi, [què fem](/que-fem) i [qui som](/qui-som).

## Últimes notícies de l'AFA

{% assign posts = collections.post | reverse  | slice: 0, 5%}
{% for post in posts%}
* [{{ post.data.title }}]({{ post.url }}) - {{ post.date | comAMesIDia}}
{%- endfor %}

[Accedir a totes les notícies](/noticies)

## El Santa Teresa

### 📓 Dades bàsiques

* 📫 **Adreça**: Carrer de l'Hort d'en Cendra, 3, 46003, València
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

* 📧 <santateresa.ampa@gmail.com>
* 📢 <https://t.me/AFACEIPSANTATERESA>

🏦 El **compte** de l'AFA a *Caixa Popular* és:

```
ES62 3159 0066 9830 7529 3823
```

## Web 2014-2019

El web anterior amb tots els articles i documents ha sigut arxivat a <http://arxiu.afasantateresa.es>
