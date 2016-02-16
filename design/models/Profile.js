var Mongoose = require('mongoose');

module.exports = Mongoose.model({
	name: {
		type: String,
		unique: true,
		required: true
	},
	summary: { // Summary of profile, just a bio for the user
		type: String
	},
	birthdate: {
		type: Date,
		required: true
	},
	bloodType: {
		type: String,
		required: true
	},
	lastDonation: {
		type: Date
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
	userId:{
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});