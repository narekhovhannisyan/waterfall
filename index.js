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
          console.error(err)
        }
        waterfall(arr, fn, ...res)
      })
    }
  }
}

waterfall([
  function (callback) {
    console.log(1)
    callback(null, 'one', 'two')
  },
  function (arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
    console.log(2)
    callback(null, 'three')
  },
  function (arg1, callback) {
    console.log(3)// arg1 now equals 'three'
    callback(null, 'done')
  }
], function (err, result) {
  console.log('done')
  // result now equals 'done'
})

waterfall([function (cb) {
  console.log(1)
  setTimeout(cb, 1000)
}, function (cb) {
  console.log(2)
  setTimeout(cb, 1000)
}, function (cb) {
  console.log(3)
  setTimeout(cb, 1000)
}, function (cb) {
  console.log(4)
  setTimeout(cb, 1000)
}], function () {
  console.log('Done')
})
