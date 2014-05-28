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
  }
}