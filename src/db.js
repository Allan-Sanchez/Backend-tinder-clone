import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/tinder-clone",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(db => console.log('Db is connnected'))
.catch( error => console.log(error));