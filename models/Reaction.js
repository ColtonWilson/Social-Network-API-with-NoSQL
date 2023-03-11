const { Schema, Types } = require('mongoose');
// Code template from module 18 activity 21 models/Post.js
// Schema for what makes up a reaction
const reactionSchema = new Schema({
  //default from module 18 activity 25 models/response.js
  reactionId:{type: Schema.Types.ObjectId, default:() => new Types.ObjectId(),},
  reactionBody: {type: String, required: true, maxlength:280},
  username: {type: String, required:true},
  //getter taken from stackoverflow
  createdAt: {type: Date, default: Date.now, get: (date) => { if (date) return date.toISOString().split("T") [0];}, },
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
);



module.exports = reactionSchema;
