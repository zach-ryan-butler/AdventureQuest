import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

test('make choice radio buttons from choice object', function(assert) {
    //arrange
    const choice = {
        id: 'fight',
        description: 'Battle them',
        result: `
            Steeling your resolve you step forward and
            challenge the gym leader. After a fierce struggle the
            outcome is obvious. You win, but lose 20hp and gain 30 exp
        `,
        hp: -20,
        exp: 30
    };

    const expected = '<div><label for="fight">Battle them</label><input id="fight" type="radio" name="choice-buttons" value="fight"></div>';
    //act
    const dom = createChoice(choice);
    //assert
    assert.deepEqual(dom.outerHTML, expected);
});