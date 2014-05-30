BARRIER = "----------------------------------------"

var assert = function(method, expected, message){
  if (method === expected){
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
// testCell = new Cell()
var accurateChecks = function(cellPosition){
   allPossibleChecks = [1, -1, 10, -10, -11, 11, -9, 9]
   valid_array = []
   for (var b=0; b<8; b++){
    if (isValid(cellPosition, allPossibleChecks[b])){
      valid_array.push(cellPosition + allPossibleChecks[b])
    }
   }
   return valid_array
}

var isValid= function(cellPosition, displacement){
  cellToCheck = cellPosition + displacement
  return (cellToCheck > 0) && (cellToCheck < 100)
}
console.log("Checking that isValid returns true within boundaries, or false if out of bounds")
assert(isValid(5,10), true, "Your boundaries are not right")
assert(isValid(0,-1), false, "isValid is doing some dumb shit")
assert(isValid(98,10), false, "isValid is doing some dumb shit")
console.log(BARRIER)
console.log("Check to see that accurateChecks returns the proper array")
console.log(accurateChecks(17))
assert(accurateChecks(17),[ 18, 16, 27, 7, 6, 28, 8, 26 ], "WHAAAT THE F" )
console.log(BARRIER)