window.onload = function(){
  mainControl = new LifeController()
  mainControl.setup()
  mainControl.fourSquareStart()
}


function LifeController(){
  this.View = new CanvasView();
  this.Model = new CellModel()
}

LifeController.prototype = {
  setup: function(){
    this.View.setScreen()
  },

  cellScan: function(){
    for (var y = 0; y<=(this.Model.arrayLength-1); y++){
      // debugger
      this.Model.allPossibleCells[y].checkNeighbors()
    }
  },
  cellNextStep: function(){
    for (var q = 0; q<=(this.Model.arrayLength-1); q++){
      this.Model.allPossibleCells[q].alive = this.Model.allPossibleCells[q].nextState
    }
  },

  imageScan: function(){
    for (i = 0; i<=(this.Model.arrayLength-1); i++){
      this.View.setDisplay(this.Model.allPossibleCells[i].alive, this.Model.allPossibleCells[i].position)
    }
  },

  fourSquareStart: function(){
    this.Model.allPossibleCells[36].alive = true
    this.Model.allPossibleCells[37].alive = true
    this.Model.allPossibleCells[46].alive = true
    this.Model.allPossibleCells[47].alive = true
    this.Model.allPossibleCells[44].alive = true
    // this.Model.allPossibleCells[44].nextState = true
  }
}