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
    allChecksArray = [1, -1, 10, -10, -11, -9, 11, 9]
    neighborsState = []
// debugger
    for(var x=0; x<8; x++){
      if(environmentArray[(this.position+allChecksArray[x])].alive){
        neighborsState.push(1)
      }
    }
    this.nextState = this.cellBehavior(neighborsState.length)
  },
  cellBehavior: function(value){
    if (value<2){
      return false
    }
    if (value>4){
      return false
    }
    return true
  }

}