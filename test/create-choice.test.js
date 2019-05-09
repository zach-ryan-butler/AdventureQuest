const test = QUnit.test;

function createChoice(choice) {
    
}

test('make choice radio buttons from choice object', function(assert) {
    //arrange
    const choice = {
        id: 'fight',
        description: 'Battle them'
    };

    const expected = '<div><label for="fight">Battle them</label><input id="fight" type="radio" name="choice-buttons" value="fight"></div>';
    //act
    const result = createChoice(choice);
    //assert
    assert.deepEqual(result, expected);
});