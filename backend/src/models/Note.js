import mongoose from "mongoose";

//create schema(structure) for note 
const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true //created, update timestamp
    }
);

//create a model using the schema
const Note = mongoose.model("Note",noteSchema);

export default Note;