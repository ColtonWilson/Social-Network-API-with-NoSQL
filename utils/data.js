// Code template from module 18 activity 25 utils/data.js
const names = [
  'TurboSlayer',
  'CrypticHatter',
  'CrashTV',
  'Blue_Defender',
  'Toxic_Headshot',
  'IronMerc',
  'SteelTitan',
  'StealthedDefender',
  'Blaze_Assault',
  'Venom_Fate',
  'DarkCarnage',
  'FatalDestiny',
  'UltimateBeast',
  'Masked_Titan',
  'Frozen_Gunner',
  ``,

];

const descriptionsThoughts = [
  'I am successful.',
  'I am confident.',
  'I am powerful.',
  'I am strong.',
  'I am getting better and better every day.',
  'All I need is within me right now.',
  'I wake up motivated.',
  'I am an unstoppable force of nature.',
  'I am a living, breathing example of motivation.',
  'I am living with abundance.',
  'I am having a positive and inspiring impact on the people I come into contact with.',
  'I am inspiring people through my work.',
  'I am rising above the thoughts that are trying to make me angry or afraid.',
  'Today is a phenomenal day.',

];

const possibleReaction = [
  'I will definitely make sure that it gets sorted…',
  'I absolutely agree with you…',
  'I can certainly help you…',
  'I completely agree with you…',
  'That is a fantastic way to look at it…',
  'Marvellous choice…',
  'I can highly recommend…',

];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random User
const getRandomUser = () =>
  `${getRandomArrItem(names)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(descriptionsThoughts),
      username: getRandomUser(),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};


// Create the responses that will be added to each video
const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReaction);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleReaction),
      username: getRandomUser(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts};
