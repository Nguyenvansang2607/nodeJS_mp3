var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
        imgepath : {type: String, readable:true},
        title : {type: String, readable: true},
        description : {type : String, readable:true},
        price : {type :Number, readable:true},
});
    module.exports = mongoose.model('mp3',schema);