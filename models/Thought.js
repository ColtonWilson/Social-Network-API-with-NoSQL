// Code template from module 18 activity 21 models/Post.js
const { Schema, model } = require('mongoose');
// Code template from module 18 activity 25 models/Video.js
const Reaction = require('./Reaction');

// Schema for what makes up a thought
const thoughtSchema = new Schema({
  thoughtText: {type: String, required: true, minLength:1 , maxLength:280 },
  //getter taken from stackoverflow
  createdAt: {type: Date, default: Date.now, get: (date) => { if (date) return date.toISOString().split("T") [0];}, },
  username: {type: String, required:true},
  reactions: [Reaction]
},
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
