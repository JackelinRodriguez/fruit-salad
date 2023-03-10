import { appState } from "../AppState.js"



class PlayersService {
  setActive(playerId) {
    let player = appState.players.find(p => p.id == playerId)
    console.log(player);
    appState.activePlayer = player
    console.log(appState.activePlayer);
  }



  // console.log('hello from service');




}

export const playersService = new PlayersService()