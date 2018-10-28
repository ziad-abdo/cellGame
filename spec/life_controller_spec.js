describe("LifeController: ", function() {
  it("will be initialized without problems", function() {
    var subject = new LifeController();
    expect(subject.Interval).toBeUndefined();
  })

  describe("resetEmulation", function(){
    it("will clear interval, and reset the view and model", function() {
      var subject = new LifeController();
      var oldView = subject.View

      subject.resetEmulation();
      expect(oldView == subject.View).toBeFalsy();
      expect(subject.Interval).toBeNull();
    })
  })
});
