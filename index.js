function produceDrivingRange(blockRange) {
  return function(start, end) {
    let s = parseInt(start);
    let e = parseInt(end);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;

    if (difference > 0) {
      return 'within range by $(difference)'
    } else {
      return '${Math.abs(difference)} blocks out of range'
    }
  }
}
