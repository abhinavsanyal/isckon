var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bhaktSchema = new Schema({
    fullname: { type: 'String'},
    contact: { type: 'Number' },
    email: { type: 'String', default: ''}
});

var Bhakts = mongoose.model('bhakt',bhaktSchema);

module.exports = Bhakts;
