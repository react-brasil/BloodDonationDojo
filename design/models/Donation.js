var Mongoose = require('mongoose');

module.exports = Mongoose.model({
	quantity: {
		type: Number,
		required: true,
		default: 450
	},
	userId: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	bloodCollectionId: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'BloodCollection'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});