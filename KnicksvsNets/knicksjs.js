function updateTotal() {

var playerValue = 0;
var netsValue = 0;

function checkKnick() {
  
  if (document.getElementById('knicks').value == 'knicksPlayer1'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[0].name + " averaged " + knicks[0].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[0].name + " played in " + knicks[0].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[0].name + " averaged " + knicks[0].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[0].name + " averaged " + knicks[0].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[0].name + " averaged " + knicks[0].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('knicks').value == 'knicksPlayer2'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[1].name + " averaged " + knicks[1].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[1].name + " played in " + knicks[1].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[1].name + " averaged " + knicks[1].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[1].name + " averaged " + knicks[1].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[1].name + " averaged " + knicks[1].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer3'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[2].name + " averaged " + knicks[2].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[2].name + " played in " + knicks[2].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[2].name + " averaged " + knicks[2].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[2].name + " averaged " + knicks[2].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[2].name + " averaged " + knicks[2].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('knicks').value == 'knicksPlayer4'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[3].name + " averaged " + knicks[3].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[3].name + " played in " + knicks[3].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[3].name + " averaged " + knicks[3].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[3].name + " averaged " + knicks[3].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[3].name + " averaged " + knicks[3].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer5'){ 
      if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[4].name + " averaged " + knicks[4].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[4].name + " played in " + knicks[4].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[4].name + " averaged " + knicks[4].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[4].name + " averaged " + knicks[4].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[4].name + " averaged " + knicks[4].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('knicks').value == 'knicksPlayer6'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[5].name + " averaged " + knicks[5].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[5].name + " played in " + knicks[5].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[5].name + " averaged " + knicks[5].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[5].name + " averaged " + knicks[5].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[5].name + " averaged " + knicks[5].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer7'){ 
      if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[6].name + " averaged " + knicks[6].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[6].name + " played in " + knicks[6].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[6].name + " averaged " + knicks[6].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[6].name + " averaged " + knicks[6].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[6].name + " averaged " + knicks[6].blocks + " blocks per game last season";
    }
  }

   if (document.getElementById('knicks').value == 'knicksPlayer8'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[7].name + " averaged " + knicks[7].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[7].name + " played in " + knicks[7].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[7].name + " averaged " + knicks[7].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[7].name + " averaged " + knicks[7].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[7].name + " averaged " + knicks[7].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('knicks').value == 'knicksPlayer9'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[8].name + " averaged " + knicks[8].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[8].name + " played in " + knicks[8].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[8].name + " averaged " + knicks[8].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[8].name + " averaged " + knicks[8].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[8].name + " averaged " + knicks[8].blocks + " blocks per game last season";
    }
  }


  if (document.getElementById('knicks').value == 'knicksPlayer10'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[9].name + " averaged " + knicks[9].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[9].name + " played in " + knicks[9].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[9].name + " averaged " + knicks[9].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[9].name + " averaged " + knicks[9].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[9].name + " averaged " + knicks[9].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer11'){ 
      if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[10].name + " averaged " + knicks[10].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[10].name + " played in " + knicks[10].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[10].name + " averaged " + knicks[10].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[10].name + " averaged " + knicks[10].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[10].name + " averaged " + knicks[10].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer12'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[11].name + " averaged " + knicks[11].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[11].name + " played in " + knicks[11].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[11].name + " averaged " + knicks[11].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[11].name + " averaged " + knicks[11].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[11].name + " averaged " + knicks[11].blocks + " blocks per game last season";
    }
  }


     if (document.getElementById('knicks').value == 'knicksPlayer13'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[12].name + " averaged " + knicks[12].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[12].name + " played in " + knicks[12].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[12].name + " averaged " + knicks[12].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[12].name + " averaged " + knicks[12].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[12].name + " averaged " + knicks[12].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('knicks').value == 'knicksPlayer14'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[13].name + " averaged " + knicks[13].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[13].name + " played in " + knicks[13].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[13].name + " averaged " + knicks[13].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[13].name + " averaged " + knicks[13].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[13].name + " averaged " + knicks[13].blocks + " blocks per game last season";
    }
  }  

      if (document.getElementById('knicks').value == 'knicksPlayer14'){ 
    if (document.getElementById('compare').value == 'points') {
         playerValue = knicks[14].name + " averaged " + knicks[14].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         playerValue = knicks[14].name + " played in " + knicks[14].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        playerValue = knicks[14].name + " averaged " + knicks[14].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        playerValue = knicks[14].name + " averaged " + knicks[14].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        playerValue = knicks[14].name + " averaged " + knicks[14].blocks + " blocks per game last season";
    }
  }  

  }

