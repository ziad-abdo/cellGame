window.onload = function(){
  mainControl = new LifeController()
  mainControl.setup()
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
    for (i = 0; i<=(this.Model.arrayLength-1); i++){
      debugger
      this.View.setDisplay(this.Model.allPossibleCells[i].alive, this.Model.allPossibleCells[i].position)
    }
  }
}