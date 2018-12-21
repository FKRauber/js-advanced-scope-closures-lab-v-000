function produceDrivingRange(blockRange) {
  return function(start, end) {
    if (blockRange - Math.abs(parseInt(end) - parseInt(start))) {
      return 'within range by' + (blockRange -  (parseInt(end) - parseInt(start)));
    } else {
      return Math.abs(blockRange - (parseInt(end) - parseInt(start))) + 'blocks out of range';
    };
  };
}

function produceTipCalculator(){
  return function(){

  };
}

function createDriver(){
  return class {
    let driverId = 0;
    constructor(name){
        this.name = name;
        this.id = ++driverId;
    }
  };
}
