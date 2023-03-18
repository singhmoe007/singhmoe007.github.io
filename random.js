// this is a program that will generate a random Hip-hop beat idea for the User



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
    return  randomGeneratedBeatIdea;
}

let beatIdea = randomizedMessage(dataSet)

function greetings() {
    let greetings = ["Behold, your beat idea, randomly generated:","A random beat idea has been generated just for you:","Your fortuitous beat idea is as follows:","By the power of chance, your beat idea is:","Randomness has granted you this beat idea:","Your beat idea, generated by the winds of fate:","Chance has smiled upon you with this beat idea:","May this randomly generated beat idea inspire you:","The universe has bestowed upon you a beat idea, randomly generated:","Your fortune cookie says: your randomly generated beat idea is..."];
    let chosenGreeting = greetings[Math.floor(Math.random() * 10)];

    return chosenGreeting;
}

console.log(greetings());
console.log(beatIdea);
