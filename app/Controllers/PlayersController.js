import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { setHTML } from "../Utils/Writer.js";




function _drawPlayers() {
  console.log('drawing players');
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.playerTemplate)
  console.log(template);
  setHTML('players', template)
}

function _drawActive() {
  console.log('we will make an active');
  let activePlayer = appState.activePlayer
  if (activePlayer) {
    setHTML('active', activePlayer.activeTemplate)
  }
}

export class PlayersController {
  constructor() {
    console.log('hello from controller');
    _drawPlayers()
    appState.on('activePlayer', _drawActive)
  }


  setActive(playerId) {
    console.log('active player', playerId);
    playersService.setActive(playerId)
  }

}