function CanvasView(){
  this.fullCanvas = document.getElementsByClassName("main_screen")[0];
  this.canvasContext = this.fullCanvas.getContext("2d");
}

CanvasView.prototype = {
  setScreen: function(){
    this.canvasContext.fillStyle = "rgba(0,0,0,1)"
    this.canvasContext.fillRect(0,0,500,500)
  },
  setDisplay: function(livingState, position){
    if(livingState){
      this.canvasContext.fillStyle = "rgba(255, 255, 255, 1)"
      this.canvasContext.fillRect(this.findXAxis(position),this.findYAxis(position),50,50)
    }else{
      this.canvasContext.fillStyle = "rgba(0,0,0,1)"
      this.canvasContext.fillRect(this.findXAxis(position),this.findYAxis(position),50,50)
    }
  },
  findXAxis: function(index){
    return (index%10)*50
  },
  findYAxis: function(index){
    return (Math.floor(index/10))*50
  }
}
