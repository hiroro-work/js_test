'use strict'

const janken = ['グー', 'チョキ', 'パー']

function janken_poi() {
  const input = Number(prompt('「じゃんけん・・・」\n> 0.グー 1.チョキ 2.パー'))
  console.log(input)
  const computer = Math.floor(Math.random() * 3)
  console.log('「ぽい!」')
  console.log(`*コンピュータ:${janken[computer]}`)
  console.log(`*あなた:${janken[input]}`)

  if (input === computer) {
    console.log('「アイコでしょ！」')
    janken_poi()
    return
  }

  let win = false
  switch (input) {
    case 0:
      if (computer === 1) {
        win = true
      }
      break
    case 1:
      if (computer === 2) {
        win = true
      }
      break
    case 2:
      if (computer === 0) {
        win = true
      }
      break
    default:
      break
  }

  if (win) {
    console.log('「あなたの勝ち！」')
  } else {
    console.log('「あなたの負け！」')
  }
}

janken_poi()
