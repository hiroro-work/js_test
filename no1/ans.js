'use strict'

const max = prompt('数字を入力してください')

let results = []
for (let i = 1; i < Number(max); i++) {
  let result = ''
  if (i % 3 === 0) {
    result = 'Fizz'
  }
  if (i % 5 === 0) {
    result += 'Buzz'
  }
  if (result === '') {
    result = i
  }
  results.push(result)
}
console.log(results.join(', '))
