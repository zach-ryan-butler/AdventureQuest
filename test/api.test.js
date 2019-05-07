import api from '../src/services/api.js';
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