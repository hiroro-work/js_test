'use strict'

const Janken = (function() {
  const Janken = function() {
    if (!(this instanceof Janken)) {
      return new Janken()
    }

    this.rock = { id: 0, value: 'グー' }
    this.scissors = { id: 1, value: 'チョキ' }
    this.paper = { id: 2, value: 'パー' }
    this.choices = [this.rock, this.scissors, this.paper]
  }

  const proto = Janken.prototype

  proto.getJankenObj = function(id) {
    for (let choice of this.choices) {
      if (choice.id === id) {
        return choice
      }
    }
  }

  proto.jankenPoi = function() {
    const input_info = this.choices.map(function(choice) {
      return `${choice.id}.${choice.value}`
    })
    const input = this.getJankenObj(Number(prompt(`「じゃんけん・・・」\n> ${input_info.join(' ')}`)))
    if (!input) {
      this.jankenPoi()
      return
    }
    const computer = this.getJankenObj(Math.floor(Math.random() * 3))
    console.log(input.id)
    console.log('「ぽい!」')
    console.log(`*コンピュータ:${computer.value}`)
    console.log(`*あなた:${input.value}`)

    if (input === computer) {
      console.log('「アイコでしょ！」')
      this.jankenPoi()
      return
    }

    const youwin =
      (input === this.rock && computer === this.scissors) ||
      (input === this.scissors && computer === this.paper) ||
      (input === this.paper && computer === this.rock)

    if (youwin) {
      console.log('「あなたの勝ち！」')
    } else {
      console.log('「あなたの負け！」')
    }
  }

  return Janken
})()

const jk = new Janken()
jk.jankenPoi()
