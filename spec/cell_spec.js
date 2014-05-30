describe("Cell Testing: ", function(){
  beforeEach( function(){
    testCellModel = new CellModel()
    testCell = new Cell()
  })

  it( "fills an array with cell objects", function(){
    expect( testCellModel.fillArray().length).toEqual( 100 )
  })

  it("has generated an array of cells", function(){
    testCell.position = 50
    expect( testCellModel.allPossibleCells[50] ).toEqual( testCell )
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

  it("returns false for values other than 3", function(){
    expect( testCell.deadOutcome(14) ).toEqual( false )
  })

  it("when cell is dead returns true when numberOfLiveCells is 3", function(){
    expect( testCell.cellBehavior(3) ).toEqual( true )
  })

  it("when cell is dead returns false when numberOfLiveCells not 3", function(){
    expect( testCell.cellBehavior(15) ).toEqual( false )
  })

  it("returns array [1,10,-10,11,-9] if cell position is a left boundary", function(){
    expect( testCell.checkType(30) ).toEqual( [1, 10, -10, 11, -9] )
  })
})