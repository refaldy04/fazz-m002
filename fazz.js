const input = [73, 67, 38, 33]
let output = []

input.map((nilai) => {
  if (nilai < 38) {
    output.push(nilai)
  } else if (nilai % 5 >= 3) {
    output.push(Math.round(nilai / 5) * 5)
  } else {
    output.push(nilai)
  }
})

console.log(output)

// ===========================================================

const string = 'Hello Worldaaa' + ' '

string.split(' ')

console.log(string.split(' ').at(-1).length)
