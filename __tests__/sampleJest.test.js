describe('This is an example of a test', () => {
  it('should add numbers correctly', () => {
    expect(1 + 2).toEqual(3)
  })

  test('if an item is an element of an array', () => {
    const fruits = ['apple', 'pear']
    expect(fruits).toContain('pear')
  })
})
