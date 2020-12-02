import {Schema,model} from "mongoose";

const cardSchema = new Schema(
{
    name:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    }
},
{
    timesTamps:true,
    versionKey:false
});

export default model('Card',cardSchema);       