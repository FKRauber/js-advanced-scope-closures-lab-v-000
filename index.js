function produceDrivingRange(blockRange) {
  return function(start, end) {
    if (blockRange - Math.abs(parseInt(end) - parseInt(start))) {
      return 'within range by' + (blockRange -  (parseInt(end) - parseInt(start)));
    } else {
      return Math.abs(blockRange - (parseInt(end) - parseInt(start))) + 'blocks out of range';
    };
  };
}

