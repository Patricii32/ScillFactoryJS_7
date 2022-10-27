obj = {
  a: 1,
  b: 2,
  c: 3,
}
function func(obj){
  for (let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log(key, obj[key]);
    }
    
  }
}
func(obj);