const mongoose = require('mongoose')
const Schema = mongoose.Schema



const personSchema = new Schema({
    name:{type: String},
    age :{type:Number},
    favoriteFoods:{type:[String]},
    email:{type:String}
})


module.exports= person=mongoose.model('person',personSchema);