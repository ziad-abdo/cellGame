function CellModel(){
  this.allPossibleCells = this.fillArray()
}

CellModel.prototype= {
  fillArray: function(){
    array = new Array()
    for(var i=0; i<100; i++){
      array.push(new Cell)
    }
    return array
  }
}

function Cell(){
  this.alive = false
}

Cell.prototype={

}