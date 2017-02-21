var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	username: {type: String, default: ''},
	password: {type: String, default: ''},
	category: {type: String, default: ''},
	bio: {type: String, default: ''},
	allgeries: {type: String, default: ''},
	checks: {type: String, default: ''},
	drugs: {type: String, default: ''},
	labtest: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

CustomerSchema.methods.summary = function() {
	var summary = {
		'username':this.username,
		'category':this.category,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('CustomerSchema', CustomerSchema);