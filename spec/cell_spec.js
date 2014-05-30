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
})