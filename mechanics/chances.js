var colors = ["blue", "red", "green", "yellow", "light-blue", "dark-blue", "orange", "purple", "dark-pink"];
var trainDestinations = [
    {
        "name":"Pay $3",
        "identifier":"mono"
    },
    {
        "name":"GO to GO",
        "identifier":"mono"
    },
    {
        "name":"Dolphin Show",
        "identifier":"festivities"
    },
    {
        "name":"Firework Show",
        "identifier":"festivities"        
    },
];

function addRoll(){
for(i=0; i < 4; i++){
    trainDestinations[trainDestinations.length] = {
            "name": colors[i],
            "identifier": "roll"
        }
    }
}

function addTrain(){
for(i=0; i < colors.length; i++){
    trainDestinations[trainDestinations.length] = {
            "name": colors[i],
            "identifier": "goto"
        }
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

addRoll()
addTrain()
addTrain()
shuffle(trainDestinations);
    
console.log(trainDestinations);
