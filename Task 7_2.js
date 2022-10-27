const obj = {
  a: 1,
  b: 2,
  c: 3,
  youKey: 4,
};
  
function func(youString, yourObject){
  console.log(youString in yourObject);
}
func( "youKey", obj);
