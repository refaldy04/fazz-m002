const segitigaLooping = (n) => {
  for (let i = 0; i < n; i++) {
    let int = ''
    for (let j = n; j > i; j--) {
      int += j
    }
    console.log(int)
  }
  return 'finish'
}

console.log(segitigaLooping(5))
