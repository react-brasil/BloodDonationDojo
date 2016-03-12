var Mongoose = require('mongoose');

module.exports = Mongoose.model({
	name: {
		type: String,
		unique: true
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	country: {
		type: String
	},
	location: { // Location will receive an array with latitude and longitude
		type: Array,
		required: true
	},
	lastDonation: {
		type: Date
	},
	bloodTypesNeeded: {
		type: Array
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});