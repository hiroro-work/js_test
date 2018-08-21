'use strict'

const max = prompt('数値を入力してください')

let numbers = []
for (let i = 1; i <= Number(max); i++) {
  numbers.push(i)
}

const sum = numbers.reduce(function(prev, current) {
  return prev + current
})
console.log(`入力: ${max}`)
console.log(`出力: ${sum}`)
