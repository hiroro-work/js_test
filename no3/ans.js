'use strict'

const input = prompt('「じゃんけん・・・」\n> 0.グー 1.チョキ 2.パー')
console.log(input)
const computer = Math.floor(Math.random() * 3)
console.log('「ぽい!」')

if (input === computer) {
  // あいこ
} else if (input === 0) {
  if (computer === 1) {
    // かち
  } else if (computer === 2) {
    // まけ
  }
} else if (input === 1) {
  if (computer === 2) {
    // かち
  } else if (computer === 0) {
    // まけ
  }
} else if (input === 2) {
  if (computer === 0) {
    // かち
  } else if (computer === 1) {
    // まけ
  }
}
