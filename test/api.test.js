import api from '../src/services/api.js';
import questData from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear;
});

api.storage = sessionStorage;

test('signUp saves user info getUser grabs it from local storage', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'ash',
        pokemon: 'pikachu',
        hp: 50,
        exp: 0
    };

    //Act 
    // Call the function you're testing and set the result to a const
    api.signUp(user);
    const result = api.getUser();
    //Assert
    assert.deepEqual(result, user);
});

test('get quest data', function(assert) {
    //arrange
    const expected = questData;
    //act
    const quests = api.getQuests();
    //assert
    assert.deepEqual(quests, expected);
});

test('get quest data by id', function(assert) {
    //arrange
    const expectedQuest = questData[1];
    //act
    const foundQuest = api.getQuest(expectedQuest.id);
    //assert
    assert.deepEqual(foundQuest, expectedQuest);
});