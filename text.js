function startSection(){
    document.getElementById('game').innerHTML = "<div class='startSection'><h1>Monopoly Jr</h1></div><button onclick='playerSection()'>Start</button></div>";
    
}

function playerSection(){
    document.getElementById('game').innerHTML = "<div class='playerSection'><h1>How many players?</h1><form><input type='button' name='name' onclick='playerAmount1()' value='2' /><input type='button' name='name' onclick='playerAmount2()' value='3' /><input type='button' name='name' onclick='playerAmount3()' value='4' /></form>";   
}

function playerAmount1(){
    players = 2;
    addPlayers()
    monopolyboard()
}
function playerAmount2(){
    players = 3;
    addPlayers()
    monopolyboard()
}
function playerAmount3(){
    players = 4;
    addPlayers()
    monopolyboard()
}

function monopolyboard() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    start()
}

function start(){
    ReadyBoard()
    readyName()
    readyTable()
    readyButtons()
    playerTurn()
}

function readyName(){
    document.getElementById('game').innerHTML = ""
    var para = document.createElement("h1");
    var node = document.createTextNode("Monopoly");
    document.getElementById("game").classList.add("controls"); 
    para.appendChild(node);
    var element = document.getElementById("game");
    element.appendChild(para);
}

function readyTable(){
    var table = document.getElementById("myTable");
    for(i=0; i < player.length; i++){
        var row = table.insertRow(0);
        var cell3 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell5 = row.insertCell(2);
        cell3.innerHTML = player[i].name
        cell4.innerHTML = player[i].amount
        cell5.innerHTML = player[i].properties
    }
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell6 = row.insertCell(2);
    cell1.innerHTML = "NAME";
    cell2.innerHTML = "MONEY";
    cell6.innerHTML = "Properties"
}

function readyButtons(){
    var buy = document.createElement("button");
    var textBuy = document.createTextNode("Buy");
    buy.appendChild(textBuy);
    var element = document.getElementById("game");
    element.appendChild(buy).setAttribute("onclick", "buyButton()"); 

    var pass = document.createElement("button");
    var textPass = document.createTextNode("Pass");
    pass.appendChild(textPass);
    var element = document.getElementById("game")
    element.appendChild(pass).setAttribute("onclick", "passButton()")

    var roll = document.createElement("button");
    var textRoll = document.createTextNode("Roll");
    roll.appendChild(textRoll);
    var element = document.getElementById("game");
    element.appendChild(roll).setAttribute("onclick", "rollButton()")
}

function playerTurn(){
    var playerTurn = document.createElement("p");
    var textTurn = document.createTextNode("Roll " + player[0].name);
    playerTurn.appendChild(textTurn);
    var element = document.getElementById("game");
    element.appendChild(playerTurn)
}

function ReadyBoard(){
    for(i=0; i < 16; i++){
        document.getElementById('title' + (i + 1)).innerHTML = spots[i].name
        document.getElementById('price' + (i + 1)).innerHTML = spots[i].price
        document.getElementById('runway' + (i + 1)).style.backgroundColor = spots[i].color
    }

    for(i=16; i < 32; i++){
        document.getElementById('title' + (i + 1)).innerHTML = spots[i].name
        document.getElementById('price' + (i + 1)).innerHTML = spots[i].price
    }

    for(i=26; i < 32; i++){
        document.getElementById('title' + (i + 1)).innerHTML = spots[i].name
        document.getElementById('price' + (i + 1)).innerHTML = spots[i].price
    }
}
function onloadw(){
    startSection()
}