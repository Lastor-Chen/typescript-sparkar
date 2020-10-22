import * as Patches from 'Patches'

class Text {
  inputName: string
  constructor(inputName: string) {
    this.inputName = inputName
  }

  #context: string = ''

  get context() {
    return this.#context
  }

  setContext(text: string) {
    this.#context = text
    Patches.inputs.setString(this.inputName, this.#context)
  }
}

export { Text }