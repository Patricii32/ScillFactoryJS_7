function Device(devicePower, deviceColor, deviceStatus){
	this.power = devicePower;
  this.color = deviceColor;
  this.a = function(a){
  	this.status = a;
  };
}

const lamp = new Device(150, 'black', 0 );
const microwave = new Device(1200, 'white', 0);

let lampStatus = +prompt( 'Включите/Выключите лампу, где 1 - это включить/ 0 - выключить');
let microwaveStatus = +prompt( 'Включите/Выключите микроволновку, где 1 - это включить/ 0 - выключить');

lamp.a(lampStatus);
microwave.a(microwaveStatus);

console.log(microwave);
console.log(lamp);

function sumPower(x,y){
	let a = x.power;
	let b = y.power;
	if (x.status == 0){
  	a  = 0;
  }
  if (y.status == 0){
  	b = 0;
  }
  return a+b;
}
console.log("Суммарная мощность включенных приборов: " + sumPower(lamp, microwave));