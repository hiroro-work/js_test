'use strict'

const text = prompt('文字列を入力してください')
const words = []

for (const word of text.split(' ')) {
  words.push(`${word}: ${word.length}`)
}

console.log(`{${words.join(', ')}}`)