function checkNet() {

  if (document.getElementById('netsTeam').value == 'netsPlayer1'){ 
    if (document.getElementById('compare').value == 'points') {
        netsValue = nets[0].name + " averaged " + nets[0].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[0].name + " played in " + nets[0].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[0].name + " averaged " + nets[0].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[0].name + " averaged " + nets[0].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[0].name + " averaged " + nets[0].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('netsTeam').value == 'netsPlayer2'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[1].name + " averaged " + nets[1].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[1].name + " played in " + nets[1].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[1].name + " averaged " + nets[1].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[1].name + " averaged " + nets[1].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[1].name + " averaged " + nets[1].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer3'){ 
      if (document.getElementById('compare').value == 'points') {
         netsValue = nets[2].name + " averaged " + nets[2].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[2].name + " played in " + nets[2].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[2].name + " averaged " + nets[2].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[2].name + " averaged " + nets[2].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[2].name + " averaged " + knicks[2].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('netsTeam').value == 'netsPlayer4'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[3].name + " averaged " + nets[3].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[3].name + " played in " + nets[3].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[3].name + " averaged " + nets[3].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[3].name + " averaged " + nets[3].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[3].name + " averaged " + nets[3].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer5'){ 
      if (document.getElementById('compare').value == 'points') {
         netsValue = nets[4].name + " averaged " + nets[4].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[4].name + " played in " + nets[4].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[4].name + " averaged " + nets[4].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[4].name + " averaged " + nets[4].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[4].name + " averaged " + nets[4].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('netsTeam').value == 'netsPlayer6'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[5].name + " averaged " + nets[5].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[5].name + " played in " + nets[5].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[5].name + " averaged " + nets[5].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[5].name + " averaged " + nets[5].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[5].name + " averaged " + nets[5].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer7'){ 
      if (document.getElementById('compare').value == 'points') {
         netsValue = nets[6].name + " averaged " + nets[6].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[6].name + " played in " + nets[6].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[6].name + " averaged " + nets[6].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[6].name + " averaged " + nets[6].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[6].name + " averaged " + nets[6].blocks + " blocks per game last season";
    }
  }

   if (document.getElementById('netsTeam').value == 'netsPlayer8'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[7].name + " averaged " + nets[7].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[7].name + " played in " + nets[7].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[7].name + " averaged " + nets[7].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[7].name + " averaged " + nets[7].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[7].name + " averaged " + nets[7].blocks + " blocks per game last season";
    }
  }

  if (document.getElementById('netsTeam').value == 'netsPlayer9'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[8].name + " averaged " + nets[8].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[8].name + " played in " + nets[8].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[8].name + " averaged " + nets[8].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[8].name + " averaged " + nets[8].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[8].name + " averaged " + nets[8].blocks + " blocks per game last season";
    }
  }


  if (document.getElementById('netsTeam').value == 'netsPlayer10'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[9].name + " averaged " + nets[9].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[9].name + " played in " + nets[9].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[9].name + " averaged " + nets[9].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[9].name + " averaged " + nets[9].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[9].name + " averaged " + nets[9].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer11'){ 
      if (document.getElementById('compare').value == 'points') {
         netsValue = nets[10].name + " averaged " + nets[10].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[10].name + " played in " + nets[10].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[10].name + " averaged " + nets[10].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[10].name + " averaged " + nets[10].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[10].name + " averaged " + nets[10].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer12'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[11].name + " averaged " + nets[11].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[11].name + " played in " + nets[11].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[11].name + " averaged " + nets[11].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[11].name + " averaged " + nets[11].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[11].name + " averaged " + nets[11].blocks + " blocks per game last season";
    }
  }


     if (document.getElementById('netsTeam').value == 'netsPlayer13'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[12].name + " averaged " + nets[12].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[12].name + " played in " + nets[12].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[12].name + " averaged " + nets[12].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[12].name + " averaged " + nets[12].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[12].name + " averaged " + nets[12].blocks + " blocks per game last season";
    }
  }

    if (document.getElementById('netsTeam').value == 'netsPlayer14'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[13].name + " averaged " + nets[13].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[13].name + " played in " + nets[13].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[13].name + " averaged " + nets[13].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[13].name + " averaged " + nets[13].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[13].name + " averaged " + nets[13].blocks + " blocks per game last season";
    }
  }  

      if (document.getElementById('netsTeam').value == 'netsPlayer15'){ 
    if (document.getElementById('compare').value == 'points') {
         netsValue = nets[14].name + " averaged " + nets[14].PPG + " points per game last season";  
      } else if (document.getElementById('compare').value == 'games') {
         netsValue = nets[14].name + " played in " + nets[14].gamesPlayed + " games last season";  
      } else if (document.getElementById('compare').value == 'assists') {
        netsValue = nets[14].name + " averaged " + nets[14].assists + " assists per game last season";
      } else if (document.getElementById('compare').value == 'rebounds') {
        netsValue = nets[14].name + " averaged " + nets[14].reb + " rebounds per game last season";
      } else if (document.getElementById('compare').value == 'blocks') {  
        netsValue = nets[14].name + " averaged " + nets[14].blocks + " blocks per game last season";
    }
  }  

  }

