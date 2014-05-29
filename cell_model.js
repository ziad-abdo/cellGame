function CellModel(){
  this.allPossibleCells = this.fillArray()
  this.arrayLength = this.allPossibleCells.length
}

CellModel.prototype= {
  fillArray: function(){
    array = new Array()
    for(var i=0; i<100; i++){
      array.push(new Cell(i))
    }
    return array
  }
}

function Cell(indexP){
  this.alive = false
  this.nextState = false
  this.position = indexP
}

Cell.prototype={
  checkNeighbors: function(){
    environmentArray = mainControl.Model.allPossibleCells
    allChecksArray = this.accurateChecks(this.position)
    neighborsState = []
    // debugger
    for(var x=0; x<(allChecksArray.length); x++){
      if(environmentArray[allChecksArray[x]].alive){
        neighborsState.push(1)
      }
    }
    this.nextState = this.cellBehavior(neighborsState.length)
  },
  cellBehavior: function(value){
    if (this.alive){
      return this.liveOutcome(value)
    }else{
      return this.deadOutcome(value)
    }

  },
  liveOutcome: function(value){
     if(value<2 || value>4){
        return false
      }else{
        return true
      }
  },
  deadOutcome: function(value){
    if(value === 3){
        return true
      }else{
        return false
      }
  },

  accurateChecks: function(cellPosition){
   allPossibleChecks = [1, -1, 10, -10, -11, 11, -9, 9]
   valid_array = []
   for (var b=0; b<8; b++){
    if (this.isValid(cellPosition, allPossibleChecks[b])){
      valid_array.push(cellPosition + allPossibleChecks[b])
    }
   }
   return valid_array
  },

  isValid: function(cellPosition, displacement){
   return ((cellPosition + displacement) > 0) && ((cellPosition + displacement) < 100)
  },

  Step: function(){
    this.alive = this.nextState
  }
}