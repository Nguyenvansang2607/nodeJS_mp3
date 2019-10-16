var product = require('../models/product');
var mongoose = require('mongoose');
var products = [
    new product({
        imagepath:"",
        title:"helo",
        description:"dsgfd",
        price:100
    })
];
var done =0;
for (var i =0;i<products.length;i++){
    products[i].save(function (err,result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}
mongoose.disconnect();