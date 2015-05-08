var mongoose = require('mongoose');

var userSchema = new mongoose.Schema ({
	username: {type: String, unique: true },
	email: { type: String, unique: true },
	level: { type: Number },
	location: { type: String },
	member: { type: Boolean, default: false }

});

module.exports = mongoose.model('User', userSchema);