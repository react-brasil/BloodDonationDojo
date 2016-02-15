var Mongoose = require('mongoose');

module.exports = Mongoose.model({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	facebook: {
		type: String
	},
	google: {
		type: String
	},
	profile: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'Profile'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});