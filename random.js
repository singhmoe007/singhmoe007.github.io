// this is a program that will generate a random Hip-hop beat idea for the User

console.log("Your Randomly generated beat idea is: ")

const dataSet = {
    genre: ["Boom-Bap", "Trap", "Lofi", "OldSchool", "Drill", "Grime", "pop", "Afro-beats", "DanceHall"],
    instruments: ["Piano", "Guitar", "Flute", "Violen", "Saxophone"],
    vibe: ["Chill", "Hard", "Dark", "Melodic", "Romantic", "Aggressive" ],
    base: ["808", "Synth"]
};

function randomizedMessage(obj) {
    //We add various datasets, to choose the randomly generated beat for our project, and choose each data set at random!
    let randomGenre = obj.genre[Math.floor(Math.random() * obj.genre.length)];
    let randomInstrument = obj.instruments[Math.floor(Math.random() * obj.instruments.length)];
    let randomVibe = obj.vibe[Math.floor(Math.random() * obj.vibe.length)];
    let randomBase = obj.base[Math.floor(Math.random() * obj.base.length)];

    //We need to guide our producers to be in a certain range for their beats
    let bpmToUse;
    if (randomGenre === "Drill" || randomGenre === "Grime" || randomGenre === "Trap" ) {
        bpmToUse = "BPM range: 125-160";
    } else {
        bpmToUse = "BPM range: 70-125";
    };

    //final message 
    let randomGeneratedBeatIdea = `Make a ${randomGenre} type beat using ${randomInstrument} for main melody and with ${randomBase}. Beat should be ${randomVibe}. \n${bpmToUse}`;
    return randomGeneratedBeatIdea;
}


console.log(randomizedMessage(dataSet));
