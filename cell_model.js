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
  this.position = indexP
}

Cell.prototype={

}