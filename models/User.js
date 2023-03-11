// Code template from module 18 activity 21 models/Post.js
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, unique: true, required: true, trim: true},
    //Regex from google, email validation
    email: {type: String, unique: true, required: true, match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Please fill a valid email address']},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
    {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }


);
// Create a virtual property `friendCount` that gets the amount of friends per user
userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
