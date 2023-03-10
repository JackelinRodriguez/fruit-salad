import { generateId } from "../Utils/generateId.js";




export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0

  }

  get playerTemplate() {
    return `
  <div class="col-3 p-4 card text-center shadow m-4">
  <h2 onclick="app.playersController.setActive('${this.id}')">${this.name} | ${this.score}</h2>
</div>
  `
  }

  get activeTemplate() {
    return `
    <div class="col-3 p-4 card text-center shadow m-4">
    <h2>${this.name} | ${this.score}</h2>
  </div>
    `
  }

}