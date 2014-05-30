{
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
  //works if it isnt touching edges,.... need to configure edge logic.
    this.Model.allPossibleCells[35].alive = true
    this.Model.allPossibleCells[44].alive = true
    this.Model.allPossibleCells[45].alive = true
    this.Model.allPossibleCells[46].alive = true
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
  gliderCellStart: function(){//ITS NOT FUCKED. GLIDER FUCKING WORKS
    this.Model.allPossibleCells[32].alive = true
    this.Model.allPossibleCells[33].alive = true
    this.Model.allPossibleCells[34].alive = true
    this.Model.allPossibleCells[24].alive = true
    this.Model.allPossibleCells[13].alive = true
  }
}