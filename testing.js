BARRIER = "----------------------------------------"

var assert = function(method, expected, message){
  if (method() === expected){
    console.log("True")
  }else{
    console.log(message)
  }
}


var foo = function(){
  return 10
}
console.log(BARRIER)
console.log("Testing to check that foo = 10")
assert(foo, 10, "YOU CANT CODE FOR SHIT")
console.log(BARRIER)