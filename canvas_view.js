function CanvasView(){
  this.fullCanvas = document.getElementsByClassName("main_screen")[0];
  // this.canvasContext = this.fullCanvas.getContext("2d");
  // this.OneSquare = (x, y, 50, 50)
}

CanvasView.prototype = {
  setScreen: function(){
    canvasContext = this.fullCanvas.getContext("2d");
    canvasContext.fillStyle = "rgba(0,0,0,1)"
    canvasContext.fillRect(0,0,500,500)
  },
  setDisplay: function(livingState, position){
    if(livingState){
      canvasContext.fillstyle = "rgba(255,255,255,1)"
      canvasContext.fillRect(this.findXAxis(position),this.findYAxis(position),50,50)
    }else{
      canvasContext.fillstyle = "rgba(0,0,0,1)"
      canvasContext.fillRect(this.findXAxis(position),this.findYAxis(position),50,50)
    }
  },
  findXAxis: function(index){
    return (index%10)*50
  },
  findYAxis: function(index){
    return (Math.floor(index/10))*50
  }
}