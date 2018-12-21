function produceDrivingRange(blockRange){
  return function(start, end){

    let s = parseInt(start);
    let e = parseInt(end);
    let distanceToTravel = Math.abs(e - s);
    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


function produceTipCalculator(billPrice){
  return function(tip){
    return billPrice * tip;
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
