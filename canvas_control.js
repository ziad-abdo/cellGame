window.onload = function(){
  mainControl = new LifeController()
  mainControl.threeCellVerticleStart()
  mainControl.setup()
  // window.setInterval(mainControl.runSet.bind(mainControl), 1000)
}


function LifeController(){
  this.View = new CanvasView();
  this.Model = new CellModel()
}

LifeController.prototype = {
  setup: function(){
    this.View.setScreen()
    this.imageScan()
  },
  runSet: function(){
      this.cellScan()
      this.cellNextStep()
      this.imageScan()
  },

  cellScan: function(){
    for (var y = 0; y<=(this.Model.arrayLength-1); y++){
      // debugger
      this.Model.allPossibleCells[y].checkNeighbors()
    }
  },
  cellNextStep: function(){
    for (var q = 0; q<=(this.Model.arrayLength-1); q++){
      this.Model.allPossibleCells[q].Step()
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
  },

  threeCellDiagonalStart: function(){//works
    this.Model.allPossibleCells[36].alive = true
    this.Model.allPossibleCells[45].alive = true
    this.Model.allPossibleCells[27].alive = true
  },

  threeCellVerticleStart: function(){//works
    this.Model.allPossibleCells[33].alive = true
    this.Model.allPossibleCells[43].alive = true
    this.Model.allPossibleCells[53].alive = true
  },
  tetrisCellStart: function(){
    this.Model.allPossibleCells[23].alive = true
    this.Model.allPossibleCells[32].alive = true
    this.Model.allPossibleCells[33].alive = true
    this.Model.allPossibleCells[34].alive = true
  },
  randomCellStart: function(){//fucked
    this.Model.allPossibleCells[35].alive = true
    this.Model.allPossibleCells[43].alive = true
    this.Model.allPossibleCells[44].alive = true
    this.Model.allPossibleCells[54].alive = true
  },
  threeTetrisStart: function(){//works
    this.Model.allPossibleCells[44].alive = true
    this.Model.allPossibleCells[45].alive = true
    this.Model.allPossibleCells[54].alive = true
  },
  fourVerticleStart: function(){ //works
    this.Model.allPossibleCells[34].alive = true
    this.Model.allPossibleCells[44].alive = true
    this.Model.allPossibleCells[54].alive = true
    this.Model.allPossibleCells[64].alive = true
  },
  gliderCellStart: function(){//fucked
    this.Model.allPossibleCells[32].alive = true
    this.Model.allPossibleCells[33].alive = true
    this.Model.allPossibleCells[34].alive = true
    this.Model.allPossibleCells[24].alive = true
    this.Model.allPossibleCells[13].alive = true
  }
}