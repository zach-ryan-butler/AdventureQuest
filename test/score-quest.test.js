import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

test('takes user object and choice object and scores it', function(assert) {
    //arrange
    const questId = 'battle';

    const user = {
        hp: 50,
        exp: 0,
        completed: {}
    };

    const choice = {
        hp: -20,
        exp: 10
    };

    const expected = {
        hp: 30,
        exp: 10,
        completed: { 
            battle: true
        }
    };
    //act
    const result = scoreQuest(user, choice, questId);
    //assert
    assert.deepEqual(result, expected);
});

test('takes user object and choice object and scores it', function(assert) {
    //arrange
    const questId = 'ferry';

    const user = {
        hp: 50,
        exp: 0,
        completed: {
            battle: true
        }
    };

    const choice = {
        hp: -20,
        exp: 10
    };

    const expected = {
        hp: 30,
        exp: 10,
        completed: {
            battle: true,
            ferry: true
        }
    };
    //act
    const result = scoreQuest(user, choice, questId);
    //assert
    assert.deepEqual(result, expected);
});

