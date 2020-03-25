let players =  0;
let playerType = ["Car", "Horse", "Panda", "Girafe"];
let player = []

function addPlayers(){
    for(i=0; i < players; i++){
        player[player.length] = {
                "name": playerType[i],
                "amount" : 31,
                "properties": 0,
                "spot": 0
            }
        }
    }
