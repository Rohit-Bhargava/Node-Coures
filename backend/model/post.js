const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    
    title: {type: String, requried: true},
    content: {type: String, requried: true}
});
module.exports = mongoose.model('Post', postSchema);