class Device{
    constructor(devicePower, deviceStatus){
      this.power = devicePower;
    this.a = function(a){
        this.status = a;
    };
  }
  }
  class Lamp extends Device{  
      constructor(devicePower, deviceColor, deviceStatus){
        super(devicePower, deviceStatus);
        this.color = deviceColor;
      }
  }
  class Microwave extends Device{  
      constructor(devicePower, deviceColor, deviceStatus){
        super(devicePower, deviceStatus);
        this.color = deviceColor;
      }
  }
  
  const lamp1 = new Lamp(150, 'black', 0 );
  const microwave1 = new Microwave(1200, 'white', 0);
  
  let lampStatus = +prompt( 'Включите/Выключите лампу, где 1 - это включить/ 0 - выключить');
  let microwaveStatus = +prompt( 'Включите/Выключите микроволновку, где 1 - это включить/ 0 - выключить');
  
  lamp1.a(lampStatus);
  microwave1.a(microwaveStatus);
  
  console.log(microwave1);
  console.log(lamp1);
  
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
  console.log("Суммарная мощность включенных приборов: " + sumPower(lamp1, microwave1));