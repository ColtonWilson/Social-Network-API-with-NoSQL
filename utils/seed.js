// Code template from module 18 activity 25 utils/seed.js
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(2);


  for (let i = 0; i < 10; i++) {
    const userName = getRandomUser();
    const email = `${userName}@Gmail.com`;
    if(users.includes(userName))
    {
        i--;
    }
    else{
    
    users.push({
      userName,
      email,
      thoughts,
    });
        
    }

  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  

  // loop through the saved thoughts, for each thought we need to generate a reaction and insert the reaction to thought
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});