checkKnick();
checkNet();

function TeamDifference(playerValue, netsValue){

  if(!(playerValue || totalNet)){
    return "Analyzing Data";
  }

  var totalKnick = playerValue.toString().match(/[0-9.]+/g).join("")
  var totalNet = netsValue.toString().match(/[0-9.]+/g).join("")
  var totalKnick = Number(totalKnick);
  var totalNet = Number(totalNet);





  for(var i = 0; i < playerValue.length; i++){
    if(playerValue.indexOf("points") > -1) {
      if(totalKnick > totalNet){

      return "The player on the Knicks averages " + Math.round((totalKnick - totalNet)*100)/100 + " more points per game than the player on the Nets.";
      } else if(totalNet > totalKnick){
  
      return "The player on the Nets averages " + Math.round((totalNet - totalKnick)*100)/100 + " more points per game than the player on the Knicks.";
      }else{ 
        return "The players averaged the same amount of points"

      }
     }
     
     
if(playerValue.indexOf("games") > -1){
  if(totalKnick > totalNet){
      return "The player on the Knicks played in " + Math.round((totalKnick - totalNet)*100)/100 + " more games than the player on the Nets."
      } else if(totalNet > totalKnick){
  
      return "The player on the Nets played in " + Math.round((totalNet - totalKnick)*100)/100 + " more games than the player on the Knicks."
      }else{ 
        return "The players competed in the same amount of games"

      }
     }

if(playerValue.indexOf("blocks") > -1){
  if(totalKnick > totalNet){
      return "The player on the Knicks blocked " + Math.round((totalKnick - totalNet)*100)/100  + " more shots per game than the player on the Nets."
      } else if(totalNet > totalKnick){
  
      return "The player on the Nets blocked " + Math.round((totalNet - totalKnick)*100)/100 + " more shots per game than the player on the Knicks."
      }else{ 
        return "The players averaged the same amount of blocks"

      }
     }

if(playerValue.indexOf("assists") > -1){
  if(totalKnick > totalNet){
      return "The player on the Knicks had " + Math.round((totalKnick - totalNet)*100)/100 + " more assists per game than the player on the Nets."
      } else if(totalNet > totalKnick){
  
      return "The player on the Nets had " + Math.round((totalNet - totalKnick)*100)/100  + " more assists per game than the player on the Knicks."
      }else{ 
        return "The players averaged the same amount of assists"

      }
     }

if(playerValue.indexOf("rebounds") > -1){
  if(totalKnick > totalNet){
      return "The player on the Knicks had " + Math.round((totalKnick - totalNet)*100)/100  + " more rebounds than the player on the Nets."
      } else if(totalNet > totalKnick){
  
      return "The player on the Nets had " + Math.round((totalNet - totalKnick)*100)/100 + " more rebounds per game than the player on the Knicks."
      } else{ 
        return "The players averaged the same amount of rebounds"

      }


     }
     
} 
    
}



document.getElementById('netsValue').innerHTML = netsValue;
document.getElementById('playerValue').innerHTML = playerValue;
document.getElementById('Result').innerHTML = TeamDifference(playerValue, netsValue);


} 




