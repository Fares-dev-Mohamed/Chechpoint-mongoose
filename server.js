const express = require('express')
const router =express.Router()
const app= express() 
const Person = require('./model/person')
const mongoose = require ('mongoose')


/* require ('dotenv').config()
mongoose
.connect(process.env.MONGO_URI,{useNewUrlParser:true}) */
mongoose.
connect('mongodb://localhost:27017/myapp')
.then (()=>console.log('DB connected'))
.catch(err=>console.log(err))

app.get('/personneList',(req,res)=>{
    res.sendFile(__dirname + '/Route/Personne')
})
app.use(express.static(__dirname + '/Route'));
//1
const person = new Person ({
name:'ahmed',
age:37,
favoriteFoods:["koskos","spagiti"],
email:'ahmed@gmail.com'
 })
  person.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
   //2
   let arrayOfPeople=[
    {name:"Haythem", age:23, favoriteFoods:["Seafood paella", "poSom tam, Thailand", "Chicken rice, Singapore"],email:'haythem@gmail.com'},
    {name:"Nidhal", age:31, favoriteFoods:["pastaPoutine, Canada", "Tacos, Mexico", "Marzipan, Germany"],email:'nidhal@gmail.com'},
    {name:"Wael", age:25, favoriteFoods:["Ketchup, United States", "Hummus, Middle East"],email:'wael@gmail.com'}]
    
      Person.create(arrayOfPeople,(error,data)=>{
        {
          if (error){
            return console.log(error);
          }else 
          {return console.log(null, data) 
              }
        };
      })
      //3
      Person.find({name:"Nidhal"},(error,data)=>{
        {
          if (error){
            return console.log(error);
          }else 
          {return console.log(null, data) 
              }
        };
      })
      //4
      Person.findOne({favoriteFoods:/* $all: */['koskos']},(error,data)=>{
        if (error){console.log(error)}
        else{
          return console.log(null, data)
        }
      })
      //5
      Person.findById ({id:"61542aa4ba45a8347e8cfd60"},(error,data)=>{
        if (error){console.log(error)}
        else{
          return console.log(null, data)
        }
      })
      //6
      Person.findOne({name:"ahmed"},(error,data)=>{

        if (error){console.log(error)}
        else{
      data.favoriteFoods.push("humberger")
      data.save()
        }
      })
      //7
      personID="61547f074fe5e90e16204f63"
      Person.findByIdAndRemove({personID},(error,data)=>{
        if (error) {console.log("ther is an error")}
        else{
          return console.log(null, data)
        }
       })
       //8
       let toRemove="Wael"
  Person.remove({name:toRemove},(error,json)=>{
    if (error){console.log(error)}
    else{
      return console.log(null, json)

    }
  })
  //9
  Person.find({favoriteFoods: ["burrito"]})
  .sort({name:'asc'})
  .limit(2)
  .select('-age')
  .exec((error,data)=>{
    if (error){console.log(error)}
    else{
      return console.log(null,data)}
  })
         
app.listen(4001,(error)=>{
    if (error) console.log('serveur is not running')
    else console.log ('sever is running on port 4001')
})