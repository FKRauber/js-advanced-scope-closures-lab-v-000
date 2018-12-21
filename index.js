function produceDrivingRange(blockRange) {
  return function(start, end) {
    if (blockRange - Math.abs(parseInt(end) - parseInt(start))) {

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
