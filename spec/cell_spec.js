describe("Cell Testing: ", function(){
  beforeEach( function(){
    testCellModel = new CellModel()
    testCell = new Cell()
  })

  it( "fills an array with cell objects", function(){
    expect( testCellModel.fillArray().length).toEqual( 100 )
  })

  it("has generated an array of cells", function(){
    expect( testCellModel.allPossibleCells[50].alive ).toEqual( testCell.alive )
  })

  it("returns false for values greater than 3", function(){
    expect( testCell.liveOutcome(4) ).toEqual( false )
  })

  it("returns false for values less than 2", function(){
    expect( testCell.liveOutcome(1) ).toEqual( false )
  })

  it("returns true for values in between 1 and 4", function(){
    expect( testCell.liveOutcome(3) ).toEqual( true )
  })

  it("returns true for 3", function(){
    expect( testCell.deadOutcome(3) ).toEqual( true )
  })

})