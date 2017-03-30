function MathController (){

var holder = 0;
this.calculate = function (){
  holder =0;

this.test= this.count.split(' ');
//console.log("orginal "+this.test);

for(var i = 0; i < this.test.length; i++){
  for(var i = 0; i < this.test.length; i++){
  if(this.test.indexOf('*') > -1){
  holder= parseInt(this.test[this.test.indexOf('*')-1]) * parseInt(this.test[this.test.indexOf('*')+1]);
  this.test.splice(this.test.indexOf('*')-1,3,holder);
  console.log("second "+this.test);
  }
  };
  for(var i = 0; i < this.test.length; i++){
    if(this.test.indexOf('/') > -1){
  holder= parseInt(this.test[this.test.indexOf('/')-1]) / parseInt(this.test[this.test.indexOf('/')+1]);
  this.test.splice(this.test.indexOf('/')-1,3,holder);
  console.log("third "+this.test);
  }
  };
  for(var i = 0; i < this.test.length; i++){
  if(this.test.indexOf('+') > -1){
  holder= parseInt(this.test[this.test.indexOf('+')-1]) + parseInt(this.test[this.test.indexOf('+')+1]);
  this.test.splice(this.test.indexOf('+')-1,3,holder);
  console.log("forth "+this.test);
  }
  };
  for(var i = 0; i < this.test.length; i++){
  if(this.test.indexOf('-') > -1){
  holder= parseInt(this.test[this.test.indexOf('-')-1]) - parseInt(this.test[this.test.indexOf('-')+1]);
  this.test.splice(this.test.indexOf('-')-1,3,holder);
  console.log("fifth "+this.test);
  }
  };
}


if(isNaN(this.test)){
  this.test = "Oops something went wrong. Please reevaluate you entry and try again.";
} else {
  this.test = this.test[0];
}
}



};




angular
.module('app')
.controller('MathController',MathController);
