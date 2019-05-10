const test = QUnit.test;

function createChoice(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', choice.id);
    label.textContent = 'Battle them';
    
    input.setAttribute('id', choice.id);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'choice-buttons');
    input.setAttribute('value', choice.id);
    
    div.appendChild(label);
    div.appendChild(input);

    return div;
}

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