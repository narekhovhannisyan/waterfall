const waterfall = (arr, fn, ...args) => {
  if (arr.constructor !== Array) {
    console.log('input is not an array!')
  } else {
    if (arr.length === 0) {
      return fn()
    } else {
      let func = arr.shift()
      func(...args, (err, ...res) => {
        if (err) {
          fn(err)
        } else { waterfall(arr, fn, ...res) }
      })
    }
  }
}

module.exports = {
  waterfall
}
