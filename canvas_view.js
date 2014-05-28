function CanvasView(){
  this.fullCanvas = document.getElementsByClassName("main_screen")[0];
  // this.canvasContext = this.fullCanvas.getContext("2d");
  // this.OneSquare = (x, y, 50, 50)
}

CanvasView.prototype = {
  setScreen: function(){
    canvasContext = this.fullCanvas.getContext("2d");
    canvasContext.fillStyle = "rgb(0,0,0,1)"
    canvasContext.fillRect(0,0,500,500)
  }
}