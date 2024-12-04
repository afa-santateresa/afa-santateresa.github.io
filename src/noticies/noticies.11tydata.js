import { DateTime } from "luxon";

export default {
	permalink: function ( { date, titol } ) {
		return `/noticies/${DateTime.fromJSDate(date).toFormat('yyyy/MM')}/${this.slugify(titol)}/`;
	},
};

