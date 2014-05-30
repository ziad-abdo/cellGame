window.addEventListener( 'load', function(){
  mainControl = new LifeController()
  mainControl.bindEventListeners()
  mainControl.setup()

  mainControl.gliderCellStart()

})


function LifeController(){
  this.View = new CanvasView();
  this.Model = new CellModel()
  this.interval = setInterval()
}

LifeController.prototype = {
  bindEventListeners: function(){
    var glider = document.getElementById("glider")
    var tetris = document.getElementById("tetris")
    var fourSquare = document.getElementById("four-square")

    glider.addEventListener('click', this.gliderCellStart.bind(this), false)
    tetris.addEventListener('click', this.tetrisCellStart.bind(this), false)
    fourSquare.addEventListener('click', this.fourSquareCellStart.bind(this), false)
  },

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

  fourSquareCellStart: function(){
    clearInterval( this.interval )
    this.Model.allPossibleCells[36].alive = true
    this.Model.allPossibleCells[37].alive = true
    this.Model.allPossibleCells[46].alive = true
    this.Model.allPossibleCells[47].alive = true
    this.Model.allPossibleCells[44].alive = true
    this.interval = setInterval(this.runSet.bind(this), 600)
  },
  tetrisCellStart: function(){
    //works if it isnt touching edges,.... need to configure edge logic.
    clearInterval( this.interval )
    this.Model.allPossibleCells[35].alive = true
    this.Model.allPossibleCells[44].alive = true
    this.Model.allPossibleCells[45].alive = true
    this.Model.allPossibleCells[46].alive = true
    this.interval = setInterval(this.runSet.bind(this), 600)
  },
  gliderCellStart: function(){//ITS NOT FUCKED. GLIDER FUCKING WORKS
    clearInterval( this.interval )
    this.Model.allPossibleCells[32].alive = true
    this.Model.allPossibleCells[33].alive = true
    this.Model.allPossibleCells[34].alive = true
    this.Model.allPossibleCells[24].alive = true
    this.Model.allPossibleCells[13].alive = true
    this.interval = setInterval(this.runSet.bind(this), 600)
  }
}