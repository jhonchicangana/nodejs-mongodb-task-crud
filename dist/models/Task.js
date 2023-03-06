"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/*import { Schema, model } from "mongoose";


const taskSchema = new Schema({
    title: {type:String,
             required : true,
             unique : true,
             trim : true},
    descripcion :{type:String,
    required : true},
    done :{
        type:Boolean,
        default : false,
    } ,
},
   {
    timestamps: true,
    versionKey :false
}

);
   
export default model('Task', taskSchema)*/

var TaskSchema = (0, _mongoose.Schema)({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Task", TaskSchema);
exports["default"] = _default;