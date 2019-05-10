import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

test('takes user object and choice object and scores it', function(assert) {
    //arrange
    const user = {
        hp: 50,
        exp: 0
    };

    const choice = {
        hp: -20,
        exp: 10
    };

    const expected = {
        hp: 30,
        exp: 10
    };
    //act
    const result = scoreQuest(user, choice);
    //assert
    assert.deepEqual(result, expected);
});