const sentence = "hello there from lighthouse labs";

let n = 1
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, 50 * n)
  n += 1
}
setTimeout(() =>  {
  console.log('')
}, 50 * n)
