import { DateTime } from "luxon";

export default {
	permalink: function ( { date, title } ) {
		return `/noticies/${DateTime.fromJSDate(date).toFormat('yyyy/MM/dd')}-${this.slugify(title)}/`;
	},
};