var knicks = [
  
  {"name": "Quincy Acy", "position": "forward", "gamesPlayed": 63, "PPG": 5.7, "reb": 4.4, "assists": 1, "blocks": 0.32 },
  {"name": "Cole Aldrich", "position": "center", "gamesPlayed": 56, "PPG": 5.1, "reb": 5.4, "assists": 1.2, "blocks": 1.07},
  {"name": "Lou Amundson", "position": "forward", "gamesPlayed": 48, "PPG": 4.7, "reb": 5, "assists": 1.6, "blocks": 1.27},
  {"name": "Carmelo Anthony", "position": "forward", "gamesPlayed": 40, "PPG": 24.2, "reb": 6.6, "assists": 3.1,"blocks": 0.43},
  {"name": "Andrea Bargnani", "position": "center", "gamesPlayed": 28, "PPG": 14.8, "reb": 4.3, "assists": 1.6, "blocks": 0.93},
  {"name": "Jose Calderon", "position": "guard", "gamesPlayed": 42, "PPG": 9.1, "reb": 3, "assists": 4.7, "blocks": 0},
  {"name": "Cleanthony Early", "position": "forward", "gamesPlayed": 36, "PPG": 5.5, "reb": 2.4, "assists": 0.9, "blocks": 0.31},
  {"name": "Langston Galloway", "position": "guard", "gamesPlayed": 40, "PPG": 11.3, "reb": 4.3, "assists": 3.3, "blocks":0.27},
  {"name": "Tim Hardaway Jr.", "position": "guard", "gamesPlayed": 65, "PPG": 11.1, "reb": 2.2, "assists": 1.8,"blocks": 0.20 },
  {"name": "Shane Larkin", "position": "guard", "gamesPlayed": 71, "PPG": 6.1, "reb": 2.3, "assists": 3, "blocks": 0.12},
  {"name": "Ricky Ledo", "position": "guard", "gamesPlayed": 13, "PPG": 5.9, "reb": 2.2, "assists": 1.5, "blocks": 0.08},
  {"name": "Alexey Shved", "position": "guard", "gamesPlayed": 42, "PPG": 10.3, "reb": 2.4, "assists": 3.6, "blocks": 0.31},
  {"name": "Jason Smith", "position": "forward", "gamesPlayed": 77, "PPG": 7.7, "reb": 3.8, "assists": 1.7, "blocks":  0.54},
  {"name": "Lance Thomas", "position": "forward", "gamesPlayed": 57, "PPG": 7.2, "reb": 3.2, "assists": 1.2, "blocks": 0.20 },
  {"name": "Travis Wear", "position": "forward", "gamesPlayed": 51, "PPG": 3.9, "reb": 2.1, "assists": 0.8, "blocks": 0.22},
  {"numOfTeammates": 15}
];

var nets = [
  {"name": "Alan Anderson", "position": "guard", "gamesPlayed": 74, "PPG" : 7.4, "reb":2.8, "assists": 1.1, "blocks": 0.07},
  {"name": "Bojan Bogdanovic", "position": "guard", "gamesPlayed": 78, "PPG": 9, "reb":2.7, "assists": 0.9, "blocks": 0.12},
  {"name": "Markel Brown", "position": "guard", "gamesPlayed": 47, "PPG":4.6, "reb":2.3, "assists": 0.8, "blocks": 0.26},
  {"name": "Earl Clark", "position": "forward", "gamesPlayed": 10, "PPG": 2.7, "reb":2.3, "assists": 0.3, "blocks": 0.40},
  {"name": "Jarrett Jack", "position": "guard", "gamesPlayed": 80, "PPG": 12, "reb":3.1, "assists": 4.7, "blocks": 0.16},
  {"name": "Cory Jefferson", "position": "forward", "gamesPlayed": 50, "PPG": 3.7, "reb":2.9, "assists": 0.3, "blocks": 0.42},
  {"name": "Joe Johnson", "position": "forward", "gamesPlayed": 80, "PPG": 14.4, "reb":4.8, "assists": 3.7, "blocks": 0.18},
  {"name": "Jerome Jordan", "position": "center", "gamesPlayed": 44, "PPG": 3.1, "reb":2.4, "assists": 0.3, "blocks": 0.34},
  {"name": "Sergey Karasev", "position": "forward", "gamesPlayed": 33, "PPG": 4.6, "reb":2, "assists": 1.4, "blocks": 0.03},
  {"name": "Brook Lopez", "position": "center", "gamesPlayed": 72, "PPG": 17.2, "reb":7.4, "assists": 0.7, "blocks": 1.75},
  {"name": "Darius Morris", "position": "guard", "gamesPlayed": 38, "PPG": 2.2, "reb":0.7, "assists": 1.3, "blocks": 0.00},
  {"name": "Mason Plumlee", "position": "forward", "gamesPlayed": 82, "PPG": 8.7, "reb":6.2, "assists": 0.9, "blocks": 0.77},
  {"name": "Mirza Teletovic", "position": "forward", "gamesPlayed": 40, "PPG": 8.5, "reb":4.9, "assists": 1.2, "blocks": 0.40},
  {"name": "Deron Williams", "position": "guard", "gamesPlayed": 68, "PPG": 13, "reb":3.5, "assists": 6.6, "blocks": 0.25},
  {"name": "Thaddeus Young", "position": "forward", "gamesPlayed": 76, "PPG": 14.1, "reb":5.4, "assists": 1.4, "blocks": 0.29},
  {"numofPlayers": 15}

  
];