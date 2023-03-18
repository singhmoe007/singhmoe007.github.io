// this is a program that will generate a random Hip-hop beat idea for the User

console.log("Your Randomly generated beat idea is: ")

const dataSet = {
    genre: ["Boom-Bap", "Trap", "Lofi", "OldSchool", "Drill", "Grime", "pop", "Afro-beats", "DanceHall"],
    instruments: ["Piano", "Guitar", "Flute", "Violen", "Saxophone"],
    vibe: ["Chill", "Hard", "Dark", "Melodic", "Romantic", "Aggressive" ],
    base: ["808", "Synth"]
};

let randomGenre = dataSet.genre[Math.floor(Math.random() * dataSet.genre.length)];
let randomInstrument = dataSet.instruments[Math.floor(Math.random() * dataSet.instruments.length)];
let randomVibe = dataSet.vibe[Math.floor(Math.random() * dataSet.vibe.length)];
let randomBase = dataSet.base[Math.floor(Math.random() * dataSet.base.length)];

let bpmToUse;

if (randomGenre === "Drill" || randomGenre === "Grime" || randomGenre === "Trap" ) {
    bpmToUse = "BPM range: 125-160";
} else {
    bpmToUse = "BPM range: 70-125";
};

let randomGeneratedBeatIdea = `Make a ${randomGenre} type beat using ${randomInstrument} for main melody and with ${randomBase}. Beat should be ${randomVibe}.`
console.log(randomGeneratedBeatIdea);
console.log(bpmToUse);